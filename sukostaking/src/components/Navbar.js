import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  FaRedditAlien,
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from '../images/Retsukologo.png'
import { getUserAddress, login } from './../Web3/Web3_Funtions'


export default function Navbar() {

  const [address, setAddress] = useState()

  useEffect(()=>{
    login();
  },[])

  const login = async()=>{
    const data = await window.ethereum.enable();
    if(data){
      const address = await getUserAddress()
      window.address = address
      setAddress(address)
      console.log(' user address ', address)
    }
  }
  
  window.ethereum.on('accountsChanged', (accounts) => {
    setAddress(accounts[0])
    window.address = accounts[0]
  });

  const slicing =(add)=>{
    const first = add.slice(0,4);
    const second = add.slice(38);
    return first + '...' + second
  }

  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" /> &nbsp;
          <span>Retsuko </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Why Retsuko
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Moonmap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-secondary" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Audit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Goldpaper
                  </a>
                </li>
              </ul>
            </li> */}
            
            
            
            <li className="nav-item">
             
              <a className="headerSocials" href="https://twitter.com/RetsukoOfficial">
                <FaTwitter />
              </a>
              <a className="headerSocials" href="https://t.me/RetsukoOfficial">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-warning" onClick={()=> login()}>{address ? slicing(address) : 'Connect'}</button>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
