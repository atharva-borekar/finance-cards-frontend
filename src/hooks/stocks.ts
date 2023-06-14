import { useQuery } from "react-query";
import {
  getCommodityTopGainers,
  getCommodityTopLosers,
  getMarketAction,
  getStockDetails,
  getStockQuerySuggestions,
  getTopGainers,
  getTopLosers,
} from "../services/services";

export const useStockQuerySuggestions = (searchQuery: string) => {
  return useQuery(
    ["stockQuerySuggestions", searchQuery],
    () => getStockQuerySuggestions(searchQuery),
    {
      select: (res: any) => {
        if (res) {
          let startIndex = res?.indexOf("(");
          let endIndex = res?.lastIndexOf(")");

          let jsonString = res?.substring(startIndex + 1, endIndex);
          let parsedData = JSON.parse(jsonString);
          return parsedData.map((e: any) => ({
            ...e,
            label: e.stock_name,
            value: e.sc_id,
          }));
        }
      },
    }
  );
};

export const useStockDetails = (selectedStock: string) => {
  return useQuery(
    ["stock", selectedStock],
    () => getStockDetails(selectedStock),
    {
      select: (res: any) => res.data,
      enabled: Boolean(selectedStock),
    }
  );
};

export const useMarketAction = () => {
  return useQuery(["marketAction"], () => getMarketAction(), {
    refetchInterval: 10000,
  });
};

export const useTopGainers = (selectedMarket = "nifty") => {
  return useQuery(
    ["topGainers", selectedMarket],
    () => getTopGainers(selectedMarket),
    {
      refetchInterval: 10000,
    }
  );
};

export const useTopLosers = (selectedMarket = "nifty") => {
  return useQuery(
    ["topLosers", selectedMarket],
    () => getTopLosers(selectedMarket),
    {
      refetchInterval: 10000,
    }
  );
};

export const useCommodityTopGainers = () => {
  return useQuery(["commodityTopGainers"], getCommodityTopGainers, {
    // refetchInterval: 10000, //uncomment if need to fetch periodically
  });
};

export const useCommodityTopLosers = () => {
  return useQuery(["commodityTopLosers"], () => getCommodityTopLosers(), {
    // refetchInterval: 10000, //uncomment if need to fetch periodically
  });
};
