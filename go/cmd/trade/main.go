package main

import (
	"encoding/json"
	"fmt"
	"sync"

	"github.com/FabioMeirelles3/fc_HomeBroker/go/internal/infra/kafka"
	"github.com/FabioMeirelles3/fc_HomeBroker/go/internal/market/dto"
	"github.com/FabioMeirelles3/fc_HomeBroker/go/internal/market/entity"
	"github.com/FabioMeirelles3/fc_HomeBroker/go/internal/market/transformer"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
)

func main() {
	ordersIn := make(chan *entity.Order)
	ordersOut := make(chan *entity.Order)
	wg := &sync.WaitGroup{}
	defer wg.Wait()

	kafkaMsgChan := make(chan *ckafka.Message)

	consumerConfig := &ckafka.ConfigMap{
		"bootstrap.servers": "host.docker.internal:9094",
		"group.id":          "trade",
		"auto.offset.reset": "latest",
	}

	producertConfig := &ckafka.ConfigMap{
		"bootstrap.servers": "host.docker.internal:9094",
	}

	producer := kafka.NewKafkaProducer(producertConfig)

	consumer := kafka.NewConsumer(consumerConfig, []string{"orders"})
	go consumer.Consume(kafkaMsgChan)

	book := entity.NewBook(ordersIn, ordersOut, wg)
	go book.Trade()

	go func() {
		for msg := range kafkaMsgChan {
			wg.Add(1)
			fmt.Println(string(msg.Value))
			tradeInput := dto.TradeInput{}
			err := json.Unmarshal(msg.Value, &tradeInput)
			if err != nil {
				panic(err)
			}

			order := transformer.TransformInput(tradeInput)
			ordersIn <- order
		}
	}()

	for res := range ordersOut {
		outputOrder := transformer.TransformOutput(res)
		jsonOrder, err := json.MarshalIndent(outputOrder, "", "")
		if err != nil {
			panic(err)
		}

		fmt.Println(string(jsonOrder))
		producer.Publish(jsonOrder, []byte("processed_orders"), "processed_orders")
	}
}
