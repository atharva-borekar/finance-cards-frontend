export const API_ROUTES = {
  //login
  LOGIN: '/login',

  //scenario
  REVENUE: 'revenue',
  TEMP_SCENARIO: '/temp_scenario',
  SCENARIO_TOP_LINE_REVENUE: '/scenario_revenues',
  SCENARIO_FINANCIAL_REVIEW: '/scenario_profits',
  SCENARIO_DATA: '/cost_drivers',
  SAVED_SCENARIOS: '/saved_scenarios',

  //filters
  SAVED_FILTERS: '/saved_filters',
  FILTERED_DETAILS: '/filtered_details',
  APPLY_FILTERS: '/apply_filters',
  FILTERS: 'filters',
  YEARS: '/years',
  GEOGRAPHY_FILTERS: '/geography/filters',
  RETAILERS_FILTERS: '/retailers/filters',
  BRANDS_FILTERS: '/brands/filters',
  PRODUCTS_FILTERS: '/products/filters',

  //actual-plan
  toplineRevenueApiPath: (sectionName: string) => `/${sectionName}/topline_revenue`,
  financialRevenueApiPath: (sectionName: string) =>
    `/${sectionName}/financial_review`,
  geographicalPerformanceApiPath: (sectionName: string) =>
    `/${sectionName}/geographical_performance`,
  retailerRegionApiPath: (sectionName: string) => `/${sectionName}/retailer_region`,
  brandRevenueApiPath: (sectionName: string) => `/${sectionName}/brand_performance`,
  financialComparisonApiPath: (sectionName: string) =>
    `/${sectionName}/financial_comparison`,
  toplInsightsApiPath: (sectionName: string) => `/actual_plan/top_insights`, //for future use cases change actual_plan to sectionName

  //driver details
  driverDetailsApiPath: (sectionName: string) => `/${sectionName}/all_drivers`,
  driverOptionsApiPath: (sectionName: string) => `/${sectionName}/drivers`,
  DUE_TOS: '/driver_details/due_to',

  //model review
  BASE_PRICE: '/model_review/base_price_elasticity',
  PROMO_PRICE: '/model_review/promo_price_elasticity',
  ROI: '/model_review/roi',
  VOlUME_DECOMP: '/model_review/volume_decomp',

  //views
  VIEW_SCOPE: 'view_scope',

  //my view
  MY_VIEW_GRAPH_LIST_OPTIONS: '/my_view/graph_list',
  MY_VIEW_FAVOURITE_CARDS: '/my_view/favourite_cards',
  MY_VIEW_SAVE_FAVOURITE_CARDS: '/my_view/save_favourite_cards'
};
