import { getApi } from "../api/apiHelper";

export const getStockQuerySuggestions = (searchQuery: string) => {
  return getApi<null, any>(
    "https://www.moneycontrol.com/mccode/common/autosuggestion_solr.php",
    {
      classic: true,
      query: searchQuery,
      type: 1,
      format: "json",
      callback: "suggest1",
    }
  );
};

export const getStockDetails = (selectedStock: string) => {
  return getApi<null, any>(
    `https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/${selectedStock}`
  );
};

export const getMarketAction = () => {
  return getApi<null, any>(`http://localhost:8000/finance/market_action`);
};

export const getTopGainers = (selectedMarket: string) => {
  return getApi<null, any>(`http://localhost:8000/finance/top_gainers`, {
    market: selectedMarket,
  });
};
export const getTopLosers = (selectedMarket: string) => {
  return getApi<null, any>(`http://localhost:8000/finance/top_losers`, {
    market: selectedMarket,
  });
};

export const getCommodityTopGainers = () => {
  return getApi<null, any>(
    `http://localhost:8000/finance/commodities/top_gainers`
  );
};
export const getCommodityTopLosers = () => {
  return getApi<null, any>(
    `http://localhost:8000/finance/commodities/top_losers`
  );
};
