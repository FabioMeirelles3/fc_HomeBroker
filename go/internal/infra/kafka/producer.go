package kafka

import pkafka "github.com/confluentinc/confluent-kafka-go/kafka"

type Producer struct {
	ConfigMap *pkafka.ConfigMap
}

func NewKafkaProducer(configMap *pkafka.ConfigMap) *Producer {
	return &Producer{ConfigMap: configMap}
}

func (p *Producer) Publish(msg interface{}, key []byte, topic string) error {
	producer, err := pkafka.NewProducer(p.ConfigMap)
	if err != nil {
		return err
	}

	message := &pkafka.Message{
		Value: msg.([]byte),
		Key:   key,
		TopicPartition: pkafka.TopicPartition{
			Topic:     &topic,
			Partition: pkafka.PartitionAny,
		},
	}

	err = producer.Produce(message, nil)
	if err != nil {
		return err
	}
	return nil
}
