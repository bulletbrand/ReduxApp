import React, { Component } from 'react'
import { connect } from 'react-redux'
import  MainPage  from '../components/main-page/main-page'
import  Header  from '../components/header/header'
import { setRequest } from '../actions/MainActions'
import axios from 'axios'
//store не приходится писать каждый раз при диспатче и тд так как у нас есть connect


const PATH_API_URL = 'http://api.tvmaze.com/search/shows?q=';

//Этот класс контейнер для всего так как подключен к редакс
class App extends Component {


  requestAxious = (value) => {  
   return axios.get(`${PATH_API_URL}${value}`)
    .then(res => {
      localStorage.setItem('data', JSON.stringify(res.data))

    return this.props.setRequestAction(res.data)  //store.dispatch(setRequest(data)) чтобы так не писать мы просто вытянули само поле с props setRequestAction которое в пропс передается в mapDISPATCH TO PROPS
    ; 
    })

    //this.props.setRequest(data)
  }
  
  componentDidMount() {
    //тут сделать сохранение локал стореджа в стейт редакса 
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
  console.log(store) 
  return { 
    main: store.main,                //мы не ток получаем тут данные которые нам нужны(кусочки) но еще и подписуемся сразу на их исзменения (спасибо connect)
    favorite: store.favorite
  }
}


// Эта фция диспетчит наш action creator setRequest в редюсер, передается она туда с помощью connecy
//это обьект и содержит он поле setRequest, так в последиствии можно будет обратиться к пропсу этому
//тоесть работают по типу bindActionCreators
const mapDispatchToProps = dispatch => ({

    setRequestAction: data => dispatch(setRequest(data)),  //!тоесть екшен можно было бы передавать тут а не с файла actions
}) 




//отправляю с помощью connect в редюсер сразу фции с компонента App и получаю текущий стейт пропсами
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)