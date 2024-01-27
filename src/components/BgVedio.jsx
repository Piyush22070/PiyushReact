import React from "react";
import video from '../assets/back.mp4'

function Bgvedio(){
    return (
        <div className="bgContainer">
            <video src={video} autoPlay muted loop width="100%" height="100%"/>
        </div>
    )
}
export default Bgvedio