
import {useState} from "react";
import Intro from "./Intro.jsx"
import Stats from "./Stats.jsx"
import Controls from "./Controls.jsx"
import Contribute from "./Contribute.jsx";

function Hero (){
    const [stars, setStars] = useState(0);
    const [downloads, setDownloads] = useState(0);
    const [issues, setIssues] = useState(5);
    function handleStar() {
      setStars(stars + 1);
    }
    
  
    function handleDownload() {
      setDownloads(downloads + 1);
    }
  
    function handleReport() {
      setIssues(issues + 1);
    }
  
    function handleReset() {
      setStars(0);
      setDownloads(0);
      setIssues(5);
    }
    return(
      <>
      
      <Intro author="Ivan Aquino"/>

      <Controls handleStar={handleStar} handleDownload={handleDownload} handleReport={handleReport} handleReset={handleReset} />

      <Stats stars={stars} downloads={downloads} issues={issues}/>
      <Contribute issues={issues}/>
      </>
    )
}

export default Hero;