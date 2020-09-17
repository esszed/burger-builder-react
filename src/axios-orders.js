import axios from 'axios'
const instance = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_KEY}.firebaseio.com/`
})

export default instance