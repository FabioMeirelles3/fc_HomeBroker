import type { Asset, AssetDaily, Order, Wallet } from "../models";

const url = "localhost:3000";

export async function getMyWallet(walletId: string): Promise<Wallet> {
  const response = await fetch(`http://${url}/wallets/${walletId}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`http://${url}/assets`);
  return response.json();
}

export async function getAsset(symbol: string): Promise<Asset> {
  const response = await fetch(`http://${url}/assets/${symbol}`);
  return response.json();
}

export async function getOrders(walletId: string): Promise<Order[]> {
  const response = await fetch(`http://${url}/orders?walletId=${walletId}`);
  return response.json();
}

export async function getAssetDailies(assetSymbol: string): Promise<AssetDaily[]> {
  const response = await fetch(`http://${url}/assets/${assetSymbol}/dailies`);
  return response.json();
}

export async function getWallets(): Promise<Wallet[]> {
  const response = await fetch(`http://${url}/wallets`);

  return response.json();
}
