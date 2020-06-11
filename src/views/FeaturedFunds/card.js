import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { fundTypeForURL } from '../TableTools';
import {
  parseDollar,
  // parsePercentChange,
  // parsePercentChange2,
  // parsePercentChange3,
  parseDate2,
  parsePercentChange6
} from '../TableTools';

const FFCard = (props) => {
  const { ff, handleClick } = props
  const { doc_links } = ff
  // let percentChanged = (parseFloat(ff.ttl_return) * 100).toFixed(2)
  // percentChanged = (percentChanged >= 0 ? "+" : "-") + percentChanged
  // let end_date = new Date(ff.end_date)
  // end_date = (end_date.getMonth() + 1) + "/" + (end_date.getDate()) + "/" + (end_date.getFullYear())
  // let legalName = ff.fundshortname.split(' ').slice(0, -1).join(' ')
  // let shareClass = ff.fundshortname.split(' ').pop()
  const fundName = () => {
    const name = ff.fund_type === 'Open End' ? ff.fundshortname : ff.legalname2
    return name.replace(", Inc.", "").replace("Inc.", "").replace("<SUP>", " ").replace("</SUP>", "")
  }
  // console.log(ff.end_date)
  return(

      <Card interactive={true} className='ff-card' onClick={(e) => handleClick(e, ff.fund_code, fundTypeForURL(ff.fund_type))}>
        <Link to={ `/funds/${fundTypeForURL(ff.fund_type)}/` + ff.fund_code} className="fund-title">{fundName()}</Link><span className="ticker-sym">({ff.ticker_sym})</span>

        <div className="fund-data">
          <div className="price-info">
            <p className="price-date"> {ff.fund_type === "Open End" ? "NAV" : "price"} as of {parseDate2(ff.end_date)} (YTD)</p>
          </div>
          <p></p>
          <span className="price-span">{parseDollar(ff.end_price)}</span>
          <span className="ytd-span">{parsePercentChange6(ff.ttl_return)}</span>
        </div>
        <br />
        <p className="objective">{ff.objective.substr(0,150)}...</p>
        <div className="card-links" >
          <span className="card-link" >
            <a href={doc_links.factsheet || null} target="_blank" rel="noreferrer noopener" className="ff-doc-link">Factsheet</a>
          </span>
          <span className="card-link" >
            {
              ff.fund_type === "Open End" ?
              <a href={doc_links.prospectus || null} target="_blank" rel="noreferrer noopener" className="ff-doc-link">Prospectus</a> :
              <a href={doc_links.annual_report || null} target="_blank" rel="noreferrer noopener" className="ff-doc-link"> Annual Report</a>
            }
          </span>
        </div>
      </Card>

  )
}

export default FFCard

// Before removing Fund type and "w/o sales charge"
// <Card interactive={true} className='ff-card'>
//   <Link to={ `/funds/${fundTypeForURL(ff.fund_type)}/` + ff.fund_code} className="fund-title">{ff.fund_type === 'Open End' ? ff.fundshortname : ff.legalname2}</Link><span className="ticker-sym">({ff.ticker_sym})</span>
//   <br />
//   <div className="fund-data">
//     <span className="fund-type">{ff.fund_type}</span>
//     <br />
//     <div className="price-info">
//       <p className="price-without">price w/o sales charge</p>
//       <p className="price-date"> {ff.fund_type === "Open End" ? "NAV" : "price"} as of {moment(ff.end_date).format('MM/DD/YYYY')}</p>
//     </div>
//     <p></p>
//     <span className="price-span">{parseDollar(ff.end_price)}</span>
//     <span className="ytd-span">{parsePercentChange6(ff.ttl_return)}</span>
//   </div>
//   <br />
//   <p className="objective">{ff.objective.substr(0,150)}...</p>
//   <div className="card-links" >
//     <span className="card-link" >
//       <a href={doc_links.factsheet || null} target="_blank" rel="noreferrer noopener">Factsheet</a>
//     </span>
//     <span className="card-link" >
//       {
//         ff.fund_type === "Open End" ?
//         <a href={doc_links.prospectus || null} target="_blank" rel="noreferrer noopener">Prospectus</a> :
//         <a href={doc_links.annual_report || null} target="_blank" rel="noreferrer noopener"> Annual Report</a>
//       }
//     </span>
//   </div>
// </Card>
