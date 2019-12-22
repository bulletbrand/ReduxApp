import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from '../components/main-page/main-page'
import Header from '../components/header/header'
import FavoritePage from '../components/favorite-page/favorite-page'
import Moreinfo from '../components/more-info-page/more-info-page'
import { setRequest, getLocal,changeColor } from '../actions/MainActions'
import { favorData } from '../actions/MainActions'



import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';

class App extends Component {


  requestAxious = (value) => {
     axios.get(`${PATH_API_URL}${value}`)
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data))
        return this.props.setRequestAction(res.data);
      })
  }



   addToFavor = (show)=> {

    
//пройтись по всему массиву и менять цвет ток на тех єлементах где кликнул
/*
      const idx = this.props.main.data.findIndex((el) => el.show.id === show.id);
      const oldItem = this.props.main.data[idx];
      const newItem = { ...oldItem, colorStatus: true }

     const newData = [                       //вернуть с новым свойством конкретный елемент в стейт а не все!! вот в чем прикол
        ... this.props.main.data.slice(0, idx),
        newItem,
        ... this.props.main.data.slice(idx + 1)
      ]
      console.log(newData)
      this.props.changeColorAction(newData);


*/

this.props.favorDataAction(JSON.parse(localStorage.getItem('favoriteStore')))


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
      this.props.favorDataAction(JSON.parse(localStorage.getItem('favoriteStore')))

      return;
    }

    arrMovieFavorite.push(show)
    localStorage.setItem('favoriteStore', JSON.stringify(arrMovieFavorite))

    return;
  }



  //причина по которой пришлось локал использовать это то что с запроса прелоадер был
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
          <Route exact path="/"><MainPage data={data} preloader={preloader} addToFavor = {this.addToFavor}/></Route>
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
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)