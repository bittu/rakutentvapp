const carousels = [
  'populares-en-taquilla',
  'estrenos-para-toda-la-familia',
  'estrenos-imprescindibles-en-taquilla',
  'estrenos-espanoles',
  'si-te-perdiste',
  'especial-x-men',
  'nuestras-preferidas-de-la-semana'
]

const HOST = 'https://gizmo.rakuten.tv/'
const queryParamString = 'classification_id=5&device_identifier=web&locale=es&market_code=es'

const getListData = id => fetch(`${HOST}/v3/lists/${id}?${queryParamString}`).then(rsp => rsp.json()).then(data => data.data)

export const initApp = () => Promise.all(carousels.map(c => getListData(c)))

export const getMovieData = id => fetch(`${HOST}/v3/movies/${id}?${queryParamString}`).then(rsp => rsp.json()).then(data => data.data)
