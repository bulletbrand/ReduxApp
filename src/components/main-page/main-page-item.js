import React from 'react';
import './main-page.css'
import { Link } from 'react-router-dom'
const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";


const MainPageItem = ({ show:{type,name,image,summary='films',id}, addToFavor, changeColor }={}) => {
    console.log("aaa", changeColor);
    const colorBtn = { background: changeColor ? 'red' : 'black' }
    const label = changeColor ? 'Added' : 'Favorite'

   const imagesq = (!image) ? url : image.medium; //так как некоторые image с API были null
    const summaryq = (!summary) ? "фильм" : summary.slice(0, 150).replace(/<[^>]+>/g, '');
console.log(summary)
    return (
        <div className="card m-sm-2">
            <img className="pictures" src={imagesq} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <h4 className="card-title">{name}</h4>
                <p className="card-text"><b>{summaryq}</b>...</p>
                <p className="btn btn-primary favorBtn" style={colorBtn} onClick={addToFavor}>{label}></p>
                <Link to={`/moreinfo/${id}`} className="btn btn-primary ml-4 InfoBtn ">Info</Link >
            </div>
        </div>
    );
}
export default MainPageItem;

