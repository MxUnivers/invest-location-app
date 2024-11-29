import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { profilePictureDefault } from "../../config/dataApi";
import { routing } from "../../config/routing";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAll } from "../../actions/request/UserRequest";
import { fetchCategorysAll } from "../../actions/request/CategoryRequest";
import { fetchRegionysAll } from "../../actions/request/RegionRequest";

export function ProfileMapList({ google }) {

  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.users.users);

  const categoriesSecteurs = useSelector((state) => state.categorys.categorys)
  const villesCoteDIvoire = useSelector((state) => state.regions.regions)

  useEffect(() => {
    dispatch(fetchUsersAll());
    dispatch(fetchCategorysAll());
    dispatch(fetchRegionysAll());
  }, [dispatch])



  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");




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
    window.location.href = `/${routing.profile_view}/` + profile?._id
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
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 5.345317, lng: -4.024429 }}
            >
              {/* Ajout des marqueurs */}
              {profiles.map((profile) => (
                <Marker
                  position={{
                    lat: profile?.lat,
                    lng: profile?.lng,
                  }}


                  onClick={() => onMarkerClick(profile)}
                  icon={{
                    url: profile.profilePicture || profilePictureDefault,
                    scaledSize: new google.maps.Size(40, 40), // Taille personnalisée
                  }}
                />
              ))}

              {/* InfoWindow pour le profil sélectionné */}
              {selectedProfile && (
                <InfoWindow
                  position={{
                    lat: selectedProfile?.lat,
                    lng: selectedProfile?.lng,
                  }}
                  visible={showingInfoWindow}
                  onClose={onClose}
                >
                  <div className="text-center">
                    <img
                      src={selectedProfile.profilePicture || profilePictureDefault}
                      alt={`${selectedProfile.firstname} ${selectedProfile.firstname}`}
                      className="w-16 h-16 rounded-full mx-auto mb-2 shadow"
                    />
                    <h3 className="font-bold">
                      {selectedProfile.firstname} {selectedProfile.firstname}
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


            <div className="col-sm-4">
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

            <div className="col-sm-4">
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
            <div className="col-md-2 col-sm-2 no-padd">
              <button onClick={() => { window.location.href = `/${routing.search}` }}
                type="button"
                className="btn theme-btn btn-default height-50 full-width"
              >
                Rechercher
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
