import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
// import navDailies from './modules/NavDailies/reducer';
// import closedEnds from './modules/NavClosedEnds/reducer';
// import openEnds from './modules/NavOpenEnds/reducer';
// import moneyMarkets from './modules/NavMoneyMarkets/reducer';
// import sicavs from './modules/NavSicavs/reducer';
// import gavs from './modules/NavGavs/reducer';
// import recipients from './modules/NavRecipients/reducer';
// import articles from './modules/Media/reducer';
// import tvAppearances from './modules/TVAppearances/reducer';
// import marketData from './modules/MarketData/reducer';
// import distributionData from './modules/NavDistribution/reducer';
// import taxInfo from './modules/TaxInfo/reducer';
// import inceptData from './modules/NavInceptPerf/reducer';
// import ytdData from './modules/NavYtdPerf/reducer';
// import fiveyrData from './modules/NavFiveYrPerf/reducer';
// import threeyrData from './modules/NavThreeYrPerf/reducer';
// import oneyrData from './modules/NavOneYrPerf/reducer';
// import tenyrData from './modules/NavTenYrPerf/reducer';
// import featuredFunds from './modules/FeaturedFunds/reducer'
// import currentGabRep from './modules/GabReps/reducer';
// import insights from './modules/Insights/reducer'
// import latestInsight from './modules/LatestInsight/reducer'
// import investorRelations from './modules/InvestorRelations/reducer';
// import portfolioManagers from './modules/PortfolioManagers/reducer';
// import media from './modules/MediaUploads/reducer'
// import tags from './modules/Tags/reducer'
// import docs from './modules/DocumentUploads/reducer'
// import multiPerfs from './modules/MultiPerfs/reducer'
// import pr from './modules/PressReleases/reducer'
// import carousel from './modules/FundsCarousel/reducer'
// import funds from './modules/Funds/reducer'
// import teams from './modules/Teams/reducer'
// import administrators from './modules/Administrators/reducer'
// import analysts from './modules/Analysts/reducer'
// import xbrls from './modules/Xbrl/reducer'
// import filings from './modules/Filings/reducer'
// import sicavDocs from './modules/SicavDocs/reducer'
// import search from './modules/Search/reducer'
// import totalYEAssets from './modules/TotalYEAssets/reducer'
// import mmLiquidity from './modules/MmLiquidity/reducer'
// import taxDocs from './modules/TaxDocs/reducer'
// // import prefDocs from './modules/PreferredIssues/reducer'
// import form8937s from './modules/Form8937s/reducer'
// import importantTaxDocs from './modules/ImportantTaxDocs/reducer'
// import sectors from './modules/FundsSectors/reducer'

const reducers = combineReducers({
  form,
  // articles,
  // tvAppearances,
  // navDailies,
  // closedEnds,
  // openEnds,
  // moneyMarkets,
  // sicavs,
  // gavs,
  // recipients,
  // marketData,
  // distributionData,
  // taxInfo,
  // inceptData,
  // ytdData,
  // fiveyrData,
  // oneyrData,
  // threeyrData,
  // tenyrData,
  // featuredFunds,
  // insights,
  // latestInsight,
  // currentGabRep,
  // investorRelations,
  // portfolioManagers,
  // media,
  // tags,
  // totalYEAssets,
  // docs,
  // pr,
  // carousel,
  // funds,
  // teams,
  // administrators,
  // analysts,
  // xbrls,
  // filings,
  // sicavDocs,
  // search,
  // multiPerfs,
  // mmLiquidity,
  // taxDocs,
  // // prefDocs,
  // form8937s,
  // importantTaxDocs,
  // sectors,
});

const middleware = [thunk];

// let composeEnhancer = compose;
//
// if (__DEV__) {
//   composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// }
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default createStore(
  reducers,
  compose(applyMiddleware(...middleware))
  // composeWithDevTools(applyMiddleware(...middleware))
)
