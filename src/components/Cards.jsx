import React from "react"

function Cards(attri){
    return (
    <>
    <div class="Card">
        <img className= "img" src={attri.imgsrc} alt = "hover"/>
        <div className="ptnam">{attri.ptnam} Presents</div> 
        <div className="nam">{attri.nam}</div>
        <div className="imdb">{attri.imdb} imdb</div>
        <a   className="src" href={attri.src}> Watch now </a>
    </div>
    </>
)
}
export default Cards;
