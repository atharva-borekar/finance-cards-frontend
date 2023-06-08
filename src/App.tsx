import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast } from "react-toastify";
import { Col, Container, Form, Row } from "react-bootstrap";

import StockSearch from "./components/StockSearch";
import MarketAction from "components/MarketAction";
import TopGainers from "components/Stocks/TopGainers";
import TopLosers from "components/Stocks/TopLosers";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import CustomCard from "components/CustomCard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (err: any) => {
        toast.error(err);
      },
    },
  },
});

const newsApiKey = "c19102ef668b4efcbe99f65b41b56845";
const newsCategoryOptions = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
].map((e) => ({ label: e.toUpperCase(), value: e }));
const getNewsUrl = (category = "", query = "") =>
  `https://newsapi.org/v2/top-headlines?language=en&country=in${
    query ? `&q=${query}` : "&query=finance"
  }${
    category ? `&category=${category}` : "&category=business"
  }&apiKey=${newsApiKey}`;

const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState<any>({ label: "", value: "" });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const url = getNewsUrl(category?.value, query);
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [category, query]);

  return (
    <div>
      <h6>Finance News</h6>
      <Select options={newsCategoryOptions} onChange={(e) => setCategory(e)} />
      <Form.Control value={query} onChange={(e) => setQuery(e.target.value)} />
      {news.map((article: any) => (
        <CustomCard
          key={article.url}
          header={<h3>{article.title}</h3>}
          body={<p className="p-3">{article.description}</p>}
          footer={
            <a
              className="p-3"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          }
        />
      ))}
    </div>
  );
};

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
