
import {useState} from "react";
import Intro from "./Intro.jsx"
import Stats from "./Stats.jsx"
import Contribute from "./Contribute.jsx";

function Hero (){
    const [stars, setStars] = useState(0);
    const [downloads, setDownloads] = useState(0);
    const [issues, setIssues] = useState(5);
    const [contributors, setContrib] = useState(0);
    function handleStar() {
      setStars(stars + 1);
    }
    function handleContrib(){
      setContrib(contributors+1);
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
      setContrib(0)
    }
    return(
      <>
      
      <Intro author="Ivan Aquino"/>

      <div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <Stats stars={stars} downloads={downloads} issues={issues}/>
      <Contribute contributors={contributors}/>
      </>
    )
}

export default Hero;