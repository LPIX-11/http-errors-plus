# http-errors-plus

> The next-generation HTTP error system for JavaScript & TypeScript — designed for modern DX, structured observability, and future-proof error handling.

---

## ⚡ Why http-errors-plus?

`http-errors` served us well — but it’s stuck in a CommonJS world with stringly-typed messages and zero structure and inspired me to do this.

**http-errors-plus** gives you:

✅ Fully ESM-ready and works in both JS and TS  
✅ Named constants like `NOT_FOUND`, `BAD_REQUEST`, etc.  
✅ Overrideable metadata: `detail`, `path`, `traceId`, `requestId`, etc.  
✅ Drop-in `generateError()` utility  
✅ Strong IntelliSense via JSDoc  
✅ `HttpError` class with `.toJSON()` and APM-ready structure

---

## 🚀 Installation

```bash
yarn add http-errors-plus
```

---

## 🧑‍💻 Usage

### Import and Use Named Constants
```js
import { BASE_HTTP_ERRORS, generateError } from 'http-errors-plus';

const { NOT_FOUND } = BASE_HTTP_ERRORS;

throw generateError(NOT_FOUND, {
  detail: 'User with ID 42 not found',
  path: '/api/users/42',
  requestId: 'req-xyz-123',
});
```

### Output
```json
{
  "status": 404,
  "code": "NOT_FOUND",
  "message": "Not Found",
  "detail": "User with ID 42 not found",
  "path": "/api/users/42",
  "timestamp": "2025-05-17T12:00:00Z",
  "requestId": "req-xyz-123"
}
```

---

## 📦 Exported API

### ✅ Constants
```js
BASE_HTTP_ERRORS.NOT_FOUND      // { status: 404, code: 'NOT_FOUND', message: 'Not Found' }
BASE_HTTP_ERRORS.BAD_REQUEST    // { status: 400, code: 'BAD_REQUEST', message: 'Bad Request' }
// ... all standard HTTP codes covered
```

### ✅ generateError(base, overrides?)
Creates a new error object based on a constant.

```js
const error = generateError(BASE_HTTP_ERRORS.CONFLICT, {
  detail: 'Email already exists',
  requestId: 'abc123',
});
```

### ✅ HttpError Class
```js
new HttpError(403, {
  code: 'FORBIDDEN',
  message: 'Access denied',
  detail: 'Only admins can access this resource.',
})
```

---

## 🔍 Coming Soon
- `isHttpError()` type guard
- RFC 7807 `.toProblemJSON()` support
- Built-in middleware for Express/Fastify
- Auto-i18n key support

---

## 💡 Philosophy
HTTP errors should be:
- Human-readable
- Machine-parseable
- Developer-first
- Easy to maintain and override

---

## 🧠 Inspiration
Built as a modern successor to `http-errors` and `statuses`, with a fresh take on API dev ergonomics.

---

## 🪪 License
MIT — Use it, ship it, improve it.

---

## ✨ Author
Made by Mohamed Johnson. 🧠 Powered by clarity, DX obsession, and no chill mode.