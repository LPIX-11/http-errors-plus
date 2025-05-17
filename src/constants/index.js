import statuses from 'statuses';

/**
 * @typedef {Object} StatusEntry
 * @property {number} code
 * @property {string} name
 * @property {string} message
 */

/**
 * Maps HTTP status code to name/message
 * @type {Record<number, StatusEntry>}
 */
export const STATUS_CODE_MAP = statuses.codes.reduce((acc, code) => {
  const name = statuses.message[code].toUpperCase().replace(/[^A-Z0-9]+/g, '_');
  acc[code] = {
    code,
    name,
    message: statuses.message[code],
  };
  return acc;
}, {});

/**
 * Maps HTTP status name to code
 * @type {Record<string, StatusEntry>}
 */
export const STATUS_NAME_MAP = Object.values(STATUS_CODE_MAP).reduce((acc, { code, name, message }) => {
  acc[name] = { code, name, message };
  return acc;
}, {});

/**
 * @typedef {Object} HttpErrorConstant
 * @property {number} status - HTTP status code
 * @property {string} code - Uppercase constant name (e.g., NOT_FOUND)
 * @property {string} message - Human-readable HTTP message
 */

/**
 * @typedef {{
 *   CONTINUE: HttpErrorConstant,
 *   SWITCHING_PROTOCOLS: HttpErrorConstant,
 *   PROCESSING: HttpErrorConstant,
 *   OK: HttpErrorConstant,
 *   CREATED: HttpErrorConstant,
 *   ACCEPTED: HttpErrorConstant,
 *   NO_CONTENT: HttpErrorConstant,
 *   MOVED_PERMANENTLY: HttpErrorConstant,
 *   FOUND: HttpErrorConstant,
 *   NOT_MODIFIED: HttpErrorConstant,
 *   BAD_REQUEST: HttpErrorConstant,
 *   UNAUTHORIZED: HttpErrorConstant,
 *   FORBIDDEN: HttpErrorConstant,
 *   NOT_FOUND: HttpErrorConstant,
 *   METHOD_NOT_ALLOWED: HttpErrorConstant,
 *   CONFLICT: HttpErrorConstant,
 *   UNPROCESSABLE_ENTITY: HttpErrorConstant,
 *   TOO_MANY_REQUESTS: HttpErrorConstant,
 *   INTERNAL_SERVER_ERROR: HttpErrorConstant,
 *   BAD_GATEWAY: HttpErrorConstant,
 *   SERVICE_UNAVAILABLE: HttpErrorConstant,
 *   GATEWAY_TIMEOUT: HttpErrorConstant
 * }} BaseHttpErrors
 */

/**
 * @type {BaseHttpErrors}
 */
export const BASE_HTTP_ERRORS = Object.fromEntries(
  Object.values(STATUS_CODE_MAP).map(({ code, name, message }) => {
    return [name, Object.freeze({ status: code, code: name, message })];
  })
);
// /**
//  * Export default constants (e.g. NOT_FOUND, BAD_REQUEST)
//  * @type {Record<string, { status: number, code: string, message: string }>}
//  */