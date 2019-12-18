import React, { Component } from 'react'
import { connect } from 'react-redux'
import  MainPage  from '../components/main-page/main-page'
import  Header  from '../components/header/header'
import { setRequest } from '../actions/MainActions'
import axios from 'axios'


const PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';

//Этот класс контейнер для всего так как подключен к редакс
class App extends Component {


  requestAxious = (value) => {  
   return axios.get(`${PATH_API_URL}${value}`)
    .then(res => {
      localStorage.setItem('data', JSON.stringify(res.data))

    return this.props.setRequest(res.data)
    ; 
    })

    //this.props.setRequest(data)
  }
  
  componentDidMount() {
    console.log("ComponentDidMount")
  }


  render() {
  //тут уже можно с редакс стора вытягивать пропсы и кидать их по компонентам далее
  const  {data, preloader } = this.props.main;
  const { setRequest } = this.props;

  console.log("s", data)
  //const {surname} = this.props.favorite
    return (
      <React.Fragment>
  
      <Header
      requestAxious = {this.requestAxious} />

      <MainPage  data = {data}
       preloader = {preloader}
        />
      </React.Fragment>

    )
  }
}


//получить данные из стейта по сути это подписка на обновление данных из стейта
//!!!!!!!!!а connect уже запишет в пропсы эти данные тоесть store.main как main будет доступно из this.props в компоненте App
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return { 
    main: store.main,                 //store.(файл с редюсером как назван нужным с которого вытаскиваем потом в пропсы)
    favorite: store.favorite
  }
}

//отправка в стор даннЫх какие то тоесть изменение его по какому то действию нашему
//dispatch позволяет отправлять данные редюсеру
//тут в стор будет data диспатчится с запроса axious при самбите формы потому можно хедер тут поместить

const mapDispatchToProps = dispatch => ({

    setRequest: data => dispatch(setRequest(data)),  //click() => уолбек this.props.setRequest(res.data) => и тут єтот сет реквест диспатчу  екшен в редюсер и редюсер уже  реагирует на єтот екщен
}) //setRequest это фция в обьекте которая диспатчит наши данные setReqiest в пропсы 


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)