import { useQuery } from '@tanstack/react-query'
import { scryfallApi } from '../utils/api'

const useGetScryfallCardQuery = (cardName: string | undefined) => {
  return useQuery({
    queryKey: ['scryfallCard', cardName],
    queryFn: async () => {
      const response = await scryfallApi.get('cards/named', {
        // @ts-expect-error query is only enabled when cardName is defined
        searchParams: { fuzzy: cardName },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json<ScryfallCardResponse>()
    },
    enabled: !!cardName,
  })
}
export default useGetScryfallCardQuery
