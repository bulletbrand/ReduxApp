import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { setInputValue } from '../../actions/InputAction'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Moment from "react-moment";

import './header.css'





/**
  * @description  Компонент хедер в котором происходит самбит формы после чего вызывается запрос и его результат посылается в стор а оттуда достается в App и подставляется в запрос
  * @param	{func} requestAxious - фция с запросом которая в теле отправляет сразу данные в стор
  * @param	{string} inputValue -значение с контролируемого компонента инпут взятые пропсом со стора
  * @param	{func} dispatch - Это свойство стора которое позволяет диспатчить/передавать екшен криетор в  редюсер сразу, и не нужно меп диспетч ту стор
  * @author	Аlexander Matyka
  */

const Header = ({requestAxious, inputValue, dispatch, test }) => {





  const onSubmitHundler = (e) => {
    e.preventDefault();
    requestAxious(inputValue); //можно было напрямую редакс подключить но я пропсом прокинул
  }

  //альтернатива можно напрямую записать в инпут чтобы сделать его клнтролируемым связав со стором
  //(event) => dispatch(setInputValue(event.target.value))

  const inputControll =({target:{value}}) => {
   dispatch(setInputValue(value))
  }


  const date = new Date()
  const hours = date.getHours()


  let timeOfDay = (hours < 12 && hours > 6 ) ?  "morning" :
  (hours >= 12 && hours < 17) ?  "afternoon":
  (hours >= 17 && hours < 24) ?  "evening":
   "night"


  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" >
          <p className="navbar-brand"><span> <i className="fas fa-cat bounce">AndersenFilms</i>

          </span></p>

          <ul className="navbar-nav mt-2 mt-lg-0">

            <li className="nav-item ">
              <NavLink activeStyle={{ color: "green" }} exact to="/" className="nav-link"><i className="fas fa-bars"></i> Main films </NavLink >
            </li>


            <li className="nav-item">
              <NavLink activeStyle={{ color: "green" }} to="/favorite" className="nav-link"><i className="fas fa-file"></i> Faforite films</NavLink >
            </li>

            <li className="nav-item">
              <NavLink activeStyle={{ color: "green" }} to="/aboutus" className="nav-link"><i className="fas fa-cloud"></i> About us</NavLink >
            </li>
          </ul>
          <form name="main-form"  style={test} className="form-inline my-2 my-lg-0"  onSubmit={onSubmitHundler}>
            <p className="navbar-brand timeLogo"> <Moment format="YYYY-MM-DD HH:mm:ss" interval={1000} /><span className="time"> {timeOfDay}</span></p>

            <input className="form-control mr-sm-4"  placeholder="Find your films" value={inputValue} onChange={inputControll} type="search" />
            <button className="btn btn-outline-success my-0 my-sm-2"  type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    inputValue: store.main.inputValue,
  }
}

export default connect(
  mapStateToProps,
)(Header)

Header.propTypes = {
  requestAxious:  PropTypes.func.isRequired,
  inputValue:  PropTypes.string.isRequired,
  dispatch:  PropTypes.func.isRequired,  
};
