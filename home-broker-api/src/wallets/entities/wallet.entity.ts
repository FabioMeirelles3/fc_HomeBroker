import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import crypto from 'crypto';
import type { HydratedDocument } from 'mongoose';
import { WalletAsset, type WalletAssetDocument } from './wallet-asset.entity';
import mongoose from 'mongoose';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop({
    type: [mongoose.Schema.Types.String],
    set: (x) => [...new Set(x)],
    ref: WalletAsset.name,
  })
  assets: WalletAssetDocument[] | string[];

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
