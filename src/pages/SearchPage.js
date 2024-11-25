// src/components/Home.js
import React, { useEffect, useState } from "react";
import { categoriesSecteurs, profilePictureDefault, villesCoteDIvoire } from "../config/dataApi";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { routing } from "../config/routing";

// Remplacez votre propre clé API ici
const mapStyles = {
  width: "100%",
  height: "600px",
};

function SearchPage(props) {



  const listings = [
    {
      id: 1,
      name: "Education",
      category: "Éducation",
      locality: "Abidjan",
      image: "assets/img/category/education.jpg",
      location: "Cocody, Abidjan",
      phone: "225-20-123-456",
      website: "www.educationci.com",
      rating: 4.5,
      latitude: 5.3572,
      longitude: -3.9396
    },
    {
      id: 2,
      name: "Documentary",
      category: "Média",
      locality: "Abidjan",
      image: "assets/img/category/documentry.jpg",
      location: "Plateau, Abidjan",
      phone: "225-20-234-567",
      website: "www.documentaryci.com",
      rating: 4.0,
      latitude: 5.3165,
      longitude: -4.0271
    },
    {
      id: 3,
      name: "Technology",
      category: "Technologie",
      locality: "Abidjan",
      image: profilePictureDefault,
      location: "Marcory, Abidjan",
      phone: "225-21-456-789",
      website: "www.techci.com",
      rating: 5.0,
      latitude: 5.306,
      longitude: -3.975
    },
    {
      id: 4,
      name: "Healthcare",
      category: "Santé",
      locality: "Abidjan",
      image: profilePictureDefault,
      location: "Treichville, Abidjan",
      phone: "225-21-345-678",
      website: "www.healthcareci.com",
      rating: 4.8,
      latitude: 5.3097,
      longitude: -4.0131
    },
    {
      id: 5,
      name: "Agriculture",
      category: "Agriculture",
      locality: "Abidjan",
      image: profilePictureDefault,
      location: "Yopougon, Abidjan",
      phone: "225-23-789-012",
      website: "www.agricultureci.com",
      rating: 4.6,
      latitude: 5.328,
      longitude: -4.081
    },
  ];



  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");

  useEffect(() => {
    // Initialisation des profils filtrés
    setFilteredProfiles(listings);
  }, []);

  const handleSearch = () => {
    const filtered = listings.filter((listing) => {
      const matchesSearchTerm =
        searchTerm === "" ||
        listing.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || listing.category === selectedCategory;
      const matchesLocality =
        selectedLocality === "" || listing.locality === selectedLocality;

      return matchesSearchTerm && matchesCategory && matchesLocality;
    });

    setFilteredProfiles(filtered);
  };



  const [activeMarker, setActiveMarker] = React.useState(null);
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
  };


  return (
    <>

      <div class="clearfix"></div>

      <section>
        <div class="container-fluid">
          <div class="col-md-6 col-sm-5">

            <div class="row">

              <div className="col-md-12 col-sm-12 no-padd">
                <h3 style={{ fontSize: "35px" }}>Que recherchez-vous ?</h3>
                <p>Cherchez par mots-clés, catégorie, localisation et filtres</p>
              </div>

              <form class="form-verticle">

                <div class="row mrg-0 mrg-bot-15">

                </div>

                <div class="row mrg-r-10 mrg-l-10">

                  <div class="col-md-12">
                    <h5 class="mrg-bot-10">Catégories</h5>
                  </div>

                  <div className="col-md-4 col-sm-4 no-padd">
                    <input
                      type="text"
                      className="form-control left-radius right-br"
                      placeholder="Mot clé"
                      value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 no-padd">
                    <select
                      className="selectpicker form-control"
                      data-live-search="true"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option data-tokens="ketchup mustard">
                        Choisir localité
                      </option>
                      {
                        villesCoteDIvoire.map((item) => {
                          return (
                            <option value={item} data-tokens="ketchup mustard">
                              {item}
                            </option>
                          )
                        })
                      }

                    </select>
                  </div>
                  <div className="col-md-3 col-sm-3 no-padd">
                    <select
                      className="selectpicker form-control"
                      data-live-search="true"
                      onChange={(e) => setSelectedLocality(e.target.value)}
                    >
                      <option data-tokens="ketchup mustard">
                        Choisir categorie
                      </option>
                      {
                        categoriesSecteurs.map((item) => {
                          return (
                            <option value={item.value} data-tokens="ketchup mustard">
                              {item.name}
                            </option>
                          )
                        })
                      }

                    </select>
                  </div>

                </div>

                <div class="row mrg-0">
                  <div class="col-md-12">
                    <a href="#" class="btn theme-btn" title="Submit Listing" onClick={handleSearch}>Rechercher</a>
                  </div>
                </div>

              </form>

            </div>

            <div class="row mrg-bot-20">
              <div class="col-md-12">
                <h5>{filteredProfiles.length} resultat trouvés</h5>
              </div>
            </div>

            <div className="row">
            {filteredProfiles.map((listing) => (
                <div className="col-md-6 col-sm-12"  onClick={() => {
                  window.location.href = `/${routing.profile_view}`;
                }}>
                  <div className="listing-shot grid-style">
                    <a href="#">
                      <div className="listing-shot-img">
                        <img src={listing.image || profilePictureDefault} className="img-responsive cover" alt={listing.name} />
                      </div>
                      <div className="listing-shot-caption">
                        <h4>{listing.name}</h4>
                        <p className="listing-location">{listing.location}</p>
                        <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                      </div>
                    </a>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true"></i> {listing.phone}</span>
                            <span><i className="fa fa-globe" aria-hidden="true"></i> {listing.website}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={i < Math.floor(listing.rating) ? "color fa fa-star" : "fa fa-star"}
                              aria-hidden="true"></i>
                          ))}
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href={`/${routing.profile_view}`} className="detail-link">Detail</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/*map*/}
          </div>
          <div class="col-md-6 col-sm-7 ">
            <Map
              google={props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 5.345317, lng: -4.024429 }}
            >
              {filteredProfiles.map((listing) => (
                <Marker
                  key={listing.id}
                  position={{
                    lat: listing.latitude,
                    lng: listing.longitude,
                  }}
                  title={listing.name}
                  onClick={onMarkerClick}
                  
                  name={listing.name}
                  image={listing.image}
                  icon={{
                    url: profilePictureDefault,
                    scaledSize: new props.google.maps.Size(40, 40), // Taille personnalisée
                  }}


                />
              ))}

              {/* InfoWindow pour afficher les détails */}
              <InfoWindow
                marker={activeMarker}
                visible={Boolean(activeMarker)}
              >
                <div style={{ width: "200px", height: "200px" }}>
                  <img
                    src={selectedPlace?.image ||profilePictureDefault}
                    alt={selectedPlace ? selectedPlace.name : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%"
                    }}
                  />
                  <h4>{selectedPlace ? selectedPlace.name : ""}</h4>
                  <p>{selectedPlace ? selectedPlace.location : ""}</p>
                  <p>{selectedPlace ? selectedPlace.phone : ""}</p>
                  <p>
                    <a href={selectedPlace ? selectedPlace?.website : "#"} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </p>
                </div>
              </InfoWindow>
            </Map>
          </div>

        </div>
      </section>

    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC3XycRahmXPHzfWZikFEwLiKzkNmTAD9I", // Clé API Google
})(SearchPage);