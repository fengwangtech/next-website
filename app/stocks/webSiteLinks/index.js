import React, { useState } from "react";
import Styled from 'styled-components';
import ChoiceContainer from './choiceContainer';
import YahooImage from './images/yahoo.png';
import ZackImage from './images/Zack.png';
import StockChartsImage from './images/stockCharts.png';
import BarChartImage from './images/barChart.png';
import FinvizImage from './images/finviz.png';
import MartketWatchImage from './images/marketWatch.png';
import TradingViewImage from './images/tradingView.png';
import CnnImage from './images/cnn.png';
import Image from 'next/image'

const Container = Styled.div`
width: 100%;
margin: auto;
display: flex;
flex-wrap: wrap;
`;

const LinkContent = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
`;

const LinKType = {
  TradingView: 0,
  YahooSummary: 1,
  YahooProfile: 2,
  YahooChart: 3,
  ZackOverview: 4,
  ZackChart: 5,
  StockCharts: 6,
  BarChartOverview: 7,
  BarChart: 8,
  FinvizChart: 9,
  MarketWatchOverview: 10,
  MarketWatchChart: 11,
  CnnQuote: 12,
};

const GetLinkUrl = (linkType, name) => {
  switch (linkType) {
    case LinKType.YahooSummary:
      return  `https://finance.yahoo.com/quote/${name}?p=${name}`;
    case LinKType.YahooProfile:
        return  `https://finance.yahoo.com/quote/${name}/profile?p=${name}`;
    case LinKType.YahooChart:
      return  `https://finance.yahoo.com/quote/${name}/chart?p=${name}`;
    case LinKType.ZackOverview:
      return `https://www.zacks.com/stock/quote/${name}`;
    case LinKType.ZackChart:
      return `https://www.zacks.com/stock/chart/${name}/interactive`;
    case LinKType.StockCharts:
      return `https://stockcharts.com/h-sc/ui?s=${name}`;
    case LinKType.BarChartOverview:
      return `https://www.barchart.com/stocks/quotes/${name}/overview`;
    case LinKType.BarChart:
      return `https://www.barchart.com/stocks/quotes/${name}/interactive-chart`;
    case LinKType.FinvizChart:
      return `https://finviz.com/quote.ashx?t=${name}`;
    case LinKType.MarketWatchOverview:
      return `https://www.marketwatch.com/investing/stock/${name}`;
    case LinKType.MarketWatchChart:
      return `https://www.marketwatch.com/investing/stock/${name}/charts`;
    case LinKType.CnnQuote:
      return `https://money.cnn.com/quote/quote.html?symb=${name}`;
    default: 
      return `https://www.tradingview.com/chart/?symbol=${name}`;
  }
}

const StockLinks = [ 
  {
    type: LinKType.TradingView,
    title: 'chart',
    image: TradingViewImage,
    tooltip: 'TradingView chart',
  },
  {
    type: LinKType.YahooSummary,
    title: 'Summary',
    image: YahooImage,
    tooltip: 'Yahoo finance summary',
  },
  {
    type: LinKType.YahooProfile,
    title: 'Profile',
    image: YahooImage,
    tooltip: 'Yahoo finance profile',
  },
  {
    type: LinKType.YahooChart,
    title: 'Chart',
    image: YahooImage,
    tooltip: 'Yahoo finance chart',
  },
  {
    type: LinKType.ZackOverview,
    title: 'Overview',
    image: ZackImage,
    tooltip: 'Zacks overview',
  },
  {
    type: LinKType.ZackChart,
    title: 'Chart',
    image: ZackImage,
    tooltip: 'Zacks chart',
  },
  {
    type: LinKType.StockCharts,
    image: StockChartsImage,
    tooltip: 'StockCharts chart',
  },
  {
    type: LinKType.BarChartOverview,
    title: 'Overview',
    image: BarChartImage,
    tooltip: 'BarChart overview',
  },
  {
    type: LinKType.BarChart,
    title: 'Chart',
    image: BarChartImage,
    tooltip: 'BarChart chart',
  },
  {
    type: LinKType.FinvizChart,
    title: 'Chart',
    image: FinvizImage,
    tooltip: 'Finviz chart',
  },  
  {
    type: LinKType.MarketWatchOverview,
    title: 'Overview',
    image: MartketWatchImage,
    tooltip: 'MarketWatch overview',
  },  
  {
    type: LinKType.MarketWatchChart,
    title: 'Chart',
    image: MartketWatchImage,
    tooltip: 'MarketWatch chart',
  },  
  {
    type: LinKType.CnnQuote,
    title: 'Quote',
    image: CnnImage,
    tooltip: 'CNN Business Quote',
  },  
];

const RelatedLinks = (props) => {
  const [activeLink, setActiveLink] = useState(props.currentLink);

  const onClick = (linkType) => {
    setActiveLink(linkType);    
    props.onLinkClick(linkType);
  }
   
  const onDbClick = (linkType) => {
    setActiveLink(linkType);    
    props.onLinkDbClick(linkType);
  }
   
  return (
    <Container>
      { StockLinks.map((link, index) => {
        return (
          <ChoiceContainer key={index} selected={activeLink === link.type} 
          handleClick={() => onClick(link.type)} handleDbClick={() => onDbClick(link.type)}
          >
            <LinkContent>
              <Image src={link.image} width={64} height={64} alt='icon' />
              <span style={{marginTop:'6px', fontWeight:'bold'}}>{link.title}</span>
            </LinkContent>
          </ChoiceContainer>    
        )})
      }
     
    </Container>
  );
};
 
export { RelatedLinks, GetLinkUrl }