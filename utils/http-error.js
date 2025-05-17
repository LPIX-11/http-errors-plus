/**
 * @typedef {Object} SerializedHttpError
 * @property {number} status
 * @property {string} code
 * @property {string} message
 * @property {string} [detail]
 * @property {string} [path]
 * @property {string} [method]
 * @property {string} [timestamp]
 * @property {string} [requestId]
 * @property {string} [traceId]
 */

export class HttpError extends Error {
  /**
   * @param {number} status
   * @param {Omit<SerializedHttpError, 'status'>} options
   */
  constructor(status, options) {
    super(options.message);
    this.name = 'HttpError';

    /** @type {SerializedHttpError} */
    this.meta = {
      status,
      timestamp: new Date().toISOString(),
      ...options,
    };
  }

  /**
   * @returns {SerializedHttpError}
   */
  toJSON() {
    return this.meta;
  }
}
