import { Icon } from "@blueprintjs/core";
import React from 'react';


export const parseChange = (data) => {
  let float =  parseFloat(data, 10)
  let preResult
  if (float > 0){
    preResult = <span style={{'color': '#22d625'}}>+ {float.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='#22d625'/></span>
  } else if (float < 0) {
    preResult = <span style={{'color': '#f91d04'}}>- {float.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#f91d04'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parseChange2 = (data) => {
  let float =  parseFloat(data, 10)
  let preResult
  if (float > 0){
    preResult = <span style={{'color': '005800'}}>+ {float.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='005800'/></span>
  } else if (float < 0) {
    preResult = <span style={{'color': '#990713'}}>- {float.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#990713'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parseChange3 = (data) => {
  let float =  parseFloat(data, 10)
  let preResult
  if (float > 0){
    preResult = <span>+${float.toFixed(2)}<sup><Icon icon='caret-up' iconSize={18} color='#22d625'/></sup></span>
  } else if (float < 0) {
    preResult = <span>-${float.toFixed(2).slice(1)}<sup><Icon icon='caret-down' iconSize={18} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parseChange4 = (data, currency) => {
  let float =  parseFloat(data, 10)
  let preResult
  if (float > 0){
    preResult = <span>+{setCurrency(currency)}{float.toFixed(2)}<sup><Icon icon='caret-up' iconSize={18} color='#22d625'/></sup></span>
  } else if (float < 0) {
    preResult = <span>-{setCurrency(currency)}{float.toFixed(2).slice(1)}<sup><Icon icon='caret-down' iconSize={18} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{setCurrency(currency)}{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const setCurrency = (currency) => {
  let result
  if (currency === 'USD'){
    result = <span>$</span>
  } else if (currency === 'EUR'){
    result = <span>&euro;</span>
  } else if (currency === 'GBP'){
    result = <span>&#163;</span>
  } else if (currency === 'CHF'){
    result = <span>CHF</span>
  } else if (currency === 'SEK'){
    result = <span>SEK&#107;</span>
  }
  return result
}

export const parseName = (fund_code, displayname_) => {
  if (fund_code === (-118)){
    return <span>Gabelli Healthcare & Wellness<sup>Rx</sup> Trust</span>
  } else if (fund_code === -1183){
    return <span>The Gabelli Healthcare & Wellness<sup>Rx</sup> Trust - Preferred Series B</span>
  } else if (fund_code === -1182){
    return <span>The Gabelli Healthcare & Wellness<sup>Rx</sup> Trust - Preferred Series A</span>
  } else if (fund_code === -1181){
    return <span>The Gabelli Healthcare & Wellness<sup>Rx</sup> Trust - NYSE</span>
  } else if (fund_code === 5001) {
    return <span>Media Mogul NextShares <sup>TM</sup> Trust</span>
  } else if (fund_code === 5002) {
    return <span>Food of All Nations NextShares <sup>TM</sup> Trust</span>
  } else if (!fund_code) {
    return <span>The Gabelli Healthcare & Wellness<sup>Rx</sup> Trust</span>
  } else {
    return <span>{displayname_}</span>
    }
  // return fund.legalname
  }


export const parseNameForPDF = (fund_code, displayname_) => {
  if (fund_code === -118){
    return <span>Gabelli Healthcare & <br></br>Wellness<sup>Rx</sup> Trust</span>
  } else if (fund_code === -111){
    return <span>The Gabelli<br></br> Equity Trust Inc.</span>
  } else if (fund_code === -112){
    return <span>The Gabelli<br></br> Multimedia Trust Inc.</span>
  } else if (fund_code === -113){
    return <span>Gabelli<br></br> Utility Trust</span>
  } else if (fund_code === -114){
    return <span>Gabelli Dividend<br></br> & Income Trust</span>
  } else if (fund_code === -115){
    return <span>Gabelli Global<br></br> Utility & Income Trust</span>
  } else if (fund_code === -116){
    return <span>GAMCO Global Gold,<br></br> Natural Resources<br></br>& Income Trust</span>
  } else if (fund_code === -117){
    return <span>The GDL Fund</span>
  } else if (fund_code === -119){
    return <span>GAMCO Natural Resources,<br></br> Gold & Income Trust</span>
  } else if (fund_code === -120){
    return <span>Gabelli Global Small<br></br> And Mid Cap Value Trust</span>
  } else if (fund_code === -122){
    return <span>Gabelli Go Anywhere<br></br> Trust</span>
  } else if (fund_code === -123){
    return <span>Bancroft Fund Ltd.</span>
  } else if (fund_code === -124){
    return <span>Ellsworth Growth And<br></br> Income Fund Ltd.</span>
  } else if (fund_code === 407){
    return <span>The Gabelli Convertible<br></br> And Income Securities<br></br> Fund Inc.</span>
  } else {
    return <span>{displayname_}</span>
  }
}

export const parseAmount = (data) => {
  return 'US$ ' + parseFloat(data, 10).toLocaleString()
}

export const parseDollar = (data) => {
  return '$' + parseFloat(data, 10).toLocaleString(navigator.language, {maximumFractionDigits: 2, minimumFractionDigits: 2})
}

export const parseDollar2 = (data) => {
  return '$' + parseFloat(data, 10).toLocaleString()
}

export const parsePrice = (data) => {
  let float = parseFloat(data, 10)
  let preResult = 'US$ ' + float.toFixed(2)
  let result = data ? preResult : '-'
  return result
}

export const parsePrice2 = (data) => {
  let float = parseFloat(data, 10)
  let preResult = '$' + float.toFixed(2)
  let result = data ? preResult : '-'
  return result
}

export const parseCurrency = (data, currency) => {
  let float = parseFloat(data, 10).toFixed(2)
  let preResult
  if (currency === 'USD'){
    preResult = <span>USD {float}</span>
  } else if (currency === 'EUR'){
    preResult = <span>EUR&euro; {float}</span>
  } else if (currency === 'GBP'){
    preResult = <span>GBP&#163; {float}</span>
  } else if (currency === 'CHF'){
    preResult = <span>CHF {float}</span>
  } else if (currency === 'SEK'){
    preResult = <span>SEK&#107; {float}</span>
  }
  let result = data ? preResult : '-'
  return result
}

export const parseCurrency2 = (data, currency) => {
  let float = parseFloat(data, 10).toLocaleString()
  let preResult
  if (currency === 'USD'){
    preResult = <span>USD {float}</span>
  } else if (currency === 'EUR'){
    preResult = <span>USD {float}</span>
  } else if (currency === 'GBP'){
    preResult = <span>USD {float}</span>
  } else if (currency === 'CHF'){
    preResult = <span>USD {float}</span>
  } else if (currency === 'SEK'){
    preResult = <span>USD {float}</span>
  }
  let result = data ? preResult : '-'
  return result
}

export const parsePercentChange = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span style={{'color': '#005800'}}>+{percentage.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='005800'/></span>
  } else if (percentage < 0) {
    preResult = <span style={{'color': '#990713'}}>-{percentage.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#990713'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parseYield = (data) => {
  let float = parseFloat(data, 10)
  let preResult
  if (float > 0){
    preResult = <span style={{'color': '#005800'}}>+{float.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='005800'/></span>
  } else if (float < 0) {
    preResult = <span style={{'color': '#990713'}}>-{float.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#990713'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange1b = (data) => {
  let percentage = parseFloat(data, 10)
  let preResult
  if (percentage > 0){
    preResult = <span style={{'color': '#005800'}}>+{percentage.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='005800'/></span>
  } else if (percentage < 0) {
    preResult = <span style={{'color': '#990713'}}>-{percentage.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#990713'/></span>
  } else {
    preResult = <span>{percentage.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange2 = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span>+{percentage.toFixed(2)}<Icon icon='caret-up' iconSize={10} color='#22d625'/></span>
  } else if (percentage < 0) {
    preResult = <span>-{percentage.toFixed(2).slice(1)}<Icon icon='caret-down' iconSize={10} color='#f91d04'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange3 = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span>+{percentage.toFixed(2)}%<sup><Icon icon='caret-up' iconSize={18} color='#22d625'/></sup></span>
  } else if (percentage < 0) {
    preResult = <span>-{percentage.toFixed(2).slice(1)}%<sup><Icon icon='caret-down' iconSize={18} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange3b = (data) => {
  let percentage = parseFloat(data, 10)
  let preResult
  if (percentage > 0){
    preResult = <span>+{percentage.toFixed(2)}%<sup><Icon icon='caret-up' iconSize={18} color='#22d625'/></sup></span>
  } else if (percentage < 0) {
    preResult = <span>-{percentage.toFixed(2).slice(1)}%<sup><Icon icon='caret-down' iconSize={18} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{percentage.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange4 = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span>+{percentage.toFixed(2)}%<sup><Icon icon='caret-up' iconSize={12} color='#22d625'/></sup></span>
  } else if (percentage < 0) {
    preResult = <span>-{percentage.toFixed(2).slice(1)}%<sup><Icon icon='caret-down' iconSize={12} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange5 = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span style={{'color': '#22d625'}}>+{percentage.toFixed(2)}%<Icon icon='caret-up' iconSize={10} color='#22d625'/></span>
  } else if (percentage < 0) {
    preResult = <span style={{'color': '#f91d04'}}>-{percentage.toFixed(2).slice(1)}%<Icon icon='caret-down' iconSize={10} color='#f91d04'/></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}

export const parsePercentChange6 = (data) => {
  let float = parseFloat(data, 10)
  let percentage = float * 100
  let preResult
  if (percentage > 0){
    preResult = <span style={{'color': '#005800'}}>+{percentage.toFixed(2)}%<sup><Icon icon='caret-up' iconSize={12} color='#005800'/></sup></span>
  } else if (percentage < 0) {
    preResult = <span style={{'color': '#f91d04'}}>-{percentage.toFixed(2).slice(1)}%<sup><Icon icon='caret-down' iconSize={12} color='#f91d04'/></sup></span>
  } else {
    preResult = <span>{float.toFixed(2)}</span>
  }
  let result =  data ? preResult : '-'
  return result
}



export const parsePerformance = (data) => {
  const float = parseFloat(data, 10)
  if (float === 0) {
    return '0.00%'
  } else if (float > 0) {
    return '+' + (float * 100).toFixed(2) + '%'
  } else if (float < 0) {
    return (float * 100).toFixed(2) + '%'
  }
  return '-'
}

export const parsePercentage = (data) => {
  let float = parseFloat(data, 10)
  return (float * 100).toFixed(2) + '%'
}

export const parsePercentage2 = (data) => {
  let float = parseFloat(data, 10)
  return (float * 100).toFixed(1) + '%'
}

export const parsePercentage3 = (data) => {
  let float = parseFloat(data, 10)
  return data === 'N/A' ? data : float.toFixed(1) + '%'
}

export const parseDate = (date) => {
  let timestamp = new Date (date)
  let month = timestamp.toLocaleString('en-us', {month: 'short'})
  let day = timestamp.getUTCDate()
  let year = timestamp.getFullYear()
  return `${day}-${month}-${year}`
}

export const parseDate2 = (date) => {
  // let timestamp = new Date (date)
  // let month = timestamp.getUTCMonth() + 1;
  // let day = timestamp.getUTCDate();
  // let year = timestamp.getUTCFullYear()
  // return `${month}/${day}/${year}`
  let split = date.split('-')
  let year = split[0]
  let month = split[1]
  let day = split[2].slice(0,2)
  return `${month}/${day}/${year}`
}

export const parseDate3 = (date) => {
  // let timestamp = new Date (date)
  // let month = timestamp.toLocaleString('en-us', {month: 'short'});
  // let day = timestamp.getUTCDate();
  // let year = timestamp.getUTCFullYear();
  let split = date.split('-')
  let year = split[0]
  let month = split[1]
  let day = split[2].slice(0,2)
  return `${year}-${month}-${day}`
}

export const parseDate4 = (date) => {
  // let timestamp = new Date (date)
  // let month = timestamp.toLocaleString('en-us', {month: 'short'});
  // let day = timestamp.getUTCDate();
  // let year = timestamp.getUTCFullYear();
  let split = date.split('-')
  let year = split[0]
  let month = parseInt(split[1], 10)
  let day = split[2].slice(0,2)
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const fullMonth = monthNames[month - 1]
  return `${day}-${fullMonth}-${year}`
}

export const parseDate5 = (date) => {
  let split = date.split('/')
  let day = split[0]
  let month = split[1]
  let year = split[2]
  return `${year}-${month}-${day}`
}

export const parseFullDate = (date) => {
  let split = date.split('-')
  let year = split[0]
  // let month = split[1]
  let day = split[2].slice(0,2)
  const newDate = new Date(date)
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const fullMonth = monthNames[newDate.getMonth()]
  return `${fullMonth} ${day}, ${year}`
}

export const parseTime = (time) => {
  let arr = time.split(":")
  if (arr[1].length === 1) {
    arr[1] = "0" + arr[1]
    return arr.join(":")
  } else {
    return time
  }
}

// export const isDaylightSavings = (currentDate) => {
//   Date.prototype.stdTimezoneOffset = function(){
//     const jan = new Date(this.getFullYear(), 0, 1)
//     const jul = new Date(this.getFullYear(), 6, 1)
//     return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
//   }
//
//   Date.prototype.isDstObserved = function(){
//     return this.getTimezoneOffset() < this.stdTimezoneOffset()
//   }
//
//   const today = currentDate
//   if(today.isDstObserved()){
//     return true
//   }
//   return false
// }

export const fundTypeForURL = (fundType) => {
  switch (fundType) {
    case "Open End":
      return "open_ends"
    case "Closed End":
      return "closed_ends"
    case "Open/MoneyMarket":
      return "money_markets"
    case "NextShares":
      return "etfs"
    default:
      return "null"
  }
}

export const uploadType = (type) => {
  let docType
  switch(type){
    case "sai":
      docType = "SAI"
      break;
    case "prospectus":
      docType = "Prospectus"
      break;
    case "quarterly_report":
      docType = "Quarterly Reports"
      break;
    case "annual_report":
      docType = "Annual Reports"
      break;
    case "semi_annual_report":
      docType = "Semi-Annual Reports"
      break;
    case "reports":
      docType = "Annual Reports"
      break;
    case "factsheet":
      docType = "Factsheet"
      break;
    case "summary":
      docType = "Summary"
      break;
    case "soi":
      docType = "SOI"
      break;
    case "leverage":
      docType = "Closed-End Leverage Analysis"
      break;
    case "commentary":
      docType = "Commentary"
      break;
    case "summary_prospectus":
      docType = "Summary Prospectus"
      break;
    case "prospectus_supp":
      docType = "Prospectus Supplement"
      break;
    case "off_quarter_report":
      docType = "Off Quarter Report"
      break;
    case "xbrl":
      docType = "XBRL"
      break;
    case 'prospectus_supplement':
      docType = "Prospectus Supplement"
      break;
    case 'proxy_statement':
      docType = "Proxy Statement"
      break;
    default:
      docType = null
  }
  return docType
}

export const searchCategory = (category) => {
  switch(category){
    case "press_releases":
      return "Press Releases"
    case "insights":
      return "Insights"
    case "uploads":
      return "Literature"
    case "products":
      return "Products"
    default:
      return "Category"
  }
}

export const yearOptions = (startDate=1965, includeCurrentYear=true) => {
  const today = new Date()
  let year = includeCurrentYear ? today.getFullYear() : today.getFullYear() - 1
  const options = []
  while(year >= startDate){
    options.push(<option key={year}>{year}</option>)
    year--
  }
  return options
}

export const adjustPmOrder = (array) => {
  const sortedArray = array
  const mario = array.find( pm => pm.name.includes("Mario"))
  const howard = array.find( pm => pm.name.includes("Howard"))
  const chris = array.find( pm => pm.name.includes("Marangi"))
  const kevin = array.find( pm => pm.name.includes("Dreyer"))
  const melody = array.find( pm => pm.name.includes("Bryant"))
  const james = array.find( pm => pm.name.includes("James Dinsmore"))
  if (howard) {
    const index = sortedArray.findIndex( pm => pm === howard )
    sortedArray.splice(index, 1)
    sortedArray.unshift(howard)
  }
  if (kevin) {
    const index = sortedArray.findIndex( pm => pm === kevin )
    sortedArray.splice(index, 1)
    sortedArray.unshift(kevin)
  }
  if (chris) {
    const index = sortedArray.findIndex( pm => pm === chris )
    sortedArray.splice(index, 1)
    sortedArray.unshift(chris)
  }
  if (mario) {
    const index = sortedArray.findIndex( pm => pm === mario )
    sortedArray.splice(index, 1)
    sortedArray.unshift(mario)
  }
  if (melody) {
    const index = sortedArray.findIndex( pm => pm === melody)
    sortedArray.splice(index, 1)
    sortedArray.push(melody)
  }
  if (james) {
    const index = sortedArray.findIndex( pm => pm === james )
    sortedArray.splice(index, 1)
    sortedArray.push(james)
  }
  return sortedArray
}

export const parseFundLegalName = fundLegalName => {
  return (
    fundLegalName.replace(", Inc.", "").replace(", Inc", "").replace(" Inc.", "").replace("<SUP>", "").replace("</SUP>", "")
  )
}

export const yearWithData = (month) => {
  const date = new Date()
  if (date.getMonth() <= month) {
    return date.getFullYear() - 1
  }
  return date.getFullYear()
}

export const capitalizeFirstLetter = (string) => {
  return (string.charAt(0).toUpperCase() + string.slice(1))
}


export const perfCalculatorDisclaimer1 = () => {
  return (
    `Customized performance does not reflect the full effect of the front-end or back-end sales charges. Quarterly (Standardized) performance reflects the full effect of the front-end sales charge. Other Period Performance does not reflect the full effect of the front-end or back-end sales charges. Please consult your financial advisor for prospectus and for more information on mutual fund sales charges.`
  )
}

export const perfCalculatorDisclaimer2 = () => {
  return (
    `Total return and average annual return, which reflect changes in share price and reinvestment of dividends, are net of expenses. Investment returns and the principal value of an investment will fluctuate, so that when shares are redeemed they may be worth more or less than their original cost.`
  )
}

export const perfCalculatorDisclaimer3 = () => {
  return (
    `The Fund's share price will fluctuate with changes in the market value of the Fund's portfolio securities. Stocks are subject to market, economic and business risks that cause their prices to fluctuate. When you sell Fund shares, they may be worth less than what you paid for them. Consequently, you can lose money by investing in the Fund.`
  )
}

export const perfCalculatorDisclaimer4 = () => {
  return (
    `Investors should consider the investment objectives, risks, sales charges and expense of the fund carefully before investing. The prospectus contains more complete information about this and other matters.`
  )
}

export const perfCalculatorDisclaimer5 = () =>{
  return (
    `The prospectus should be read carefully before investing.`
  )
}
