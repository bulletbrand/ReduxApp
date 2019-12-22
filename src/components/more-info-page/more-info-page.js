import React from 'react';
import { Link } from 'react-router-dom'
import { infoRequest } from '../../actions/MainActions'
import axios from 'axios'
import { connect } from 'react-redux'

export class Moreinfo extends React.Component {


  requestInfo = () => {
     axios.get(`http://api.tvmaze.com/shows/${this.props.itemid}`)
      .then(res => {
        localStorage.setItem('info', JSON.stringify(res.data))
        return this.props.infoRequestAction(res.data)
      })
  }


  componentDidMount() {
    this.requestInfo();
  }

  render() {
    const { info } = this.props.info;

    const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
    const imagesq = (!info.image) ? url : info.image.medium;
    const summaryq = (!info.summary) ? "No summary" : info.summary.replace(/<[^>]+>/g, '');

    return (
      <div className="row wrapper">
        <div className="col-md-12 d-flex flex-wrap justify-content-center">

          <div className="card  m-sm-2">
            <img className="pictures" src={imagesq} alt="dsd" />
            <div className="card-body">
              <h5 className="card-title">{info.name}</h5>
              <h4 className="card-title">{info.type}</h4>
              <p className="card-text">{summaryq}</p>
              <Link to="/" className="btn btn-primary ml-4 InfoBtn ">Back</Link >
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = store => {
  return {
    info: store.main,
  }
}


const mapDispatchToProps = dispatch => ({
  infoRequestAction: data => dispatch(infoRequest(data)),
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moreinfo)

