import React,{Component} from 'react'
import MainPageItem from './main-page-item'

export default class MainPage extends Component {


  render() {

    const {data, preloader,addToFavor,color} =this.props;
  
    const dataShow = data.map(({show}) =>(
      <div key={show.id}>
      <MainPageItem 
        show = {show} 
        addToFavor = {()=>addToFavor(show)}
        
         />
      </div>
    ))



    return (
      <div className="row wrapper">
      <div className="col-md-12 d-flex flex-wrap justify-content-center">

      {(!dataShow.length)?
        <h5 className="defWtf blink">Here will be your films...</h5> :null}
    

    {preloader ? 
    <div className="spinner">
    
      <h6 className="titleSearh">Wait a second your films are loading...</h6>
      <div className = "d-flex justify-content-center">
      <div class="spinner-grow"></div>
      <div class="spinner-grow"></div>
      <div class="spinner-grow"></div>

    </div>
    </div>
    : dataShow}
      
      </div>
      </div>
    )
  }
}



