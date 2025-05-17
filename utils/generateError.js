import { HttpError } from './http-error.js';

/**
 * @param {{ status: number, code: string, message: string }} base
 * @param {Partial<import('./http-error.js').SerializedHttpError>} [override]
 * @returns {HttpError}
 */
export function generateError(base, override = {}) {
  return new HttpError(base.status, {
    code: base.code,
    message: override.message || base.message,
    ...override,
  });
}