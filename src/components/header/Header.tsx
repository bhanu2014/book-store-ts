import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'
import { Book } from '../book/BookInterface'


interface RootState {
  cart: Book[]
}

const Header: React.FC = () => {


    const cart = useSelector((state: RootState) => state?.cart);

    const resRF = () => {
        var x: any = document.getElementById("myTopnav");
        if (x?.className === "mainnav") {
          x.className += " responsive";
        } else {
          x.className = "mainnav";
        }
      }

    return <div className="mainnav" id="myTopnav">
        <a href="javascript:void(0)" className="icon_heading">Book store</a>
        <div className="menu-right">
            <Link to="/">Home</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/checkout">Cart ({cart.length})</Link>
            <a href="javascript:void(0);" className="baricon" onClick={resRF}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
        </a>
        </div>
    </div>
}

export default Header
