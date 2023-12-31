import React, { Fragment, Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderHomeTemplate from './components/HeaderHomeTemplate/HeaderHomeTemplate'
import FooterHomeTemplate from './components/FooterHomeTemplate/FooterHomeTemplate'
import { useScrollTop } from '../../hooks/useScrollTop'

function HomeTemplate() {
    useScrollTop();
    return (
        <Fragment>
            <HeaderHomeTemplate />
            <div style={{ minHeight: '75vh' }}>
                <Suspense fallback={<>loading...</>}>

                    <Outlet />
                </Suspense>
            </div>

            <FooterHomeTemplate />
        </Fragment>
    )
}

export default HomeTemplate