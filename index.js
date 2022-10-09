import invoices from "./src/chapterI/data/invoices.js";
import plays from "./src/chapterI/data/plays.js";

import {
  statement,
  htmlStatement,
} from "./src/chapterI/refactored/statement.js";

const resultStatement = statement(invoices[0], plays);
const resultHtml = htmlStatement(invoices[0], plays);

console.log(resultStatement);
console.log(resultHtml);
