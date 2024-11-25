// src/components/Home.js
import React from "react";
import { categoriesSecteurs } from "../config/dataApi";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

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
      image: "assets/img/category/education.jpg",
      location: "Bishop Avenue, New York",
      phone: "807-502-5867",
      website: "www.mysitelink.com",
      rating: 4.5,
      latitude: 40.7128,
      longitude: -74.0060
    },
    {
      id: 2,
      name: "Documentary",
      image: "assets/img/category/documentry.jpg",
      location: "Bishop Avenue, New York",
      phone: "807-502-5867",
      website: "www.mysitelink.com",
      rating: 4.0,
      latitude: 40.7127,
      longitude: -74.0059
    },
    {
      id: 3,
      name: "Technology",
      image: "assets/img/category/food-1.jpg",
      location: "Tech Park, Silicon Valley",
      phone: "123-456-7890",
      website: "www.technologysitelink.com",
      rating: 5.0,
      latitude: 37.7749,
      longitude: -122.4194
    },
    {
      id: 4,
      name: "Healthcare",
      image: "assets/img/category/instructional.jpg",
      location: "Medical Center, Boston",
      phone: "234-567-8901",
      website: "www.healthcarelink.com",
      rating: 4.8,
      latitude: 42.3601,
      longitude: -71.0589
    }
  ];

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

              <div class="col-md-12 col-sm-12 no-padd">
                <h3>What are you looking For?</h3>
                <p>Search by keywords, category, location & filters</p>
              </div>

              <form class="form-verticle">

                <div class="row mrg-0 mrg-bot-15">

                </div>

                <div class="row mrg-0">
                  <div class="col-md-6 col-sm-6">
                    <input type="text" class="form-control left-radius" placeholder="Mot clé" />
                  </div>

                  {/*<div class="col-md-6 col-sm-6">
                <select class="selectpicker form-control" data-live-search="true">
                  <option data-tokens="ketchup mustard">Choose Category</option>
                  <option data-tokens="mustard">Burger, Shake and a Smile</option>
                  <option data-tokens="frosting">Sugar, Spice and all things nice</option>
                </select>
              </div> */}
                </div>

                <div class="row mrg-r-10 mrg-l-10">

                  <div class="col-md-12">
                    <h5 class="mrg-bot-10">More Filters</h5>
                  </div>

                  <div class="col-md-12" style={{ display: "flex", flexWrap: "wrap", justifyContent: "start" }}>

                    {
                      categoriesSecteurs.map((item) => {
                        return (
                          <span class="custom-checkbox d-block">
                            <input type="checkbox" id="select5" />
                            <label for="select5"></label>
                            {item?.name}
                          </span>
                        )
                      })
                    }
                  </div>

                </div>

                <div class="row mrg-0">
                  <div class="col-md-12">
                    <a href="#" class="btn theme-btn" title="Submit Listing">Search Place</a>
                  </div>
                </div>

              </form>

            </div>

            <div class="row mrg-bot-20">
              <div class="col-md-12">
                <h5>70 result Found</h5>
              </div>
            </div>

            <div className="row">
              {listings.map((listing) => (
                <div className="col-md-6 col-sm-12" key={listing.id}>
                  <div className="listing-shot grid-style">
                    <a href="#">
                      <div className="listing-shot-img">
                        <img src={listing.image} className="img-responsive" alt={listing.name} />
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
                          <a href="#" className="detail-link">Open Now</a>
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
              initialCenter={{
                lat: 40.7128, // Centre de la carte (ici, New York)
                lng: -74.0060,
              }}
            >
              {listings.map((listing) => (
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
                />
              ))}

              {/* InfoWindow pour afficher les détails */}
              <InfoWindow
                marker={activeMarker}
                visible={Boolean(activeMarker)}
              >
                <div style={{ width: "200px", height: "200px" }}>
                  <img
                    src={selectedPlace ? selectedPlace.image : ""}
                    alt={selectedPlace ? selectedPlace.name : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius:"50%"
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