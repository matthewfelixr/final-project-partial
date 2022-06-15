import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-left" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            <form className="form-inline d-flex my-2 my-sm-0 text-start">
                <input className="form-control me-sm-3 " type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success me-1 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
  )
}

export default Header