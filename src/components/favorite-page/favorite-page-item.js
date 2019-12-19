import React from 'react';



//мажорная деструктуризация 
const FavoritePageItem = () => {

  

    return (
        <div className="card  m-sm-2">
            <img className="pictures"  alt="pictires from data" />
            <div className="card-body">
                <h4 className="card-title"></h4>
                <h2 className="card-title"></h2>
                <p className="card-text"></p>
                <p className="btn btn-primary buttonColor favoriteBtn" >Delete favorite</p>
                <p className="btn btn-primary ml-4 buttonColor">Info about film</p>
            </div>
        </div>
    );
}

export default FavoritePageItem;
