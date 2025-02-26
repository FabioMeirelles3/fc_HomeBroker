"use client";

import { useShallow } from "zustand/react/shallow";
import { useAssetStore } from "../store";
import type { Asset } from "../models";

export function AssetPrice(props: { asset: Asset }) {
  const { asset } = props;
  const assetFetched = useAssetStore(useShallow((state) => state.assets.find((a) => a.symbol === asset.symbol)));
  const price = assetFetched ? assetFetched.price : props.asset.price;

  return <div className="ml-2 font-bold text-2xl">R$ {price}</div>;
}
