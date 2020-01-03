import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import MainPage from './main-page/main-page'
import Header from './header/header'
import FavoritePage from './favorite-page/favorite-page'
import { Moreinfo } from './more-info-page/more-info-page'
import { setRequest, forBtn, getLocal, changeBtn, favorData } from '../actions/MainActions'
import PropTypes from 'prop-types'


const PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';


/**
  * @description  Основной компонент 
  * @param	{func} setRequestAction - action creator который принимается пропсом и обновляет store.data
  * @param	{func} changeBtnAction - action creator который принимается пропсом и обновляет статус кнопки в store.data
  * @param	{func} favorDataAction -  action creator который принимается пропсом и обновляет store.favorite
  * @param	{func} getRequestFromLocal -  action creator который принимается пропсом и обновляет store.data при перезагрузке страници с localStorage
  * @author	Аlexander Matyka
  */

const App = ({ setRequestAction, changeBtnAction, favorDataAction, getRequestFromLocal, forBtnAction }) => {

  const requestAxious = (value) => {
    axios.get(`${PATH_API_URL}${value}`)
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data))
        return setRequestAction(res.data);
      })
  }


  const addToFavor = (show) => {

    localStorage.setItem('favorBtnColor', JSON.stringify(show.id)); //удаляю с локал
    changeBtnAction(JSON.parse(localStorage.getItem('favorBtnColor')))

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
      localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite)); //удаляю с локал
      favorDataAction(JSON.parse(localStorage.getItem('favoriteStore'))) //удаляю со стора

      return;
    }

    arrMovieFavorite.push(show)
    localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite)) //добавляю в локал сторейдж
    favorDataAction(JSON.parse(localStorage.getItem('favoriteStore'))) //доавляю стор

    return;
  }


  useEffect(() => {
    if (localStorage.getItem('favoriteStore')) {
      favorDataAction(JSON.parse(localStorage.getItem('favoriteStore')))
    }

    if (localStorage.getItem('data')) {
      getRequestFromLocal(JSON.parse(localStorage.getItem('data')))
    }
    if (localStorage.getItem('saveWithBtn')) {
      forBtnAction(JSON.parse(localStorage.getItem('saveWithBtn')))

    }

  }, []);

  //добавить в about us формочку и вывод типов с табами
  return (
    <React.Fragment>

      <Router>


        <Route exact path="/:favorite?:aboutus?"
          render={({ match }) => {
            return <Header requestAxious={requestAxious} match={match} />

          }}>

        </Route>

        <Route exact path="/">
          <MainPage addToFavor={addToFavor} />
        </Route>



        <Route exact path="/favorite">
          <FavoritePage addToFavor={addToFavor} />
        </Route>


        <Route exact path="/moreinfo/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <Moreinfo itemid={id} match={match} />
          }}>

        </Route>

      </Router>

    </React.Fragment>

  )
}


const mapDispatchToProps = dispatch => ({
  setRequestAction: data => dispatch(setRequest(data)),
  getRequestFromLocal: data => dispatch(getLocal(data)),
  changeBtnAction: (data) => dispatch(changeBtn(data)),
  favorDataAction: (data) => dispatch(favorData(data)),
  forBtnAction: (data) => dispatch(forBtn(data))
})


export default connect(
  () => ({}),
  mapDispatchToProps
)(App)

App.propTypes = {
  setRequestAction: PropTypes.func.isRequired,
  changeBtnAction: PropTypes.func.isRequired,
  favorDataAction: PropTypes.func.isRequired,
  getRequestFromLocal: PropTypes.func.isRequired,
};



