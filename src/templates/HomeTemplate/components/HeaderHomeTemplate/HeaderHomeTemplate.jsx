import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderHomeTemplate.scss'
import Search from '../../../../assets/imgs/search.svg'
import CartIcon from '../../../../assets/imgs/cart.svg'

import {LogoIcon} from 'src/assets/icons'

function HeaderHomeTemplate() {
    return (
        <Fragment>
            <header className='header_home_template'>
                <LogoIcon />
                <div className="header_right">
                    <img src={Search} alt="" />
                    <p className='header_search'>Search</p>
                    <img src={CartIcon} alt="" />
                    <NavLink to={'/login'} className='header_navlink'>Login</NavLink>
                    <NavLink to={'/register'} className='header_navlink'>Register</NavLink>
                </div>
            </header>
            <nav className='menu_home_template'>
            <NavLink to={'/'} className='menu_link'>Home</NavLink>
            <NavLink to={'/register'} className='menu_link'>Men</NavLink>
            <NavLink to={'/register'} className='menu_link'>Woman</NavLink>
            <NavLink to={'/register'} className='menu_link'>Kid</NavLink>
            <NavLink to={'/register'} className='menu_link'>Sport</NavLink>
            </nav>
        </Fragment>
    )
}

export default HeaderHomeTemplate