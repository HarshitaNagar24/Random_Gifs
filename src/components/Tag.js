import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    // const [gif , setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    const [tag , setTag] = useState('');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=Suh8QK8LHJIX6ShjyWSp3sSkv1FmipL7&tag=${tag}`;
    //     const {data}= await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect( () =>{
    //     fetchData();
    // },[]);
    const {gif,loading, fetchData} =useGif(tag);
    function clickHandler(){
        fetchData(tag);
    }
    function changeHandler(event){
        setTag(event.target.value);

    }
  return (
    <div className='w-1/2 bg-blue-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-3xl font-bold underline uppercase'>Random {tag} Gif</h1>
        {
            loading ? <Spinner/> : <img src={gif} width={450} alt="random gif" />
        }

        <input className='w-10/12 bg-white opacity-80 p-1 text-xl rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag}/> 
        <button onClick={clickHandler} className='w-10/12 bg-white opacity-80 p-1 text-xl rounded-lg mb-[20px] '>Generate</button>
    </div>
  )
}

export default Tag