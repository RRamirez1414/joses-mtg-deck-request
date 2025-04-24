import ky from 'ky'

export const scryfallApi = ky.create({
  prefixUrl: 'https://api.scryfall.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  retry: {
    limit: 2,
    methods: ['get'],
    statusCodes: [408, 500, 502, 503, 504],
    backoffLimit: 1000,
  },
})
