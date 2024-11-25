import React from 'react'

const ProfileSideBarRight = () => {
return (
<div class="col-md-4 col-sm-12">
    <div class="sidebar">

        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-calendar padd-r-10"></i>Book A Reservation</h4>
            </div>
            <div class="widget-boxed-body">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <input type="text" id="reservation-date" data-lang="en" data-large-mode="true"
                            data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017"
                            data-id="datedropper-0" data-theme="my-style" class="form-control" readonly="" />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <input type="text" id="reservation-time" class="form-control" readonly="" />
                    </div>
                </div>
                <div class="row mrg-top-15">
                    <div class="col-lg-6 col-md-12">
                        <label>Adult</label>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn counter-btn theme-cl btn-number" disabled="disabled"
                                    data-type="minus" data-field="quant[1]">
                                    <i class="fa fa-minus"></i>
                                </button>
                            </span>
                            <input type="text" name="quant[1]" class="border-0 text-center form-control input-number"
                                data-min="0" data-max="10" value="0" />
                            <span class="input-group-btn">
                                <button type="button" class="btn counter-btn theme-cl btn-number" data-type="plus"
                                    data-field="quant[1]">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <label>Children</label>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn counter-btn theme-cl btn-number" disabled="disabled"
                                    data-type="minus" data-field="quant[2]">
                                    <i class="fa fa-minus"></i>
                                </button>
                            </span>
                            <input type="text" name="quant[2]" class="border-0 text-center form-control input-number"
                                data-min="0" data-max="10" value="0" />
                            <span class="input-group-btn">
                                <button type="button" class="btn counter-btn theme-cl btn-number" data-type="plus"
                                    data-field="quant[2]">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <a href="payment-method.html" class="btn reservation btn-radius theme-btn full-width mrg-top-10">Book
                    Now</a>
            </div>
        </div>
        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-time padd-r-10"></i>Opening Hours</h4>
            </div>
            <div class="widget-boxed-body">
                <div class="side-list">
                    <ul>
                        <li>Monday <span>9 AM - 5 PM</span></li>
                        <li>Tuesday <span>9 AM - 5 PM</span></li>
                        <li>Wednesday <span>9 AM - 5 PM</span></li>
                        <li>Thursday <span>9 AM - 5 PM</span></li>
                        <li>Friday <span>9 AM - 5 PM</span></li>
                        <li>Saturday <span>9 AM - 3 PM</span></li>
                        <li>Sunday <span>Closed</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-gallery padd-r-10"></i>Gallery</h4>
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
        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-check-box padd-r-10"></i>Latest Listing</h4>
            </div>
            <div class="widget-boxed-body padd-top-5">
                <div class="side-list">
                    <ul class="listing-list">
                        <li>
                            <a href="#">
                                <div class="listing-list-img">
                                    <img src="assets/img/image-3.jpg" class="img-responsive" alt="" />
                                </div>
                            </a>
                            <div class="listing-list-info">
                                <h5><a href="#" title="Listing">Freel Documentry</a></h5>
                                <div class="listing-post-meta">
                                    <span class="updated">Nov 26, 2017</span> | <a href="#" rel="tag">Documentry</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#">
                                <div class="listing-list-img">
                                    <img src="assets/img/image-4.jpg" class="img-responsive" alt="" />
                                </div>
                            </a>
                            <div class="listing-list-info">
                                <h5><a href="#" title="Listing">Preez Food Rock</a></h5>
                                <div class="listing-post-meta">
                                    <span class="updated">Oct 10, 2017</span> | <a href="#" rel="tag">Food</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#">
                                <div class="listing-list-img">
                                    <img src="assets/img/image-1.jpg" class="img-responsive" alt="" />
                                </div>
                            </a>
                            <div class="listing-list-info">
                                <h5><a href="#" title="Listing">Cricket Buzz High</a></h5>
                                <div class="listing-post-meta">
                                    <span class="updated">Oct 07, 2017</span> | <a href="#" rel="tag">Sport</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#">
                                <div class="listing-list-img">
                                    <img src="assets/img/image-5.jpg" class="img-responsive" alt="" />
                                </div>
                            </a>
                            <div class="listing-list-info">
                                <h5><a href="#" title="Listing">Tour travel Tick</a></h5>
                                <div class="listing-post-meta">
                                    <span class="updated">Sep 27, 2017</span> | <a href="#" rel="tag">Travel</a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-briefcase padd-r-10"></i>Top Categories</h4>
            </div>
            <div class="widget-boxed-body padd-top-10 padd-bot-0">
                <div class="side-list">
                    <ul class="category-list">
                        <li><a href="#">Business <span class="badge bg-g">4</span></a></li>
                        <li><a href="#">Shopping <span class="badge bg-a">7</span></a></li>
                        <li><a href="#">Photography <span class="badge bg-d">10</span></a></li>
                        <li><a href="#">Intertainment <span class="badge bg-l">55</span></a></li>
                        <li><a href="#">Education <span class="badge bg-o">8</span></a></li>
                        <li><a href="#">Travel & Tour <span class="badge bg-y">17</span></a></li>
                        <li><a href="#">Health & Fitness <span class="badge bg-s">9</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-location-pin padd-r-10"></i>Location</h4>
            </div>
            <div class="widget-boxed-body">
                <div class="side-list no-border">
                    <ul>
                        <li><i class="ti-location-pin padd-r-10"></i>171 Greenwich St QCH7</li>
                        <li><i class="ti-mobile padd-r-10"></i>91 234 567 8765</li>
                        <li><i class="ti-email padd-r-10"></i>suppoer@listinghub.com</li>
                    </ul>
                    <h5>Share Listing</h5>
                    <ul class="side-list-inline no-border social-side">
                        <li><a href="#"><i class="fa fa-facebook theme-cl"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus theme-cl"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter theme-cl"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin theme-cl"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest theme-cl"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default ProfileSideBarRight