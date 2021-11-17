import { registerDomainEventSubscribers } from "../setup";

const addCorsHeaders = (handler: any, cors: any) => {
  if (cors) {
    if (!handler.response?.headers) {
      handler.response.headers = {};
    }
    handler.response.headers["Access-Control-Allow-Origin"] = `https://${cors}`;
  }
};

export const apiSetup = ({ cors = null } = {}) => {
  return {
    before: async (handler: any) => {
      registerDomainEventSubscribers();
      if (!handler.event.queryStringParameters) {
        handler.event.queryStringParameters = {};
      }
      return Promise.resolve();
    },
    after: async (handler: any) => {
      if (!handler.response?.statusCode) {
        handler.response = {
          statusCode: 200,
          body: JSON.stringify(handler.response),
        };
      }
      addCorsHeaders(handler, cors);
      return Promise.resolve();
    },
    onError: async (handler: any) => {
      if (`${handler?.error?.statusCode}`.startsWith("2")) {
        handler.response = {
          statusCode: handler.error.statusCode,
          body: handler.error.message,
        };
        handler.error = {};
      } else {
        if (handler?.error?.statusCode && handler?.error?.message) {
          handler.response = {
            statusCode: handler.error.statusCode,
            body: handler.error.message,
          };
        } else {
          handler.response = {
            statusCode: 500,
            body: handler.error,
          };
        }
      }
      addCorsHeaders(handler, cors);
      return Promise.resolve();
    },
  };
};
