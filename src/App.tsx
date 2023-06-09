import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";

import StockSearch from "./components/StockSearch";
import MarketAction from "components/MarketAction";
import TopGainers from "components/Stocks/TopGainers";
import TopLosers from "components/Stocks/TopLosers";
import FinanceNews from "components/FinanceNews";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (err: any) => {
        toast.error(err);
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Row>
          <Col>
            <StockSearch />
          </Col>
          <Col>
            <MarketAction />
          </Col>
          <Col>
            <TopGainers />
          </Col>
          <Col>
            <TopLosers />
          </Col>
          <Col>
            <FinanceNews />
          </Col>
        </Row>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
