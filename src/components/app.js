import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from '../components/main-page/main-page'
import Header from '../components/header/header'
import FavoritePage from '../components/favorite-page/favorite-page'
import Moreinfo from '../components/more-info-page/more-info-page'
import { setRequest, getLocal } from '../actions/MainActions'
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

  //причина по которой пришлось локал использовать это то что с запроса прелоадер был
  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.props.getRequestFromLocal(JSON.parse(localStorage.getItem('data')))
    }
  }


  render() {
    const { data, preloader } = this.props.main;

    return (
      <React.Fragment>

        <Router>

          <Header requestAxious={this.requestAxious} />
          <Route exact path="/"><MainPage data={data} preloader={preloader} /></Route>
          <Route exact path="/favorite"><FavoritePage /></Route>
          <Route exact path="/moreinfo/:id"
            render={({ match }) => {
              const { id } = match.params;
              console.log("match", match)
              return <Moreinfo itemid={id} />
            }}>
          </Route>
          
        </Router>

      </React.Fragment>

    )
  }
}


const mapStateToProps = store => {
  console.log(store)
  return {
    main: store.main,
    favorite: store.favorite
  }
}


const mapDispatchToProps = dispatch => ({

  setRequestAction: data => dispatch(setRequest(data)),
  getRequestFromLocal: data => dispatch(getLocal(data)),
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)