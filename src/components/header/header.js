import React from 'react';
import { connect } from 'react-redux'
import { setInputValue } from '../../actions/InputAction'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = ({ requestAxious, inputValue, dispatch }) => {


  const onSubmitHundler = (e) => {
    e.preventDefault();
    requestAxious(inputValue); //можно было напрямую редакс подключить но я пропсом прокинул
  }


  const date = new Date()
  const hours = date.getHours()
  const showDate = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
  const styles = {
    fontSize: 12
  }

  let timeOfDay
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "green"

  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "yellow"

  } else if (hours >= 17 && hours < 24) {
    timeOfDay = "evening"
    styles.color = "red"
  } else {
    timeOfDay = "night"
    styles.color = "black"
  }


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
          <form name="main-form" className="form-inline my-2 my-lg-0" onSubmit={onSubmitHundler}>
            <p className="navbar-brand timeLogo">{`Current time:${showDate}`}<span className="time" style={styles}> {timeOfDay}</span></p>

            <input className="form-control mr-sm-4" placeholder="Find your films" value={inputValue} onChange={(event) => dispatch(setInputValue(event.target.value))} type="search" />
            <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
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