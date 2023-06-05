import { memo, useState } from "react";

import Select from "react-select";
import { addDebounce } from "../utils";
import { useStockDetails, useStockQuerySuggestions } from "hooks/stocks";
import { Card, Col, Row } from "react-bootstrap";

const StockCard = (props: any) => {
  const { stock } = props;
  return stock ? (
    <Card bg="dark text-light">
      <Card.Body>
        <Row>
          <h3>
            <strong className="fs-2">{stock?.company}</strong>
          </h3>
          <Col xl={7}>
            <div>
              <div className="d-flex">
                <h4>
                  <strong>{stock?.pricecurrent} </strong>
                </h4>
                <small
                  className={`text-${
                    Number(stock?.pricechange) > 0 ? "success" : "danger"
                  } align-self-center mx-2`}
                >
                  {Number(stock?.pricechange).toFixed(3)} %
                </small>
              </div>
              <small>{stock?.lastupd}</small>
              <h5>{stock?.main_sector}</h5>
            </div>
          </Col>
          <Col>
            <div>Open: {stock?.OPN} </div>
            <div>Prev. Close: {stock?.priceprevclose} </div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-between">
            <div>High: {stock?.HP}</div>
            <div>Low: {stock?.LP} </div>
            <div>Volume: {stock?.VOL}</div>
          </div>
        </Row>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
};

const StockSearch = () => {
  const [stockQuery, setStockQuery] = useState("");
  const handleStockQueryChange = addDebounce((e: any) => setStockQuery(e));

  const { data } = useStockQuerySuggestions(stockQuery);
  const [selectedStock, setSelectedStock] = useState<any>();

  const { data: stockDetails } = useStockDetails(selectedStock?.value);
  return (
    <>
      <Select
        className="mb-3"
        placeholder="Search Stock"
        onInputChange={handleStockQueryChange}
        options={data}
        onChange={(e) => setSelectedStock(e)}
      />
      <StockCard stock={stockDetails} />
    </>
  );
};
export default memo(StockSearch);
