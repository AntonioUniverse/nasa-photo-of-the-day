import React from 'react'
import {Card, CardContent, CardHeader, CardDescription, CardMeta, Image} from 'semantic-ui-react'
import '../index.css'



function Images (props) {
    const {url,copyright,title,explan, date} = props
    
    return (
        <div className= 'imageContainer'>
            <Card>
                <CardContent>
                    <CardHeader>{title}</CardHeader>
                    <Image src ={url} size="small" circular ={true} />
           {/* <img alt="nasa" src={url} /> */}
           <CardMeta>Posted:{date}</CardMeta>
           <CardDescription>

           <h6>{!copyright ? ' ': `©️${copyright}`}</h6>
           <p>Summary : {explan}</p>
           </CardDescription>
           
           </CardContent>
           </Card>
        </div>
    )
}

export default Images