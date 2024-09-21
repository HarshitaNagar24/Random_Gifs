import React, { useEffect, useState } from 'react';
import axios from 'axios';



const useGif = (tag) => {
    const [gif , setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=Suh8QK8LHJIX6ShjyWSp3sSkv1FmipL7`;
    const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=Suh8QK8LHJIX6ShjyWSp3sSkv1FmipL7&tag=${tag}`;
    async function fetchData(tag) {
        setLoading(true);
        
        const {data}= await axios.get(tag ? TagUrl : randomUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect( () =>{
        fetchData();
    },[]);
    return {gif, loading, fetchData};
}

export default useGif