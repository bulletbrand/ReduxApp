import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import MainPage from '../components/main-page/main-page'
import Header from '../components/header/header'
import FavoritePage from '../components/favorite-page/favorite-page'
import Moreinfo from '../components/more-info-page/more-info-page'
import { setRequest, getLocal, changeBtn } from '../actions/MainActions'
import { favorData } from '../actions/MainActions'



const PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';

class App extends Component {

  requestAxious = (value) => {
    axios.get(`${PATH_API_URL}${value}`)
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data))
        return this.props.setRequestAction(res.data);
      })
  }


  addToFavor = (show) => {

    localStorage.setItem('favorBtnColor', JSON.stringify(show.id)); //удаляю с локал
    this.props.changeBtnAction(JSON.parse(localStorage.getItem('favorBtnColor')))



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
      this.props.favorDataAction(JSON.parse(localStorage.getItem('favoriteStore'))) //удаляю со стора

      return;
    }

    arrMovieFavorite.push(show)
    localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite)) //добавляю в локал сторейдж
    this.props.favorDataAction(JSON.parse(localStorage.getItem('favoriteStore'))) //доавляю стор

    return;
  }


  componentDidMount() {

    if (localStorage.getItem('favoriteStore')) {
      this.props.favorDataAction(JSON.parse(localStorage.getItem('favoriteStore')))
    }
    if (localStorage.getItem('data')) {
      this.props.getRequestFromLocal(JSON.parse(localStorage.getItem('data')))
    }
  }


  render() {
    const { data, preloader } = this.props.main;

    const { favorite } = this.props.favorite;
    return (
      <React.Fragment>

        <Router>

          <Header requestAxious={this.requestAxious} />
          <Route exact path="/"><MainPage data={data} preloader={preloader} addToFavor={this.addToFavor} /></Route>
          <Route exact path="/favorite"><FavoritePage addToFavor={this.addToFavor} favorite={favorite} /></Route>
          <Route exact path="/moreinfo/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <Moreinfo itemid={id} />
            }}>

          </Route>

        </Router>

      </React.Fragment>

    )
  }
}


const mapStateToProps = store => {
  return {
    main: store.main,
    favorite: store.favorite
  }
}


const mapDispatchToProps = dispatch => ({
  setRequestAction: data => dispatch(setRequest(data)),
  getRequestFromLocal: data => dispatch(getLocal(data)),
  favorDataAction: (data) => dispatch(favorData(data)),
  changeBtnAction: (data) => dispatch(changeBtn(data)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
