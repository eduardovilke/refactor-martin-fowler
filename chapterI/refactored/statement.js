const invoicesMock = require('../invoices.json') ;
const playsMock = require('../plays.json');
const createStatementData = require('./createStatementData');

function statement (invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for(let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount/100)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${data.totalAmount}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  
  return result;
 
  function usd(aNumber){
    return new Intl.NumberFormat("en-US", { 
        style: "currency", 
        currency: "USD", 
        minimumFractionDigits: 2
      })
      .format(aNumber/100);
  }
}

console.log(statement(invoicesMock[0], playsMock))