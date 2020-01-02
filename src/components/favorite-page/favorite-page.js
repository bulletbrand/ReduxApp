import React from 'react';
import { connect } from 'react-redux'
import { favorData } from '../../actions/MainActions'
import FavoritePageItem from './favorite-page-item'
import PropTypes from 'prop-types'
import './favorite-page.css'



/**
  * @description  Компонент выводит информацию о избранных фильмах
  * @param	{object} favorite - массив избранных фильмов из стора
  * @param	{func} addToFavor - айди который идет пропсом с App через роут свойство match.
  * @author	Аlexander Matyka
  */

const FavoritePage = ({ favorite, addToFavor }) => {
  const arrayFavor = favorite.map((elem) => (
    <div key={elem.id}>
      <FavoritePageItem data={elem} addToFavor={() => addToFavor(elem)} />
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
    favorite: store.favorite.favorite,
  }
}

const mapDispatchToProps = dispatch => ({

  favorDataAction: data => dispatch(favorData(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritePage)


FavoritePage.propTypes = {
  favorite:  PropTypes.array.isRequired,
  addToFavor:  PropTypes.func,
};
