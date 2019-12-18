import React from 'react';

import { Link } from 'react-router-dom'


const Header = () => {

 
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
          <form name="main-form" className="form-inline my-2 my-lg-0" >
            <input className="form-control mr-sm-4" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-0 my-sm-2" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
