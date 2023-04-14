import axios from 'axios'

// export const instance = axios.create({
//   baseURL: 'https://dummyjson.com/'
// })

// const API_KEY = 'f9f6d3f14431911aa9602e018f8e4b77'

export const instance = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/search/movie?api_key=f9f6d3f14431911aa9602e018f8e4b77&language=en-US&page=1&include_adult=false'
})
