import React from 'react';
import { connect } from 'react-redux'
import { favorData } from '../../actions/MainActions'
import FavoritePageItem from './favorite-page-item'
import './favorite-page.css'


const FavoritePage = ({favorite,addToFavor}) => {
//вытащить пропсом с стора массив файворит ииии после этого прокинуть в компонент и там подставить

  const arrayFavor =favorite.map((elem) => (
    <div key={elem.id}>
      <FavoritePageItem data = {elem} addToFavor = {()=>addToFavor(elem)} />
    </div>
  ));

  
  return (
    <div className="booksWrapper tabcontent">
      <div className="booksContainer container d-flex flex-wrap justify-content-center">
       
       {arrayFavor.length ? arrayFavor :
          <div className="alert alert-danger">
            <strong className="customBt">Sorry, </strong>
            Unfortunately, there are currently no films!</div>
       }
      </div>
    </div>
  );
}





const mapStateToProps = store => {
  return {
    favorite: store.favorite.favorite //так как в сторе есть редюсер фейаорит и в нем уже лежит феворит
  }
}


const mapDispatchToProps = dispatch => ({

  favorDataAction: data => dispatch(favorData(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritePage)
