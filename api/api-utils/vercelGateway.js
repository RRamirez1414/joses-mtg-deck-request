var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// api-dev/api-utils/vercelGateway.ts
var vercelGateway_exports = {};
__export(vercelGateway_exports, {
  default: () => vercelGateway_default
});
module.exports = __toCommonJS(vercelGateway_exports);
var vercelGateway = (apiFns) => async (request, response) => {
  if (request.method === "OPTIONS") {
    if (process.env.VERCEL_ENV !== "production") {
      response.setHeader("Access-Control-Allow-Headers", "authorization");
      response.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS,DELETE,GET,HEAD,PATCH,POST,PUT"
      );
      response.setHeader("Access-Control-Allow-Origin", "*");
    }
    response.status(200).end();
    return;
  }
  if (process.env.VERCEL_ENV !== "production") {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Allow", "OPTIONS,DELETE,GET,HEAD,PATCH,POST,PUT");
  }
  if (!isHTTPMethodValid(request.method)) {
    response.status(400).json({ message: "Invalid HTTP method" });
    return;
  }
  const ApiFn = apiFns[request.method];
  if (!ApiFn) {
    response.status(400).json({ message: "Unsupported HTTP method for this URL" });
    return;
  }
  const { status, body } = await ApiFn({
    body: request.body,
    query: request.query
  });
  response.status(status).json(body).end();
};
var vercelGateway_default = vercelGateway;
var isHTTPMethodValid = (httpmethod) => !!httpmethod && ["GET", "DELETE", "POST", "PUT", "PATCH"].includes(httpmethod);
