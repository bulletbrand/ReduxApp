import React from 'react';
import { connect } from 'react-redux'
import { favorData } from '../../actions/MainActions'

import './main-page.css'
import { Link } from 'react-router-dom'





const MainPageItem  = ({ show, favorDataAction }) => {



    const addToFavor = ()=> {

            
            if (!localStorage.getItem('favoriteStore')) {
              localStorage.setItem('favoriteStore', '[]');
            }
        
        
            const arrMovieFavorite = JSON.parse(localStorage.getItem('favoriteStore'));
        
        
            var positionMovie;
            if (arrMovieFavorite.length) {
              positionMovie = arrMovieFavorite.findIndex(el => el.id === show.id);
        
            } else {
              positionMovie = -1;
            }
        
            if (positionMovie !== -1) {
              arrMovieFavorite.splice(positionMovie, 1);
              localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite));
              return;
            }
        
            arrMovieFavorite.push(show)
            localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite))
            favorDataAction(JSON.parse(localStorage.getItem('favoriteStore')));

            return;
          }
        
    


    const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
    const imagesq = (!show.image) ? url : show.image.medium; //так как некоторые image с API были null
    const summaryq = (!show.summary) ? "Сраный русский фильм" : show.summary.slice(0,150).replace(/<[^>]+>/g,'');

    return (
        <div className="card  m-sm-2">
            <img className="pictures" src={imagesq} alt="dsd" />
            <div className="card-body">
                <h5 className="card-title">{show.type}</h5>
                <h4 className="card-title">{show.name}</h4>
                <p className="card-text">{summaryq}...</p>
                <a className="btn btn-primary favorBtn" onClick = {addToFavor} href="#">Favorite</a>
                <Link  to={`/moreinfo/${show.id}`} className="btn btn-primary ml-4 InfoBtn ">Info</Link >
            </div>
        </div>
    );
}




const mapStateToProps = store => {
    return {
      favorite: store.main
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({
  
    favorDataAction: data => dispatch(favorData(data)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPageItem)
  