import React from "react";
import Bgvedio from "./components/BgVedio";
import './index.css'
import Cards from "./components/Cards";
import data from "./components/data"
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App(){
    return (
    <>
       <Bgvedio/>

        
       <div className="container">
       <Heading/>
        <Cards imgsrc = {data[0].imgrc} ptnam = {data[0].ptn}  nam = {data[0].nam} imdb = {data[0].imdb} src = {data[0].src} />
        <Cards imgsrc = {data[1].imgrc} ptnam = {data[1].ptn}  nam = {data[1].nam} imdb = {data[1].imdb} src = {data[1].src} />
        <Cards imgsrc = {data[2].imgrc} ptnam = {data[2].ptn}  nam = {data[2].nam} imdb = {data[2].imdb} src = {data[2].src} />
        <Cards imgsrc = {data[3].imgrc} ptnam = {data[3].ptn}  nam = {data[3].nam} imdb = {data[3].imdb} src = {data[3].src} />
        <Cards imgsrc = {data[4].imgrc} ptnam = {data[4].ptn}  nam = {data[4].nam} imdb = {data[4].imdb} src = {data[4].src} />
        <Cards imgsrc = {data[5].imgrc} ptnam = {data[5].ptn}  nam = {data[5].nam} imdb = {data[5].imdb} src = {data[5].src} />
        <Cards imgsrc = {data[6].imgrc} ptnam = {data[6].ptn}  nam = {data[6].nam} imdb = {data[6].imdb} src = {data[6].src} />
        <Cards imgsrc = {data[7].imgrc} ptnam = {data[7].ptn}  nam = {data[7].nam} imdb = {data[7].imdb} src = {data[7].src} />
        <Cards imgsrc = {data[8].imgrc} ptnam = {data[8].ptn}  nam = {data[8].nam} imdb = {data[8].imdb} src = {data[8].src} />
        <Cards imgsrc = {data[9].imgrc} ptnam = {data[9].ptn}  nam = {data[9].nam} imdb = {data[9].imdb} src = {data[9].src} />
       <Footer/>
       </div>
    </>
    )
}
export default App

