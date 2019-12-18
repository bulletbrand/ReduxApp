import React from 'react';
import { connect } from 'react-redux'
import { setInputValue } from '../../actions/InputAction'
import './header.css'

//main  передал пропсом через connect потому автоматом доступны через mapStateToProps
//inputValue приходит пропсом через connect со стейта как и диспатч setRequest
const Header = ({requestAxious,inputValue,dispatch}) => {


//console.log('setRequest', inputValue)
//определяется и диспатчится запрос в App но вызывается тут через пропсы прокинул
  const onSubmitHundler = (e) => {

    e.preventDefault();
    requestAxious(inputValue);
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" >
          <p className="navbar-brand"><span> <i class="fas fa-cat bounce">AndersenFilms</i>

          </span></p>
          <ul className="navbar-nav mt-2 mt-lg-0">

            <li className="nav-item ">
              <a  className="nav-link"  href="#"><i className="fas fa-bars"></i> Main films </a >
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-file"></i> Faforite films</a >
            </li>

            <li className="nav-item">
              <a className="nav-link"  href="#"><i className="fas fa-cloud"></i> About us</a >
            </li>

          </ul>
          <form name="main-form" className="form-inline my-2 my-lg-0" onSubmit={onSubmitHundler}>
            <input className="form-control mr-sm-4" placeholder="Find your films"  value = {inputValue} onChange = {(event) => dispatch(setInputValue(event.target.value))} type="search" />
            <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}



const mapStateToProps = store => {
  console.log("header", store) //получил доступ к стору
  return { 
    inputValue: store.main.inputValue,   //ЗАПИМУЮ В ЄТОТ КОМПОНЕНТ ПРОПС iNPUTvALUE В КОТОРОМ БУДЕТ со стора редюсера main inputValue значение
    }
}


/*
const mapDispatchToProps = dispatch => ({

  setRequest: newInputValue => dispatch(setRequest(newInputValue)),  
}) 
*/




export default connect(
  mapStateToProps,
 // mapDispatchToProps
  )(Header)