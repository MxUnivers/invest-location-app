import React from 'react'

const ProfileBarner = () => {
    return (
        <>

            <div class="clearfix"></div>

            <section class="detail-section bg-image" style={{ background: `url(assets/img/slider-3.jpg)` }} data-overlay="6">
                <div class="profile-cover-content">
                    <div class="container">
                        <div class="cover-buttons">
                            <ul>
                                <li>
                                    <div class="buttons medium button-plain "><i class="fa fa-phone"></i>+91 528 578 5458
                                    </div>
                                </li>
                                <li>
                                    <div class="buttons medium button-plain "><i class="fa fa-map-marker"></i>#2852, SCO 20
                                        Chandigarh</div>
                                </li>
                                <li>
                                    <div class="inside-rating buttons listing-rating theme-btn button-plain"><span
                                        class="value">9.7</span> <sup class="out-of">/10</sup></div>
                                </li>
                                <li><a href="#add-review" class="buttons btn-outlined medium add-review"><i
                                    class="fa fa-comments-o"></i><span class="hidden-xs">Add review</span></a></li>
                                <li><a href="#" data-listing-id="74" data-nonce="01a769d424" class="buttons btn-outlined"><i
                                    class="fa fa-heart-o"></i><span class="hidden-xs">Bookmark</span> </a></li>
                            </ul>
                        </div>
                        <div class="listing-owner hidden-xs hidden-sm">
                            <div class="listing-owner-avater">
                                <img src="assets/img/avatar.jpg" class="img-responsive img-circle" alt="" />
                            </div>
                            <div class="listing-owner-detail">
                                <h4>Lucy Lukie</h4>
                                <span class="theme-cl">Web Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProfileBarner
