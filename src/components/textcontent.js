import React from 'react'
import '../index.css'
 function textContent(props) {
     const {title,explan, date } = props
    return (
        <div className='textContainer'>
            <h1 className="title">{title}</h1>
            <div>
            <h3 className = 'summary'>{explan}</h3>
            </div>
            <h6 className="date"> PostDate: {date}</h6>

        </div>
    )
}

export default textContent