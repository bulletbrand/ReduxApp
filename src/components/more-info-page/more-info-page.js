import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './more-info.css'
import axios from 'axios'


/**
  * @description  Компонент выводит информацию о конкретном фильме  
  * @param	{string} itemid - айди который идет пропсом с App через роут свойство match.
  * @author	Аlexander Matyka
  */

export const Moreinfo = ({ itemid ,match}) => {

  const [info, setInfo] = useState([]);
console.log("match", match)
  const requestInfo = () => {
    axios.get(`http://api.tvmaze.com/shows/${itemid}`)
      .then(res => {
        localStorage.setItem('info', JSON.stringify(res.data))
        return setInfo(res.data)
      })
  }

  useEffect(() => {
    requestInfo();
  }, []);


  const url = "http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg";
  const imagesq = (!info.image) ? url : info.image.medium;
  const summaryq = (!info.summary) ? "No summary" : info.summary.replace(/<[^>]+>/g, '');
//LANGUUAGE,TYPE,officialsite,
  return (
    <div className="row wrapper">
      <div className="col-md-12 d-flex flex-wrap justify-content-center">

        <div className="card  m-sm-2 info-card" >
        <h2 className="card-title">{info.name}</h2>

          <img className="pictures" src={imagesq} alt="dsd" />
          <div className="card-body">
            <h3 className="card-title">{info.type}</h3>
            <h5 className="card-title">{info.language}</h5>
            <p className="card-text">{summaryq}</p>
            <p className="card-text"></p>
            <Link to="/" className="btn btn-primary ml-4 InfoBtn ">Back</Link >
          </div>
        </div>
      </div>
    </div>
  );
}


Moreinfo.propTypes = {
  itemid: PropTypes.string.isRequired
};






