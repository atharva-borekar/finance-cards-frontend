import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
      {/* <Select options={newsCategoryOptions} onChange={(e) => setCategory(e)} />
      <Form.Control value={query} onChange={(e) => setQuery(e.target.value)} /> */}
      {news.map((article: any) => (
        <Card key={article.url} className="m-1 bg-dark text-light">
          <Card.Body>
            <Row>
              <Col sm={12} lg={3}>
                <div>
                  <img
                    alt="news"
                    src={article?.urlToImage}
                    className="news-image"
                  />
                </div>
              </Col>
              <Col>
                <strong>
                  <h5 className="p-3 fw-800">{article.title}</h5>
                </strong>

                <p className="p-3">{article.description}</p>
                <div>
                  <a
                    className="p-3"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default FinanceNews;
