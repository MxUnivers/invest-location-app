import React from 'react'

const ProfileSideBarLeft = () => {
return (
    <div class="col-md-8 col-sm-8">
    <div class="detail-wrapper">
        <div class="detail-wrapper-body">
            <div class="listing-title-bar">
                <h3>Pizza Prizm House <span class="mrg-l-5 category-tag">Restaurants</span></h3>
                <div>
                    <a href="#listing-location" class="listing-address">
                        <i class="ti-location-pin mrg-r-5"></i>
                        2726 Shinn Street, New York
                    </a>

                    <div class="rating-box">
                        <div class="detail-list-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <a href="#" class="detail-rating-count">47 Rating</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="detail-wrapper">
        <div class="detail-wrapper-header">
            <h4>Overview</h4>
        </div>
        <div class="detail-wrapper-body">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
    </div>

    <div class="detail-wrapper">
        <div class="detail-wrapper-header">
            <h4>Amenities</h4>
        </div>
        <div class="detail-wrapper-body">
            <ul class="detail-check">
                <li>Alarm system</li>
                <li>Depanneur in building</li>
                <li>Onsite management</li>
                <li>Janitor</li>
                <li>Security cameras</li>
                <li>Laundry room in building</li>
                <li>Door attendant</li>
                <li>Street parking</li>
                <li>Attached garage</li>
                <li>Elevator</li>
                <li>Wheelchair accessible</li>
                <li>Hot water</li>
            </ul>
        </div>
    </div>

    <div class="detail-wrapper">
        <div class="detail-wrapper-header">
            <h4>Location</h4>
        </div>
        <div class="detail-wrapper-body">
            <div id="map_full_width_one" class="full-width" style={{ height:"400px" }}></div>
        </div>
    </div>

    <div class="detail-wrapper">
        <div class="detail-wrapper-header">
            <h4>24 Reviews</h4>
        </div>
        <div class="detail-wrapper-body">
            <ul class="review-list">
                <li>
                    <div class="reviews-box">
                        <div class="review-body">
                            <div class="review-avatar">
                                <img alt="" src="assets/img/user-1.png" class="avatar avatar-140 photo" />
                            </div>
                            <div class="review-content">
                                <div class="review-info">
                                    <div class="review-comment">
                                        <div class="review-author">
                                            Cole Harris
                                        </div>
                                        <div class="review-comment-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star empty"></i>
                                        </div>
                                    </div>
                                    <div class="review-comment-date">
                                        <div class="review-date">
                                            <span>4 weeks ago</span>
                                        </div>
                                    </div>
                                </div>
                                <p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
                                    Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos
                                    Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate
                                    Non Provident.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="reviews-box">
                        <div class="review-body">
                            <div class="review-avatar">
                                <img alt="" src="assets/img/user-2.jpg" class="avatar avatar-140 photo" />
                            </div>
                            <div class="review-content">
                                <div class="review-info">
                                    <div class="review-comment">
                                        <div class="review-author">
                                            Mariya Merry
                                        </div>
                                        <div class="review-comment-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star empty"></i>
                                        </div>
                                    </div>
                                    <div class="review-comment-date">
                                        <div class="review-date">
                                            <span>3 weeks ago</span>
                                        </div>
                                    </div>
                                </div>
                                <p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
                                    Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos
                                    Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate
                                    Non Provident.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="reviews-box">
                        <div class="review-body">
                            <div class="review-avatar">
                                <img alt="" src="assets/img/user-3.jpg" class="avatar avatar-140 photo" />
                            </div>
                            <div class="review-content">
                                <div class="review-info">
                                    <div class="review-comment">
                                        <div class="review-author">
                                            Wadden Will
                                        </div>
                                        <div class="review-comment-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star empty"></i>
                                        </div>
                                    </div>
                                    <div class="review-comment-date">
                                        <div class="review-date">
                                            <span>5 weeks ago</span>
                                        </div>
                                    </div>
                                </div>
                                <p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
                                    Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos
                                    Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate
                                    Non Provident.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="detail-wrapper">
        <div class="detail-wrapper-header">
            <h4>Rate & Write Reviews</h4>
        </div>
        <div class="detail-wrapper-body">

            <div class="row mrg-bot-10">
                <div class="col-md-12">
                    <div class="rating-opt">
                        <div class="jr-ratenode jr-nomal"></div>
                        <div class="jr-ratenode jr-nomal "></div>
                        <div class="jr-ratenode jr-nomal "></div>
                        <div class="jr-ratenode jr-nomal "></div>
                        <div class="jr-ratenode jr-nomal "></div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <input type="text" class="form-control" placeholder="Your Name*" />
                </div>
                <div class="col-sm-6">
                    <input type="email" class="form-control" placeholder="Email Address*" />
                </div>
                <div class="col-sm-12">
                    <textarea class="form-control height-110"
                        placeholder="Tell us your experience..."></textarea>
                </div>
                <div class="col-sm-12">
                    <button type="button" class="btn theme-btn">Submit your review</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default ProfileSideBarLeft