import { useMarketAction } from "hooks/stocks";
import { memo } from "react";
import CustomCard from "./CustomCard";
import { Table } from "react-bootstrap";

const MarketAction = () => {
  const { data: marketActionData } = useMarketAction();
  return (
    <>
      <CustomCard
        header={<h3 className="mx-3">Market Action</h3>}
        body={
          marketActionData ? (
            <Table striped bordered hover variant="dark" className="mb-0">
              <thead style={{ position: "sticky", top: 0 }}>
                <tr>
                  {marketActionData?.table_config?.headers?.map((e: string) => (
                    <th>{e}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {marketActionData?.data?.map((market: any) => (
                  <tr key={market.market_name}>
                    {marketActionData?.table_config?.keys?.map((e: string) => (
                      <td>{market?.[e]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <>No Data</>
          )
        }
        // footer={<StockSearch />}
      />
    </>
  );
};
export default memo(MarketAction);
