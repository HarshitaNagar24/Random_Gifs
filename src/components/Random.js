import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    // const [gif , setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=Suh8QK8LHJIX6ShjyWSp3sSkv1FmipL7`;
    //     const {data}= await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect( () =>{
    //     fetchData();
    // },[]);
    const {gif,loading, fetchData} =useGif();
    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2 bg-green-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-3xl font-bold underline uppercase'>A Random Gif</h1>
        {
            loading ? <Spinner/> : <img src={gif} width={450} alt="random gif" />
        }

        <button onClick={clickHandler} className='w-10/12 bg-white opacity-80 p-1 text-xl rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random