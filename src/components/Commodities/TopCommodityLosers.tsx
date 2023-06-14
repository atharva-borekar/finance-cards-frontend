import CustomCard from "components/CustomCard";
import { useCommodityTopLosers } from "hooks/stocks";
import { memo, useState } from "react";
import { Form, Spinner, Table } from "react-bootstrap";

const CommodityTopLosers = () => {
  const [market, setMarket] = useState("mcx");
  const { data: topLosersData, isLoading: topLosersLoading } =
    useCommodityTopLosers();
  return (
    <>
      <CustomCard
        header={
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mx-3">Commoditiy Top Losers</h3>

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
          topLosersLoading ? (
            <div className="d-grid p-5">
              <Spinner className="m-auto align-self-center" />
            </div>
          ) : topLosersData ? (
            <Table striped bordered hover variant="dark" className="mb-0">
              <thead style={{ position: "sticky", top: 0 }}>
                <tr>
                  {topLosersData?.table_config?.headers?.map((e: string) => (
                    <th>{e}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topLosersData?.data?.[market]?.map((market: any) => (
                  <tr key={market.market_name}>
                    {topLosersData?.table_config?.keys?.map((e: string) => (
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
export default memo(CommodityTopLosers);
