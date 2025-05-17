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
 *   EARLY_HINTS: HttpErrorConstant,
 *   OK: HttpErrorConstant,
 *   CREATED: HttpErrorConstant,
 *   ACCEPTED: HttpErrorConstant,
 *   NON_AUTHORITATIVE_INFORMATION: HttpErrorConstant,
 *   NO_CONTENT: HttpErrorConstant,
 *   RESET_CONTENT: HttpErrorConstant,
 *   PARTIAL_CONTENT: HttpErrorConstant,
 *   MULTI_STATUS: HttpErrorConstant,
 *   ALREADY_REPORTED: HttpErrorConstant,
 *   IM_USED: HttpErrorConstant,
 *   MULTIPLE_CHOICES: HttpErrorConstant,
 *   MOVED_PERMANENTLY: HttpErrorConstant,
 *   FOUND: HttpErrorConstant,
 *   SEE_OTHER: HttpErrorConstant,
 *   NOT_MODIFIED: HttpErrorConstant,
 *   USE_PROXY: HttpErrorConstant,
 *   TEMPORARY_REDIRECT: HttpErrorConstant,
 *   PERMANENT_REDIRECT: HttpErrorConstant,
 *   BAD_REQUEST: HttpErrorConstant,
 *   UNAUTHORIZED: HttpErrorConstant,
 *   PAYMENT_REQUIRED: HttpErrorConstant,
 *   FORBIDDEN: HttpErrorConstant,
 *   NOT_FOUND: HttpErrorConstant,
 *   METHOD_NOT_ALLOWED: HttpErrorConstant,
 *   NOT_ACCEPTABLE: HttpErrorConstant,
 *   PROXY_AUTHENTICATION_REQUIRED: HttpErrorConstant,
 *   REQUEST_TIMEOUT: HttpErrorConstant,
 *   CONFLICT: HttpErrorConstant,
 *   GONE: HttpErrorConstant,
 *   LENGTH_REQUIRED: HttpErrorConstant,
 *   PRECONDITION_FAILED: HttpErrorConstant,
 *   PAYLOAD_TOO_LARGE: HttpErrorConstant,
 *   URI_TOO_LONG: HttpErrorConstant,
 *   UNSUPPORTED_MEDIA_TYPE: HttpErrorConstant,
 *   RANGE_NOT_SATISFIABLE: HttpErrorConstant,
 *   EXPECTATION_FAILED: HttpErrorConstant,
 *   I_M_A_TEAPOT: HttpErrorConstant,
 *   MISDIRECTED_REQUEST: HttpErrorConstant,
 *   UNPROCESSABLE_ENTITY: HttpErrorConstant,
 *   LOCKED: HttpErrorConstant,
 *   FAILED_DEPENDENCY: HttpErrorConstant,
 *   TOO_EARLY: HttpErrorConstant,
 *   UPGRADE_REQUIRED: HttpErrorConstant,
 *   PRECONDITION_REQUIRED: HttpErrorConstant,
 *   TOO_MANY_REQUESTS: HttpErrorConstant,
 *   REQUEST_HEADER_FIELDS_TOO_LARGE: HttpErrorConstant,
 *   UNAVAILABLE_FOR_LEGAL_REASONS: HttpErrorConstant,
 *   INTERNAL_SERVER_ERROR: HttpErrorConstant,
 *   NOT_IMPLEMENTED: HttpErrorConstant,
 *   BAD_GATEWAY: HttpErrorConstant,
 *   SERVICE_UNAVAILABLE: HttpErrorConstant,
 *   GATEWAY_TIMEOUT: HttpErrorConstant,
 *   HTTP_VERSION_NOT_SUPPORTED: HttpErrorConstant,
 *   VARIANT_ALSO_NEGOTIATES: HttpErrorConstant,
 *   INSUFFICIENT_STORAGE: HttpErrorConstant,
 *   LOOP_DETECTED: HttpErrorConstant,
 *   BANDWIDTH_LIMIT_EXCEEDED: HttpErrorConstant,
 *   NOT_EXTENDED: HttpErrorConstant,
 *   NETWORK_AUTHENTICATION_REQUIRED: HttpErrorConstant,
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