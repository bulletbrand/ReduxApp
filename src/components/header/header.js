import React from 'react';
import { connect } from 'react-redux'
import { setInputValue } from '../../actions/InputAction'
import { Link,NavLink} from 'react-router-dom'
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

  const date = new Date()
  const hours = date.getHours()
  const showDate = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
  const styles = {
    fontSize: 12
  }

  let timeOfDay
  //потом вместо цвета тут менять иконку
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "green"

  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon" 
    styles.color = "yellow"

  }else if (hours >= 17 && hours< 24) {
      timeOfDay = "evening"
      styles.color = "red"
  } else {
    timeOfDay = "night"
    styles.color = "black"
  }

//const hide = {display:  (<Route exact path="/">) ? 'none': 'block'}
 
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
              <NavLink activeStyle={{color:"green"}} exact to="/"  className="nav-link"><i className="fas fa-bars"></i> Main films </NavLink >
            </li>


            <li className="nav-item">
              <NavLink activeStyle={{color:"green"}} to="/favorite" className="nav-link"><i className="fas fa-file"></i> Faforite films</NavLink >
            </li>

            <li className="nav-item">
              <NavLink activeStyle={{color:"green"}} to="/aboutus" className="nav-link"><i className="fas fa-cloud"></i> About us</NavLink >
            </li>
          </ul>
          <form name="main-form" className="form-inline my-2 my-lg-0"  onSubmit={onSubmitHundler}>
          <p className="navbar-brand timeLogo">{`Current time:${showDate}`}<span className="time" style={styles}> {timeOfDay}</span></p>

            <input className="form-control mr-sm-4" placeholder="Find your films"  value = {inputValue} onChange = {(event) => dispatch(setInputValue(event.target.value))} type="search" />
            <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}



//Это тоже можно было пропсами перекинуть а не создавать тут отдельно connect
const mapStateToProps = store => {
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