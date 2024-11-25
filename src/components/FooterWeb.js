import React from 'react'

const FooterWeb = () => {
    return (
        <footer class="footer dark-footer dark-bg">
            <div class="container">
                <div class="row">

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="widgettitle widget-title">About Us</h3>
                            <p>We are Themez Hub A team of clean, creative & professionals delivering world-class HTML
                                Templates to build a better & smart web.</p>
                            <a href="#" class="other-store-link">
                                <div class="other-store-app">
                                    <div class="os-app-icon">
                                        <i class="ti-android"></i>
                                    </div>
                                    <div class="os-app-caps">
                                        Google Store
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="widgettitle widget-title">Popular Services</h3>
                            <ul class="footer-navigation sinlge">
                                <li><a href="#">Home Version One</a></li>
                                <li><a href="#">Home Version Two</a></li>
                                <li><a href="#">Home Version Three</a></li>
                                <li><a href="#">Listing Detail Page</a></li>
                                <li><a href="#">Search Listing Page</a></li>
                                <li><a href="#">Our Top Authors</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <div class="textwidget">
                                <h3 class="widgettitle widget-title">Get In Touch</h3>
                                <div class="address-box">
                                    <div class="sing-add">
                                        <i class="ti-location-pin"></i>7744 North, New York
                                    </div>
                                    <div class="sing-add">
                                        <i class="ti-email"></i>support@listinghub.com
                                    </div>
                                    <div class="sing-add">
                                        <i class="ti-mobile"></i>+91 021 548 75958
                                    </div>
                                    <div class="sing-add">
                                        <i class="ti-world"></i>www.themezhub.com
                                    </div>
                                </div>
                                <ul class="footer-social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="widgettitle widget-title">Subscribe Newsletter</h3>
                            <p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis</p>

                            <form class="sup-form">
                                <input type="email" class="form-control sigmup-me" placeholder="Your Email Address"
                                    required="required"/>
                                    <button type="submit" class="btn" value="Get Started"><i
                                        class="fa fa-location-arrow"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div class="footer-copyright">
                <p>Copyright@ 2019 Listing Hub Design By <a href="http://www.themezhub.com/" title="Themezhub"
                    target="_blank">Themezhub</a></p>
            </div>
        </footer>
    )
}

export default FooterWeb
