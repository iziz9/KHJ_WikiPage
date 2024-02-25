const BASE_URL = 'http://localhost:4000/'

export const getWikiList = async () => {
  const response = await fetch(BASE_URL + 'wikilist', {
    method: 'GET',
  })
  return response.json()
}
