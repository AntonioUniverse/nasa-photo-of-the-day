import React ,{useState,useEffect}from "react";
import axios from 'axios'
import moment from 'moment'
import Images from './components/Image'
import Video from './components/Video'
import TextContent from './components/textcontent'
import "./App.css";

 

function App() {
  const [date, setdate] = useState('')
  const [explan, setexplan] = useState('')
  const [mediatype, setmedia] = useState('')
  const [title, settitle] = useState('')
  const [url, seturl] = useState('')
  const [copyright, setcopyright] =useState('')
  const[day, setday] = useState('2019-07-01')
  useEffect( () =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=gzUgmlmatoU0lpQCdsozEyUAoHAGhYbppclvEzIw&date=${day}`).then( res =>{
      setdate(res.data.date)
      setexplan(res.data.explanation)
      setmedia(res.data.media_type)
      settitle(res.data.title)
      seturl(res.data.url)
      setcopyright(res.data.copyright)
      const newday = moment().subtract().format('YYYY-MM-D')
      setday(newday)
      
    }
    )
  }, [day])
  if(!url){
    return ( <h3>Loading....</h3>)
  } else{
    return (
      <div className="App">
        <header>
          <h1> 🛸🚀NASA PHOTO OF THE DAY🚀🛸</h1>
        </header>
        {mediatype === 'video'? <Video mediatype ={mediatype} url={url} title={title} explan ={explan} date={date}  /> : <Images mediatype ={mediatype} url={url} copyright ={copyright} title={title} explan ={explan} date={date}  />}
       
        
        {/* <TextContent  /> */}
      </div>
    );
  }
  
}

export default App;
