import React from 'react';
import { connect } from 'react-redux'
import { setRequest } from '../../actions/MainActions'

const value = 'war'; //вместо этого значение с инпута должно передаваться но нужно его вытащить

//main  передал пропсом через connect потому автоматом доступны через mapStateToProps
//inputValue приходит пропсом через connect со стейта как и диспатч setRequest
const Header = ({requestAxious,inputValue,setRequest}) => {



//определяется и диспатчится запрос в App но вызывается тут через пропсы прокинул
  const onSubmitHundler = (e) => {

    e.preventDefault();
    requestAxious(inputValue);
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white bg-dark">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" >
          <p className="navbar-brand"><span className="border border-right-0"> <i className="fas fa-coffee"></i>
          </span>KinoApi</p>
          <ul className="navbar-nav mt-2 mt-lg-0">

            <li className="nav-item ">
              <a  className="nav-link text-success"  href="#"><i className="fas fa-bars"></i> Main films </a >
            </li>


            <li className="nav-item">
              <a className="nav-link text-success" href="#"><i className="fas fa-file"></i> Faforite films</a >
            </li>

            <li className="nav-item">
              <a className="nav-link text-success"  href="#"><i className="fas fa-cloud"></i> About us</a >
            </li>

          </ul>
          <form name="main-form" className="form-inline my-2 my-lg-0" onSubmit={onSubmitHundler}>
            <input className="form-control mr-sm-4" value = {inputValue}  type="search" placeholder="Search" />
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



const mapDispatchToProps = dispatch => ({

  setRequest: newInputValue => dispatch(setRequest(newInputValue)),  
}) 





export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header)