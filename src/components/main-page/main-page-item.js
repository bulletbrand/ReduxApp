import React from 'react';

import './main-page.css'





const MainPageItem  = ({ show }) => {


    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={show.image.medium} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{show.type}</h5>
                <h4 className="card-title">{show.name}</h4>
                <p className="card-text">{show.summary}...</p>
                <a className="btn btn-primary " href="#">Favorite</a>
                <a className="btn btn-primary ml-4 ">Info</a >
            </div>
        </div>
    );
}

export default MainPageItem ;





