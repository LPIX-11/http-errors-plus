import { BASE_HTTP_ERRORS } from "./src/constants/index.js";
import { generateError } from "./utils/generateError.js";
import { HttpError } from "./utils/http-error.js";
import statuses from 'statuses';

import fs from 'fs';

const lines = Object.entries(statuses.message)
  .map(([code, message]) => {
    const name = message.toUpperCase().replace(/[^A-Z0-9]+/g, '_');
    return ` *   ${name}: HttpErrorConstant,`;
  })
  .join('\n');

const typedef = `/**
 * @typedef {Object} HttpErrorConstant
 * @property {number} status
 * @property {string} code
 * @property {string} message
 */

/**
 * @typedef {{
${lines}
}} BaseHttpErrors
*/`;

fs.writeFileSync('./http-error-typedef.jsdoc', typedef);

export { HttpError, generateError, BASE_HTTP_ERRORS };
