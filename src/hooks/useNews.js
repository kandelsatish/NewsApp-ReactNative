import React,{useState,useEffect} from 'react'
import newsApi from '../api/newsApi'
export default ()=>{
    const [generalNews, setGeneralNews] = useState([]);
    const [topHeadlines,setHeatLines]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');
    const [wallstreet,setWallStreet]=useState([]);
    const searchApi = async (Key) => {
        try {
            const response = await newsApi.get('/everything', {
                params: {
                    q:Key,
                    from:'2021-05-07',
                    to:'2021-05-07',

                }
            });
            setGeneralNews(response.data.articles);
        }
        catch (err) {
            setErrorMessage(errorMessage);
        }
    }

    const searchHeadlines = async (country) => {
        try {
            const response = await newsApi.get('/top-headlines', {
                params: {
                    country:country,
                    category:'business',
                }
            });
            setHeatLines(response.data.articles);
        }
        catch (err) {
            setErrorMessage(errorMessage);
        }
    }

    const searchWallStreet = async () => {
        try {
            const response = await newsApi.get('/everything', {
                params: {
                    domains:'wsj.com'
                }
            });
            setWallStreet(response.data.articles);
        }
        catch (err) {
            setErrorMessage(errorMessage);
        }
    }

    useEffect(() => {
        searchApi('tesla');
    },[])

    useEffect(() => {
        searchHeadlines('us');
    },[])

    useEffect(() => {
        searchWallStreet();
    },[])

    return [generalNews,searchApi,errorMessage,topHeadlines,wallstreet]
}