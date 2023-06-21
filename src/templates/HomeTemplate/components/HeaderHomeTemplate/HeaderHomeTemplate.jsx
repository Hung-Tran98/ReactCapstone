import React, { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './HeaderHomeTemplate.scss'
import Search from '../../../../assets/imgs/search.svg'
import CartIcon from '../../../../assets/imgs/cart.svg'

import { LogoIcon } from 'src/assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKey } from '../../../../utils'
import { ACCESSTOKEN } from '../../../../consts'
import { resetUserProfile } from '../../../../redux/slices/User'

function HeaderHomeTemplate() {
    const { countProduct } = useSelector(state => state.ProductReducer)
    const { userProfile } = useSelector(state => state.UserReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        navigate('/login');
        deleteKey(ACCESSTOKEN);
        dispatch(resetUserProfile())
    }
    return (
        <Fragment>
            <header className='header_home_template'>
                <LogoIcon />
                <div className="header_right">
                    <img src={Search} alt="" />
                    <p className='header_search' onClick={()=>{navigate('/search')}}>Search</p>
                    <img onClick={() => {
                        userProfile.name ? navigate('/cart') : navigate('/login')
                    }} src={CartIcon} /><label style={{ color: 'white' }}>{countProduct < 1 ? '' : '('+(countProduct)+')'}</label>
                    {userProfile.name ? <>
                        <p style={{ color: 'white',cursor:'pointer' }} onClick={()=>navigate('/profile')}>{userProfile.name}</p>
                        <button onClick={handleLogout} style={{ background: 'black', color: 'white', border: 'solid 0.1rem red' }}>Logout</button>
                    </> : (
                        <>
                            <NavLink to={'/login'} className='header_navlink'>Login</NavLink>
                            <NavLink to={'/register'} className='header_navlink'>Register</NavLink>
                        </>
                    )}


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