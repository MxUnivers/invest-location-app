import React, { useEffect } from 'react'
import { profilePictureDefault } from '../../config/dataApi'
import { useParams } from 'react-router-dom';
import { fetchUserById, fetchUsersAll } from '../../actions/request/UserRequest';
import { getAndCheckLocalStorage } from '../../config/localvalueFuction';
import { localStorageKeys } from '../../config/localvalue';
import { useDispatch, useSelector } from 'react-redux';

const ProfileBarner = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.user);



    const params = useParams();

    const { id } = params;
    useEffect(() => {
        dispatch(fetchUsersAll())
        dispatch(fetchUserById(id || getAndCheckLocalStorage(localStorageKeys?.userId)));
    });

    const  imageBgEmpty="assets/img/ville-abidjan.jpg"




    return (
        <>

            <div class="clearfix"></div>

            <section class="detail-section bg-image" style={{ background: `url(${  user && user.images && user.images.length > 0 ? user.images[0] : imageBgEmpty })` }} data-overlay="6">
                <div class="profile-cover-content">
                    <div class="container">
                        <div class="cover-buttons">
                            <ul>
                                <li>
                                    <div class="buttons medium button-plain "><i class="fa fa-phone"></i>{user?.codePostal?.indicatif || ""} {user?.phone || ""}
                                    </div>
                                </li>
                                <li>
                                    <div class="buttons medium button-plain "><i class="fa fa-map-marker"></i>{user?.address|| ""}</div>
                                </li>
                                <li>
                                    <div class="inside-rating buttons listing-rating theme-btn button-plain"><span
                                        class="value">{user?.rating || ""}</span> <sup class="out-of">/5</sup></div>
                                </li>
                                {/* <li><a href="#add-review" class="buttons btn-outlined medium add-review"><i
                                    class="fa fa-comments-o"></i><span class="hidden-xs">Add review</span></a></li>
                                <li><a href="#" data-listing-id="74" data-nonce="01a769d424" class="buttons btn-outlined"><i
                                    class="fa fa-heart-o"></i><span class="hidden-xs">Bookmark</span> </a></li> */}
                            </ul>
                        </div>
                        <div class="listing-owner hidden-xs hidden-sm">
                            <div class="listing-owner-avater">
                                <img src={user?.profilePicture || profilePictureDefault} class="img-responsive img-circle" alt="" />
                            </div>
                            <div class="listing-owner-detail">
                                <h4 style={{ fontWeight:"700", fontSize:"20px" }}>{user?.firstname || ""} {user?.lastname || ""}</h4>
                                <span class="theme-cl" style={{ fontSize:"15px" }}>{user?.profession || ""}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProfileBarner
