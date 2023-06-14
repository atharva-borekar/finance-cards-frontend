import CustomCard from "components/CustomCard";
import { useCommodityTopGainers } from "hooks/stocks";
import { memo, useState } from "react";
import { Form, Spinner, Table } from "react-bootstrap";

const CommodityTopGainers = () => {
  const [market, setMarket] = useState("mcx");
  const { data: topGainersData, isLoading: topGainersLoading } =
    useCommodityTopGainers();
  return (
    <>
      <CustomCard
        header={
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mx-3">Commodity Top Gainers</h3>

            <Form.Check
              type="switch"
              id="custom-switch"
              label={market.toUpperCase()}
              onChange={(e) => {
                if (e.target.checked) setMarket("ncdex");
                else setMarket("mcx");
              }}
            />
          </div>
        }
        body={
          topGainersLoading ? (
            <div className="d-grid p-5">
              <Spinner className="m-auto align-self-center" />
            </div>
          ) : topGainersData ? (
            <Table striped bordered hover variant="dark" className="mb-0">
              <thead style={{ position: "sticky", top: 0 }}>
                <tr>
                  {topGainersData?.table_config?.headers?.map((e: string) => (
                    <th>{e}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topGainersData?.data?.[market]?.map((market: any) => (
                  <tr key={market.market_name}>
                    {topGainersData?.table_config?.keys?.map((e: string) => (
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
export default memo(CommodityTopGainers);
