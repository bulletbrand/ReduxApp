import React from 'react'
import MainPageItem from './main-page-item'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



/**
  * @description  Компонента которая рендерит фильмы на главной странице
  * @param	{array} data - данные о фильмах которые компонент получает со стора с помощью mapStateToProps для вывода инфы
  * @param	{boolean} preloader - статус прелоадера из стора
  * @param	{func} addToFavor - фция колбек которая передается из дочернего компонента наверх в главный компонент чтобы переиспользоваться
  * @author	Аlexander Matyka
  */

export const MainPage = ({main:{data,preloader},addToFavor}) => {

    const dataShow = data.map(({ show }) => (
      <div key={show.id}>
        <MainPageItem
          show={show}
          addToFavor={() => addToFavor(show)}
          changeColor={show.changeColor}
        />
      </div>
    ))


    return (
      <div className="row wrapper">
        <div className="col-md-12 d-flex flex-wrap justify-content-center">

          {(!dataShow.length) ?
            <h5 className="defWtf blink">Here will be your films...</h5> : null}

          {preloader ?
            <div className="spinner">

              <h6 className="titleSearh">Wait a second your films are loading...</h6>
              <div className="d-flex justify-content-center">
                <div className="spinner-grow"></div>
                <div className="spinner-grow"></div>
                <div className="spinner-grow"></div>

              </div>
            </div>
            : dataShow}

        </div>
      </div>
    )
  }

  const mapStateToProps = store => {
    return {
      main: store.main,
    }
  }
  

  export default connect(
    mapStateToProps
  )(MainPage)
  
  
  MainPage.propTypes = {
    data:  PropTypes.array,
    preloader:  PropTypes.bool,
    addToFavor:  PropTypes.func.isRequired,  
  };
  

