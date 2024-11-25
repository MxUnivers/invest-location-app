import React from 'react'
import { routing } from '../config/routing'

const FooterWeb = () => {
    return (
        <footer class="footer dark-footer dark-bg">
            <div class="container">
                <div class="row">

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                        <h3 class="widgettitle widget-title">À Propos de Nous</h3>
                        <p>Nous connectons les professionnels du monde entier pour créer des collaborations significatives. Notre plateforme est dédiée à rapprocher les talents, entreprises et entrepreneurs pour construire ensemble des projets ambitieux et innovants.</p>
                        
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
                            <h3 class="widgettitle widget-title">Liens utiles</h3>
                            <ul class="footer-navigation sinlge">
                                <li><a href={`/${routing.home}`}>Accueil</a></li>
                                <li><a href={`/${routing.search}`}>Recherche</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <div class="textwidget">
                                <h3 class="widgettitle widget-title">Contact</h3>
                                <div class="address-box">
                                    
                                    <div class="sing-add">
                                        <i class="ti-email"></i>aymarbly559@gmail.com
                                    </div>
                                    <div class="sing-add">
                                        <i class="ti-mobile"></i>+225 0595387052
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
                        <h3 class="widgettitle widget-title">Abonnez-vous à notre Newsletter</h3>
                        <p>Restez informé avec nos dernières nouvelles et mises à jour.</p>
                        

                            <form class="sup-form">
                                <input type="email" class="form-control sigmup-me" placeholder="Veillez entre votre addresse email"
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
