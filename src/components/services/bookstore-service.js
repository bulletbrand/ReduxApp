import axios from 'axios'



export default class BookstoreService {
  constructor(value) {
    this.PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';
    this.value = 'war'
  }



  getRequest(value) {
     return  axios.get(`${this.PATH_API_URL}${this.value}`)
        .then(res => {
          return res.data
        })
    }
}
