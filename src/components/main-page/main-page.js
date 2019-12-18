import React,{Component} from 'react'
import MainPageItem from './main-page-item'

export default class MainPage extends Component {


  render() {
    const data =this.props.data;
    const preloader = this.props.preloader;
    console.log("preloader", preloader)
    const dataShow = data.map(({show}) =>(
      <div key={show.id}>
      <MainPageItem 
        show = {show} />
      </div>
    ))

    //тут перебрат данные и отрендерить ниже компонент тоесть вместо name Должен быть запрос
    return (
      <div className="row">
      <div className="col-md-12 d-flex flex-wrap justify-content-center">
    {preloader ? 
    <div className="spinner">
      <p>Wait a second your films are loading...</p>
      <div className = "d-flex justify-content-center">
      <div class="spinner-grow text-success"></div>
      <div class="spinner-grow text-success"></div>
      <div class="spinner-grow text-success"></div>

    </div>
    </div>
    : dataShow}
      
      </div>
      </div>
    )
  }
}



