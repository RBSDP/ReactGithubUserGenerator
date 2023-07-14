import React, { useRef, useState } from 'react'
import axios from 'axios';

const User = () => {





const [inputvalue,setInputvalue] = useState("");
const [data,setData]  = useState([])
const [iscontentvisible,setIscontentvisible] = useState(false);

const [url,setUrl] = useState()
const inputRef = useRef()



const handleSubmit = (e) => {
    e.preventDefault();
    setInputvalue(inputRef.current.value)
     
    setUrl(`https://api.github.com/users/${inputvalue}`)
    
    fetchData()
  };





const fetchData = async () => {
  
    try{
        const responce = await axios.get(url)
        setData(responce)
    }catch(error){
        console.log(error)
    }
    setIscontentvisible(true)
    
}









    return (
    <div className='container'>
        <div className='content'>
            <div className="top">
                <div className="head">
                    <input type="text"  ref={inputRef}  className='inputs'/>
                    <button className='headbutton' onClick={handleSubmit}>Get Data</button>
                </div>
            </div>
        {iscontentvisible && (
            <div className='info'>
                    
                <div className='info-top'>

                    <img src={data.data?.avatar_url} alt="" className='infoImg'/>



    
                </div>

                <div className="info-bottom">
                    <button>Name:{data.data?.name}</button>
                    <button>Portfolio:{data.data?.blog}</button>
                    <button>Location:{data.data?.location}</button>
                    <button>Public Repos:{data.data?.public_repos}</button>
                    <button>Followers:{data.data?.followers}</button>
                    <button>Bio:{data.data?.bio}</button>
                </div>

            </div>)}



        </div>
    </div>
        

   
  )
}

export default User









