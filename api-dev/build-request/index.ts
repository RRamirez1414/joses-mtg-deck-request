import vercelGateway, { APIFns } from '../api-utils/vercelGateway'

const buildRequestHandler: APIFns = {
  POST: async ({ body }) => {
    return {
      status: 200,
      body: {
        message: 'Hello from build request handler',
        body,
      },
    }
  },
}

export default vercelGateway(buildRequestHandler)
