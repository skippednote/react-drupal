const getNews = () => ({
  type: 'GET_NEWS',
  loading: true
})

const recieveNews = (news) => ({
  type: 'RECEIVE_NEWS',
  loading: false,
  news: news,
  done: true
})

export const fetchNews = () => {
  return dispatch => {
    dispatch(getNews());
    return fetch('http://app.dd/api/node/news?_format=api_json')
      .then(res => res.json())
      .then(news => dispatch(recieveNews(news.data)))
  }
}
