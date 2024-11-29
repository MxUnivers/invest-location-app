import React, { useEffect, useState } from 'react'
import { MdLocationCity, MdPerson, MdStarBorder, MdStarRate } from "react-icons/md";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { profilePictureDefault } from '../../config/dataApi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserById, fetchUsersAll } from '../../actions/request/UserRequest';
import { getAndCheckLocalStorage } from '../../config/localvalueFuction';
import { localStorageData, localStorageKeys } from '../../config/localvalue';
import { FETCH_USERS_REQUEST, FETCH_USER_SUCCESS } from '../../app/actions/actions';
import { getDataFromFile } from '../../actions/DataLocal';
import moment from 'moment/moment';
import { ReviewCreate, fetchReviewsAll } from '../../actions/request/ReviewRequest';
import { toast } from 'react-toastify';

// Remplacez par votre propre clé API Google Maps
const mapStyles = {
    width: "100%",
    height: "400px"
};


export const ProfileSideBarLeft = (props) => {



    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.user);
    const reviews = useSelector((state) => state.reviews.reviews);
    const loadingReview = useSelector((state) => state.reviews.loadingReview);

    const params = useParams();

    const { id } = params;

    useEffect(() => {
        const users = getDataFromFile(localStorageData.Users) || []
        const userGet = users.find((item) => item?._id === id || getAndCheckLocalStorage(localStorageKeys.userId))
        dispatch({ type: FETCH_USER_SUCCESS, payload: userGet });
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchReviewsAll("", "", id))
    }, [dispatch]);


    const [contentReview, setcontentReview] = useState();

    const sendCreate = (e) => {
        if (!getAndCheckLocalStorage(localStorageKeys.userId)) {
            toast.error("Vous n'êtes pas connecté", { position: "bottom-right" });
            return;
        }
        if (!contentReview) {
            toast.error("Votre commentaire est vide", { position: "bottom-right" });
            return;
        }
        dispatch(ReviewCreate({
            user: getAndCheckLocalStorage(localStorageKeys.userId),
            userTestimonial: getAndCheckLocalStorage(localStorageKeys.userId),
            content: contentReview
        }))
        dispatch(fetchReviewsAll("", "", id))
    }


    const location = {
        lat: user?.lat || "", // Latitude de Cocody
        lng: user?.lng || "" // Longitude de Cocody
    };







    // Fonction pour générer les étoiles en fonction de la note
    const generateStars = (stars) => {
        let starHTML = '';
        for (let i = 1; i <= 5; i++) {
            starHTML += i <= stars ? <MdStarBorder /> : <MdStarRate />;
        }
        return starHTML;
    };

    return (
        <div class="col-md-8 col-sm-8">
            <div class="detail-wrapper">
                <div class="detail-wrapper-body">
                    <div class="listing-title-bar">
                        {user?.category?.name && <h3>{user?.companyName || ""}<span class="mrg-l-5 category-tag">{user?.category?.name || ""}</span></h3>}
                        <div>
                            {
                                user?.address &&
                                <a href="#listing-location" class="listing-address">
                                    <i class="ti-location-pin mrg-r-5"></i>
                                    {user?.address || ""}
                                </a>
                            }


                            <div class="rating-box">
                                <div class="detail-list-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <a href="#" class="detail-rating-count">47 Avis</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {

            }
            <div class="detail-wrapper">
                <div class="detail-wrapper-header">
                    <h4>Description</h4>
                </div>
                {
                    user?.description ?
                        <div class="detail-wrapper-body" dangerouslySetInnerHTML={{ __html: user?.description || "" }} >

                        </div>

                        :
                        <div class="detail-wrapper-body" style={{ height: "100px", width: "100%", justifyContent: "center", }}>...</div>

                }

            </div>

            <div class="detail-wrapper">
                <div class="detail-wrapper-header">
                    <h4>Services</h4>
                </div>
                <div class="detail-wrapper-body">
                    <ul class="detail-check">
                        <li>Caméras de sécurité</li>
                        <li>Garage attenant</li>
                    </ul>
                </div>

            </div>

            {
                location?.lat && location.lng &&
                <div className="" style={{ height: "450px", width: "500px" }}>
                    <div className="detail-wrapper-header">
                        <h4 style={{ fontWeight: "700", fontSize: "20px" }}> Locatisation</h4>
                        <h3>{user?.address || ""}</h3>
                    </div>
                    <div className="detail-wrapper-body">
                        <Map
                            google={props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={location}
                        >
                            <Marker position={location} />
                        </Map>
                    </div>
                </div>
            }


            <div class="detail-wrapper">
                <div class="detail-wrapper-header">
                    <h4>Commentaires</h4>
                </div>
                <div class="detail-wrapper-body">
                    <ul class="review-list">

                        {
                            reviews.map((review) => {
                                return (
                                    <li>
                                        <div class="reviews-box">
                                            <div class="review-body">
                                                <div class="review-avatar" style={{ display:"flex", justifyContent:"center" ,alignContent:"center",alignItems:"center" }}>
                                                    <MdPerson size={50}/>
                                                </div>
                                                <div class="review-content">
                                                    <div class="review-info">
                                                        <div class="review-comment">
                                                            <div class="review-author">{review.user?.firstname} {review.user?.lastname}</div>
                                                            <div class="review-comment-stars">
                                                            </div>
                                                        </div>
                                                        <div class="review-comment-date">
                                                            <div class="review-date">
                                                                <span>{moment(review?.createdAt).format("DD-MM-YYYY")}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>{review.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div class="detail-wrapper">
                <div class="detail-wrapper-header">
                    <h4>Rediger votre commentaire</h4>
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

                        <div class="col-sm-12">
                            <textarea class="form-control height-110" value={contentReview} onChange={(e) => { setcontentReview(e.target.value) }} placeholder="Dite en plus..."></textarea>
                        </div>
                        <div class="col-sm-12">
                            <button type="button" onClick={sendCreate} class="btn theme-btn">Soumettre</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




// Enveloppe du composant avec GoogleApiWrapper
export default GoogleApiWrapper({
    apiKey: "AIzaSyC3XycRahmXPHzfWZikFEwLiKzkNmTAD9I", // Clé API Google
})(ProfileSideBarLeft);


