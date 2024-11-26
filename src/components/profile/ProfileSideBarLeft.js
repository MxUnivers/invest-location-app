import React from 'react'
import { MdStarBorder, MdStarRate } from "react-icons/md";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { profilePictureDefault } from '../../config/dataApi';

// Remplacez par votre propre clé API Google Maps
const mapStyles = {
    width: "100%",
    height: "400px"
};


export const ProfileSideBarLeft = (props) => {


    const location = {
        lat: 5.3435, // Latitude de Cocody
        lng: -4.0125, // Longitude de Cocody
    };


    const reviews = [
        {
            author: "Lucas Dupont",
            avatar: profilePictureDefault,
            stars: 4, // Nombre d'étoiles
            date: "il y a 4 semaines",
            content: "Le service est excellent et très réactif. L'équipe a répondu à toutes mes questions rapidement. Cependant, j'ai rencontré quelques problèmes techniques au début, mais ils ont été résolus rapidement.",
        },
        {
            author: "Sophie Martin",
            avatar: profilePictureDefault,
            stars: 3,
            date: "il y a 3 semaines",
            content: "Le produit est bon dans l'ensemble, mais il y a quelques améliorations possibles. Je recommande quand même pour ceux qui cherchent une solution simple et efficace.",
        },
        {
            author: "Paul Leblanc",
            avatar: profilePictureDefault,
            stars: 5,
            date: "il y a 2 semaines",
            content: "Une expérience parfaite ! Tout a été conforme à mes attentes, et j'ai apprécié le suivi après-vente. Je recommande vivement ce service à tout le monde.",
        }
    ];



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
                        <h3>Fatihoune group <span class="mrg-l-5 category-tag">Immobilier & Construction & Décoration.</span></h3>
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
                                <a href="#" class="detail-rating-count">47 Avis</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-wrapper">
                <div class="detail-wrapper-header">
                    <h4>Description</h4>
                </div>
                <div class="detail-wrapper-body">
                    <p>Lucas est un investisseur passionné par l'innovation et le développement durable. Fort d'une expérience
                        de plusieurs années dans le secteur des start-ups et des entreprises technologiques, il a su repérer des
                        opportunités stratégiques tout en accompagnant de jeunes entreprises vers une croissance rapide. Sa
                        vision à long terme et son expertise dans l'analyse des risques font de lui un acteur clé pour des
                        investissements réussis et des partenariats solides.</p>
                    <p>Sa philosophie est d'agir avec intégrité, en prenant en compte non seulement les rendements financiers,
                        mais aussi les impacts sociaux et environnementaux des projets dans lesquels il choisit de s'impliquer.
                        Toujours à l'affût de nouvelles tendances, Lucas est reconnu pour sa capacité à transformer des idées
                        audacieuses en succès tangibles, soutenant ainsi l'émergence de nouvelles technologies et de modèles
                        d'affaires innovants.</p>
                </div>
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

            <div className=""style={{ height:"450px",width:"400px" }}>
                <div className="detail-wrapper-header">
                    <h4>Location</h4>
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
                                                <div class="review-avatar">
                                                    <img alt={review.author} src={review.avatar} class="avatar avatar-140 photo" />
                                                </div>
                                                <div class="review-content">
                                                    <div class="review-info">
                                                        <div class="review-comment">
                                                            <div class="review-author">{review.author}</div>
                                                            <div class="review-comment-stars">

                                                            </div>
                                                        </div>
                                                        <div class="review-comment-date">
                                                            <div class="review-date">
                                                                <span>{review.date}</span>
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
                        <div class="col-sm-6">
                            <input type="text" class="form-control" placeholder="Nom complet*" />
                        </div>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" placeholder="Addresse Email*" />
                        </div>
                        <div class="col-sm-12">
                            <textarea class="form-control height-110" placeholder="Dite en plus..."></textarea>
                        </div>
                        <div class="col-sm-12">
                            <button type="button" class="btn theme-btn">Soumettre</button>
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
    

