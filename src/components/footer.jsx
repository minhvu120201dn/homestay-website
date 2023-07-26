import React from "react";

function Footer() {
    return (
        <footer id="footer" className="sm-padding bg-dark">

            <div className="container">

                <div className="row">

                    <div className="col-md-12">

                        <div className="footer-logo">
                            <a href="index.html"><img src="img/logo_alt.jpg" alt="logo" /></a>
                        </div>

                        <ul className="footer-follow">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        <div className="footer-copyright">
                            <p>Copyright © 2023 | Lekima Homestay <i className="icon-heart color-danger" aria-hidden="true" /></p>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;