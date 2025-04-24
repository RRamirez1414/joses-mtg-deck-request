import { useQuery } from '@tanstack/react-query'
import { scryfallApi } from '../utils/api'

const useGetScryfallCardQuery = (searchTerm: string) => {
  return useQuery({
    queryKey: ['scryfallCard', searchTerm],
    queryFn: async () => {
      const response = await scryfallApi.get('cards/autocomplete', {
        searchParams: {
          q: searchTerm,
          include_extras: 'true',
        },
      })
      // TODO: add network error handling
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json<ScryfallAutocompleteResponse>()
    },
    enabled: !!searchTerm,
  })
}
export default useGetScryfallCardQuery
