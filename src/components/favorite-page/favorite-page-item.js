import React from 'react';
import './favorite-page.css'
import { Link } from 'react-router-dom'


const FavoritePageItem = ({ data, addToFavor }) => {

    const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
    const imagesq = (!data.image) ? url : data.image.medium; //так как некоторые image с API были null
    const summaryq = (!data.summary) ? "No summary" : data.summary.slice(0, 150).replace(/<[^>]+>/g, '');

    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={imagesq} alt="pictires from data" />
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <h2 className="card-title">{data.type}</h2>
                <p className="card-text">{summaryq}</p>
                <p className="btn btn-primary buttonColor favorBtn" onClick={addToFavor} >Remove</p>
                <Link to={`/moreinfo/${data.id}`} className="btn btn-primary ml-4 InfoBtn ">Info</Link >
            </div>
        </div>
    );
}

export default FavoritePageItem;
