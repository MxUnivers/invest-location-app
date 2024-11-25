import React from 'react'

const ProfileEditPage = () => {
    return (
        <>
            <div class="clearfix"></div>

            <section class="title-transparent page-title" style={{ background: "url(assets/img/title-bg.jpg)" }}>
                <div class="container">
                    <div class="title-content">
                        <h1>Add Listing</h1>
                        <div class="breadcrumbs">
                            <a href="#">Home</a>
                            <span class="gt3_breadcrumb_divider"></span>
                            <span class="current">Add Listing</span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="clearfix"></div>

            <section>
                <div class="container">
                    <div class="col-md-10 col-sm-12 col-md-offset-1 mob-padd-0">

                        {
                            /* General Information */
                        }

                        <div class="add-listing-box general-info mrg-bot-25 padd-bot-30 padd-top-25">
                            <div class="listing-box-header">
                                <i class="ti-files theme-cl"></i>
                                <h3>General Information</h3>
                                <p>Write something general information about your listing</p>
                            </div>
                            <form>
                                <div class="row mrg-r-10 mrg-l-10">
                                    <div class="col-sm-6">
                                        <label>Listing Title</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Keyword</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Category</label>
                                        <select data-placeholder="Choose Category" class="form-control chosen-select"
                                            tabindex="2">
                                            <option>Select</option>
                                            <option>Eat & Drink</option>
                                            <option>Food & Restaurants</option>
                                            <option>Fitness</option>
                                            <option>Hospital</option>
                                            <option>Education</option>
                                            <option>Sport</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Website</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </form>
                        </div>


                        {/*Localisation */}
                        <div class="add-listing-box add-location mrg-bot-25 padd-bot-30 padd-top-25">
                            <div class="listing-box-header">
                                <i class="ti-location-pin theme-cl"></i>
                                <h3>Add Location</h3>
                                <p>Write Address Information about your listing Location</p>
                            </div>
                            <form>
                                <div class="row mrg-r-10 mrg-l-10">
                                    <div class="col-sm-6">
                                        <label>Address</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Temporary Address</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>City</label>
                                        <select data-placeholder="Choose City" class="form-control chosen-select" tabindex="2">
                                            <option>New York</option>
                                            <option>Los Angeles</option>
                                            <option>Chicago</option>
                                            <option>Phoenix</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>State</label>
                                        <select data-placeholder="Choose Sate" class="form-control chosen-select" tabindex="2">
                                            <option>New York</option>
                                            <option>Los Angeles</option>
                                            <option>Chicago</option>
                                            <option>Phoenix</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Country</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Zip-Code</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </form>
                        </div>



                        {/*Ajouter photo de ton activité */}

                        <div class="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
                            <div class="listing-box-header">
                                <i class="ti-gallery theme-cl"></i>
                                <h3>Add Gallery</h3>
                                <p>Write full detail information about listing Owner</p>
                            </div>
                            <form action="/upload-target" class="dropzone dz-clickable primary-dropzone">
                                <div class="dz-default dz-message">
                                    <i class="ti-gallery"></i>
                                    <span>Drag & Drop To Change Logo</span>
                                </div>
                            </form>
                        </div>



                        {/* Information sur la heure  */}


                        <div class="add-listing-box opening-day mrg-bot-25 padd-bot-30 padd-top-25">
                            <div class="listing-box-header">
                                <i class="ti-time theme-cl"></i>
                                <h3>Opening Hours</h3>
                                <p>Write something general information about your listing</p>
                            </div>
                            <form>
                                <div class="row mrg-r-10 mrg-l-10">
                                    <div class="col-sm-12 mob-padd-0">
                                        <div class="form-group">
                                            <label class="control-label col-md-2">Monday</label>
                                            <div class="col-md-5">
                                                <select data-placeholder="Choose Time" class="form-control chosen-select"
                                                    tabindex="2">
                                                    <option>Opening Time</option>
                                                    <option>1 :00 AM</option>

                                                    <option>Closed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
            {/*//
    <!-- End General Information --> */}








        </>

    )
}

export default ProfileEditPage