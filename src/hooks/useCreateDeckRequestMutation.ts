import { useMutation } from '@tanstack/react-query'
import { vercelApi } from '../utils/api'

const useCreateDeckRequestMutation = () => {
  return useMutation({
    mutationFn: createDeckRequest,
  })
}

export default useCreateDeckRequestMutation

type RequestBodyArgs = {
  firstName: string
  lastName: string
  email: string
  description: string | null
  cardName: string | null
  cardImageUrls: string[] | null
}

const createDeckRequest = async (body: RequestBodyArgs) => {
  const response = await vercelApi.post('build-request', {
    json: body,
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
