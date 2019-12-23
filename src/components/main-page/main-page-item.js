import React from 'react';


import './main-page.css'
import { Link } from 'react-router-dom'





const MainPageItem  = ({ show, addToFavor,changeColor }) => {
    console.log("aaa",changeColor);
    const colorBtn = { background: changeColor ? 'red' : 'black' }
    const label = changeColor ? 'Added' : 'Favorite'

    const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
    const imagesq = (!show.image) ? url : show.image.medium; //так как некоторые image с API были null
    const summaryq = (!show.summary) ? "русский фильм" : show.summary.slice(0,150).replace(/<[^>]+>/g,'');

    return (
        <div className="card m-sm-2">
            <img className="pictures" src={imagesq} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{show.type}</h5>
                <h4 className="card-title">{show.name}</h4>
                <p className="card-text">{summaryq}...</p>
                <p className="btn btn-primary favorBtn" style={colorBtn} onClick = {addToFavor}>{label}</p>
                <Link  to={`/moreinfo/${show.id}`} className="btn btn-primary ml-4 InfoBtn ">Info</Link >
            </div>
        </div>
    );
}
export default MainPageItem;

