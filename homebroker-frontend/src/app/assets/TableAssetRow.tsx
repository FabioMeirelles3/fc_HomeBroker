"use client";

import { Button, TableCell, TableRow } from "flowbite-react";
import Link from "next/link";
import type { Asset } from "../../models";
import { useAssetStore } from "../../store";
import { useShallow } from "zustand/shallow";
import { AssetShow } from "../../components/AssetShow";

export function TableAssetRow(props: { asset: Asset; walletId: string }) {
  const { asset, walletId } = props;

  const assetFound = useAssetStore(useShallow((state) => state.assets.find((a) => a.symbol === asset.symbol)));

  const asset_ = assetFound || asset;

  return (
    <TableRow>
      <TableCell>
        <AssetShow asset={asset_} />
      </TableCell>
      <TableCell>R$ {asset_.price}</TableCell>
      <TableCell>
        <Button className="w-fit" color="light" as={Link} href={`/assets/${asset.symbol}?wallet_id=${walletId}`}>
          Comprar/vender
        </Button>
      </TableCell>
    </TableRow>
  );
}
