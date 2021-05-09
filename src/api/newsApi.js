import axios from 'axios'

export default axios.create({
    baseURL:'https://newsapi.org/v2',
    headers:{
        Authorization: 'Bearer 2e76a132bf284df19134f51ef029b059'
    }
});