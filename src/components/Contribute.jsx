import {useState} from "react";

function Contribute ({issues}){
    const [contribute, setContrib] = useState(0);
    function handleContribute(){
      setContrib(contribute+1);
      issues+contribute;
    }
    function handleClear(){
      setContrib(0);
    }
    return(
        
        <div className="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
            <div>
                <h3 className="text-2xl font-bold">Want to contribute? </h3>
            </div>
            <p className="mt-1 text-xl">Fix an open issue on </p>
            <a className="mt-1 text-xl" href="https://github.com/ivanrylevaquino/CSIT340-G5-Midterms-Aquino" onClick={handleContribute}>
            Github</a>
            <div className="flex items-center gap-8">
                  <p className="text-xl">
                    Open issues: 
                    <span className="font-bold"> {contribute} - contributors</span>
                  </p>
                  <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold"
                  onClick={handleClear}
                  >
                    Clear
                  </button>
            </div>
        </div>
    )
}
export default Contribute;