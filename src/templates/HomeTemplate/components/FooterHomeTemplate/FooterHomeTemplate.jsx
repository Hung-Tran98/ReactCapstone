import React from 'react'
import './FooterHomeTemplate.scss'
function FooterHomeTemplate() {
    return (
        <footer>
            <div className="footer_top">
                <div className="footer_get">
                    <h2>get help</h2>
                    <a href="/">home</a>
                    <a href="">Nike</a>
                    <a href="">Adidas</a>
                    <a href="">contact</a>
                </div>
                <div className="footer_sup">
                    <h2>support</h2>
                    <a href="">about</a>
                    <a href="">contact</a>
                    <a href="">help</a>
                    <a href="">phone</a>
                </div>
                <div className="footer_regis">
                    <h2>register</h2>
                    <a href="/register">register</a>
                    <a href="/login">login</a>
                </div>
            </div>
            <div className="footer_bot">
                <p>© 2022 Cybersoft All Rights Reserved | Design Theme by HungTran.

                </p>
            </div>
        </footer>
    )
}

export default FooterHomeTemplate