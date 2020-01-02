import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios'


/**
  * @description  Компонент выводит информацию о конкретном фильме  
  * @param	{string} itemid - айди который идет пропсом с App через роут свойство match.
  * @author	Аlexander Matyka
  */

export const Moreinfo = ({ itemid }) => {

  const [info, setInfo] = useState([]);

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


Moreinfo.propTypes = {
  itemid: PropTypes.string.isRequired
};






