import React from 'react'
import Iframe from 'react-iframe'
import '../index.css'

function Video(props) {
    const {url,explan,title,date,} = props
    return (
        
            
        <div className ='Container'>
        <h1>{title}</h1>
        <div className = 'videoContainer'>
        
           <Iframe url ={url+"&output=embed"}
           width="100%"
           height="600px"
        //    display="initial"
        // position="relative"
           
           />
           </div>
           <div>
           <p>posted:{date}</p>
           <p>{explan}</p>
           
           
           </div>
           
        </div>

    
        
        
        
    )
}

export default Video