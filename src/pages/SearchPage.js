// src/components/Home.js
import React, { useEffect, useState } from "react";
import { profilePictureDefault } from "../config/dataApi";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { routing } from "../config/routing";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorysAll } from "../actions/request/CategoryRequest";
import { fetchRegionysAll } from "../actions/request/RegionRequest";
import { fetchUsersAll } from "../actions/request/UserRequest";
import { FETCH_USERS_SUCCESS } from "../app/actions/actions";

// Remplacez votre propre clé API ici
const mapStyles = {
  width: "100%",
  height: "600px",
};

function SearchPage(props) {


  const dispatch = useDispatch();
  const categoriesSecteurs = useSelector((state) => state.categorys.categorys)
  const villesCoteDIvoire = useSelector((state) => state.regions.regions)
  const listings2 = useSelector((state) => state.users.users2);
  const listings = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsersAll());
    dispatch(fetchCategorysAll());
    dispatch(fetchRegionysAll());
  }, [dispatch])




  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");



  const handleSearch = () => {
    const filtered = listings2.filter((listing) => {
      const matchesSearchTerm =
        searchTerm === "" ||
        listing.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || listing.category?._id === selectedCategory;
      const matchesLocality =
        selectedLocality === "" || listing.locality?._id === selectedLocality;

      return matchesSearchTerm && matchesCategory && matchesLocality;
    });

    dispatch({ type: FETCH_USERS_SUCCESS, payload: filtered });
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
                  <div className="col-sm-3">
                    <label>Localité  <span className="text-danger">*</span></label>
                    <select
                      name="region"
                      className="form-control"
                      onChange={(e) => setSelectedLocality(e.target.value)}
                    >
                      <option value="">-- Localité --</option>
                      {villesCoteDIvoire.map((postal) => (
                        <option key={postal._id} value={postal._id}>
                          {postal?.name || ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm-3">
                    <label>Catégorie  <span className="text-danger">*</span></label>
                    <select
                      name="category"
                      className="form-control"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">-- Catéogorie --</option>
                      {categoriesSecteurs.map((postal) => (
                        <option key={postal._id} value={postal._id}>
                          {postal?.name || ""}
                        </option>
                      ))}
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
                <h5>{listings.length} resultat trouvés</h5>
              </div>
            </div>

            <div className="row">
              {listings.map((listing) => (
                <div className="col-md-6 col-sm-12" onClick={() => {
                  window.location.href = `/${routing.profile_view}/${listing._id}`;
                }}>
                  <div className="listing-shot grid-style">
                    <a href="#">
                      <div className="listing-shot-img">
                        <img src={listing.profilePicture || profilePictureDefault} className="img-responsive cover" alt={listing.name} />
                      </div>
                      <div className="listing-shot-caption">
                        <h4>{listing.name}</h4>
                        <p className="listing-location">{listing?.address}</p>
                        <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                      </div>
                    </a>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true"></i> {listing?.codePostal?.indicatif || ""}  {listing?.phone || ""}</span>
                            {
                              listing?.category?.name &&
                              <span><i className="fa fa-globe" aria-hidden="true"></i> {listing?.category?.name || ""}</span>
                            }

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={i < Math.floor(listing?.rating || 1) ? "color fa fa-star" : "fa fa-star"}
                              aria-hidden="true"></i>
                          ))}
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <button type="button" className="detail-link btn btn-primary">Detail</button>
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
              {listings.map((listing) => (
                <Marker
                  key={listing._id}
                  position={{
                    lat: listing?.lat,
                    lng: listing?.lng,
                  }}
                  title={listing?.firstname}
                  onClick={onMarkerClick}

                  name={listing?.firstname && listing?.lastname}
                  image={listing?.profilePicture || profilePictureDefault}
                  icon={{
                    url: listing?.profilePicture || profilePictureDefault,
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
                    src={selectedPlace?.profilePicture || profilePictureDefault}
                    alt={selectedPlace ? selectedPlace?.firstname : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%"
                    }}
                  />
                  <h4>{selectedPlace ? selectedPlace?.companyName : ""}</h4>
                  <p>{selectedPlace ? selectedPlace?.address : ""}</p>
                  <p> {selectedPlace ? selectedPlace?.codePostal?.indicatif : ""} {selectedPlace ? selectedPlace.phone : ""}</p>
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