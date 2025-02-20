import { Card, Tabs } from "flowbite-react";
import { AssetShow } from "../../../components/AssetShow";
import { OrderType } from "../../../models";
import { TabsItem } from "../../../components/Tabs";
import { OrderForm } from "../../../components/OrderForm";
import { AssetChartComponent } from "./AssetChartComponent";
import { WalletList } from "../../../components/WalletList";
import { getAsset, getMyWallet } from "../../../queries/queries";

export default async function AssetsDashboard({
  params,
  searchParams,
}: {
  params: Promise<{ assetSymbol: string }>;
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { assetSymbol } = await params;
  const { wallet_id: walletId } = await searchParams;

  if (!walletId) {
    return <WalletList />;
  }
  const wallet = await getMyWallet(walletId);

  if (!wallet) {
    return <WalletList />;
  }

  const asset = await getAsset(assetSymbol);

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <div className="flex flex-col space-y-2">
        <AssetShow asset={asset} />
        <div className="ml-2 font-bold text-2xl">R$ {asset.price}</div>
      </div>
      <div className="grid grid-cols-5 flex-grow gap-2">
        <div className="col-span-2">
          <Card>
            <Tabs>
              <TabsItem active title={<div className="text-blue-700">Comprar</div>}>
                <OrderForm asset={asset} walletId={walletId} type={OrderType.BUY}></OrderForm>
              </TabsItem>
              <TabsItem title={<div className="text-red-700">Vender</div>}>
                <OrderForm asset={asset} walletId={walletId} type={OrderType.SELL}></OrderForm>
              </TabsItem>
            </Tabs>
          </Card>
        </div>
        <div className="col-span-3 flex flex-grow">
          <AssetChartComponent asset={asset} />
        </div>
      </div>
    </div>
  );
}
