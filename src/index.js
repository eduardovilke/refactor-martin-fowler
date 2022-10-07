import invoicesMock from './chapterI/invoices.json' assert { type: 'json' };
import playsMock from './chapterI/plays.json' assert { type: 'json' };

import {statement, htmlStatement} from './chapterI/refactored/statement.js';

const resultStatement = statement(invoicesMock[0], playsMock);
const resultHtml = htmlStatement(invoicesMock[0], playsMock);

console.log(resultStatement);
console.log(resultHtml);