import React from 'react'
import MainPageItem from './main-page-item'
import { connect } from 'react-redux'

//вся фишка в том что подключать редакс и выводить данные нужно было со стора тут а не прокидывать пропсами
//передеать потом 135 урок проф разраб
const MainPage =({ main:{data, preloader}, addToFavor }) => {


//@data и preloader вытащил со стора а addToFavor то просто колбек на верх идет в App чтобы потом использоваться еще и в favorite.
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





const mapStateToProps = store => {
  return {
    main: store.main,
  }
}





export default connect(
  mapStateToProps,
)(MainPage)
