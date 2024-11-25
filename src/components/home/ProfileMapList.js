import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { profiles } from "../../config/dataApi";

export function ProfileMapList({ google }) {
  const [selectedProfile, setSelectedProfile] = React.useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = React.useState(false);

  // Style de la carte
  const mapStyles = {
    width: "100%",
    height: "600px",
  };

  // Fonction pour gérer le clic sur un marqueur
  const onMarkerClick = (profile, marker) => {
    setSelectedProfile(profile);
    setShowingInfoWindow(true);
  };

  // Fonction pour fermer le popup d'info
  const onClose = () => {
    setSelectedProfile(null);
    setShowingInfoWindow(false);
  };

  return (
    <>
      <div className="clearfix"></div>

      {/* Carte Google avec les marqueurs */}
      <div className="home-map">
        <div className="map-container fw-map">
          <div id="main-full-map">
            <Map
              google={google}
              zoom={2}
              style={mapStyles}
              initialCenter={{ lat: 20, lng: 0 }}
            >
              {/* Ajout des marqueurs */}
              {profiles.map((profile) => (
                <Marker
                  key={profile.id}
                  position={{
                    lat: profile.location.latitude,
                    lng: profile.location.longitude,
                  }}
                  onClick={() => onMarkerClick(profile)}
                  icon={{
                    url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    scaledSize: new google.maps.Size(40, 40), // Taille personnalisée
                  }}
                />
              ))}

              {/* InfoWindow pour le profil sélectionné */}
              {selectedProfile && (
                <InfoWindow
                  position={{
                    lat: selectedProfile.location.latitude,
                    lng: selectedProfile.location.longitude,
                  }}
                  visible={showingInfoWindow}
                  onClose={onClose}
                >
                  <div className="text-center">
                    <img
                      src={selectedProfile.photo}
                      alt={`${selectedProfile.firstName} ${selectedProfile.lastName}`}
                      className="w-16 h-16 rounded-full mx-auto mb-2 shadow"
                    />
                    <h3 className="font-bold">
                      {selectedProfile.firstName} {selectedProfile.lastName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedProfile.profession}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      {selectedProfile.category}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      {/* Formulaire de recherche (facultatif) */}
      <div className="search-inner abs-map-search">
        <div className="container">
          <form className="form-verticle">
            <div className="col-md-4 col-sm-4 no-padd">
              <input
                type="text"
                className="form-control left-radius right-br"
                placeholder="Keywords.."
              />
            </div>
            <div className="col-md-3 col-sm-3 no-padd">
              <input
                type="text"
                className="form-control right-br"
                placeholder="Location.."
              />
            </div>
            <div className="col-md-3 col-sm-3 no-padd">
              <select
                className="selectpicker form-control"
                data-live-search="true"
              >
                <option data-tokens="ketchup mustard">
                  Choose Category
                </option>
                <option data-tokens="mustard">
                  Burger, Shake and a Smile
                </option>
                <option data-tokens="frosting">
                  Sugar, Spice and all things nice
                </option>
              </select>
            </div>
            <div className="col-md-2 col-sm-2 no-padd">
              <button
                type="button"
                className="btn theme-btn btn-default height-50 full-width"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Enveloppe du composant avec GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyC3XycRahmXPHzfWZikFEwLiKzkNmTAD9I", // Clé API Google
})(ProfileMapList);
