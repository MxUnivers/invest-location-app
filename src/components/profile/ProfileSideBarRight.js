import React from 'react'

const ProfileSideBarRight = () => {
    return (
        <div class="col-md-4 col-sm-12">
            <div class="sidebar">

                {/*<div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-calendar padd-r-10"></i>Contact</h4>
            </div>
            <div class="widget-boxed-body">
                <div class="row">
                    
                </div>
                <div class="row mrg-top-15">
                    
                </div>
                <a href="#" class="btn reservation btn-radius theme-btn full-width mrg-top-10">Entrer en contact</a>
            </div>
        </div> */}
                <div class="widget-boxed">
                    <div class="widget-boxed-header">
                        <h4><i class="ti-time padd-r-10"></i>Heure d{"'"}ouverture</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="side-list">
                            <ul>
                                <li>Lundi <span>9h - 17h</span></li>
                                <li>Mardi <span>9h - 17h</span></li>
                                <li>Mercredi <span>9h - 17h</span></li>
                                <li>Jeudi <span>9h - 17h</span></li>
                                <li>Vendredi <span>9h - 17h</span></li>
                                <li>Samedi <span>9h - 15h</span></li>
                                <li>Dimanche <span>Fermé</span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="widget-boxed">
                    <div class="widget-boxed-header">
                        <h4><i class="ti-gallery padd-r-10"></i>Photo des activités</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="side-list no-border gallery-box">
                            <ul class="gallery-list">
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox="gallery" href="assets/img/slider-2.jpg">
                                        <img src="assets/img/slider-2.jpg" class="img-responsive" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProfileSideBarRight