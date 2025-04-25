import type { VercelApiHandler } from '@vercel/node'

type HTTPMethod = 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'

type APIFnReturn = {
  status: number
  body: Record<string, unknown>
}

export type APIFn = (param: {
  query: Record<string, string | string[]>
  body: Record<string, unknown>
}) => APIFnReturn | Promise<APIFnReturn>

export type APIFns = Partial<Record<HTTPMethod, APIFn>>

const vercelGateway: (apiFns: APIFns) => VercelApiHandler =
  (apiFns) => async (request, response) => {
    if (request.method === 'OPTIONS') {
      // add CORS headers to preflight response in dev env
      if (process.env.VERCEL_ENV !== 'production') {
        response.setHeader('Access-Control-Allow-Headers', 'authorization')
        response.setHeader(
          'Access-Control-Allow-Methods',
          'OPTIONS,DELETE,GET,HEAD,PATCH,POST,PUT',
        )
        response.setHeader('Access-Control-Allow-Origin', '*')
      }

      response.status(200).end()
      return
    }

    // Add CORS header so localhost can call dev.addi.care serverless fns
    if (process.env.VERCEL_ENV !== 'production') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Allow', 'OPTIONS,DELETE,GET,HEAD,PATCH,POST,PUT')
    }

    if (!isHTTPMethodValid(request.method)) {
      response.status(400).json({ message: 'Invalid HTTP method' })
      return
    }

    const ApiFn = apiFns[request.method]
    if (!ApiFn) {
      response
        .status(400)
        .json({ message: 'Unsupported HTTP method for this URL' })
      return
    }

    // passed all error checks, call the request
    const { status, body } = await ApiFn({
      body: request.body,
      query: request.query,
    })
    response.status(status).json(body).end()
  }

export default vercelGateway

const isHTTPMethodValid = (
  httpmethod: string | undefined,
): httpmethod is HTTPMethod =>
  !!httpmethod && ['GET', 'DELETE', 'POST', 'PUT', 'PATCH'].includes(httpmethod)
