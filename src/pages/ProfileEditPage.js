import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importation des styles par défaut de Quill

import { fetchCodePostalsAll } from '../actions/request/CodePostalRequest';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from '../config/baseurl';
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../app/actions/actions';
import { localStorageKeys } from '../config/localvalue';
import { getAndCheckLocalStorage } from '../config/localvalueFuction';
import { UserUpdateById } from '../actions/request/UserRequest';
import { handleImageUploadCloud, handleImageUploadCloudOnly } from '../actions/upload/UploadFileCloud';
import { MdClose } from 'react-icons/md';
import { profilePictureDefault } from '../config/dataApi';
import { fetchCategorysAll } from '../actions/request/CategoryRequest';
import {  fetchRegionysAll } from '../actions/request/RegionRequest';


const ProfileEditPage = () => {


    const dispatch = useDispatch();

    // Récupération des codes postaux et état de chargement
    const codepostals = useSelector((state) => state.codepostals.codepostals);
    const categorys = useSelector((state) => state.categorys.categorys);
    const regions = useSelector((state) => state.regions.regions);
    const loadingUser = useSelector((state) => state.users.loadingUser);
    // Charger les codes postaux au montage du composant
    useEffect(() => {
        dispatch(fetchCategorysAll());
        dispatch(fetchRegionysAll());
        dispatch(fetchCodePostalsAll());
        dispatch(fetchUserByGet())
    }, [dispatch]);


    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        companyName: '',
        email: '',
        phone: '',
        category: '',
        region: '',
        codePostal: '',
        description: "",
        images: [],
        address: '',
        addressPostal: '',
        companyAddress: '',
        profession: '',
        description: '',
        profilePicture: '',
        lat: '',
        lng: '',
        schedule: ""
    });




    function fetchUserByGet() {
        return async (dispatch) => {
            dispatch({ type: FETCH_USER_REQUEST });
            await axios.get(
                `${baseurl.url}/api/v1/users/get_user/${getAndCheckLocalStorage(localStorageKeys.userId)}`

                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    const responseData = response.data.data;
                    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.data });
                    setFormData(
                        {
                            firstname: responseData?.firstname,
                            lastname: responseData?.lastname,
                            email: responseData?.email,
                            phone: responseData?.phone,
                            codePostal: responseData?.codePostal,
                            profilePicture: responseData?.profilePicture,
                            profession: responseData?.profession,
                            address: responseData?.address,
                            schedule: responseData?.schedule,
                            images: responseData?.images,
                            description: responseData?.description,
                            lat: responseData?.lat,
                            lng: responseData?.lng,
                            companyName: responseData?.companyName,
                            category: responseData?.category,
                            region: responseData?.region,
                        }
                    )
                    setPickupLocation(responseData?.address)
                })
                .catch((error) => {
                    dispatch({ type: FETCH_USER_FAILURE, payload: error.message })
                    console.log(error);
                });
        }
    }




    const [schedule, setSchedule] = useState({});
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    // Gestion des changements dans les champs de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };



    // Gestion de l'ajout des images
    const handleImageUpload = async (e) => {
        const files = e.target.files;
        const newImages = await handleImageUploadCloud(files, toast);
        setFormData({
            ...formData,
            images: [...formData.images, ...newImages], // Ajoute les nouvelles images au tableau existant
        });
    };


    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = await handleImageUploadCloudOnly(file, toast);
            setFormData({
                ...formData,
                profilePicture: newImages, // Ajoute les nouvelles images au tableau existant
            });

        }
    };

    // Déclenchement de l'input file quand l'image est cliquée
    const handleImageClick = () => {
        document.getElementById('fileInput').click(); // Déclenche le clic de l'input
    };



    // Mise à jour de la disponibilité (jours et horaires)
    const handleDayClick = (day) => {
        setFormData((prev) => ({
            ...prev,
            schedule: {
                ...prev.schedule,
                [day]: prev.schedule[day] ? undefined : [], // Si déjà sélectionné, on désélectionne
            },
        }));
    };

    const handleTimeToggle = (day, hour) => {
        setFormData((prev) => {
            const updatedDay = prev.schedule[day] || [];
            const updatedHours = updatedDay.includes(hour)
                ? updatedDay.filter((h) => h !== hour) // Retirer l'heure
                : [...updatedDay, hour]; // Ajouter l'heure

            return {
                ...prev,
                schedule: { ...prev.schedule, [day]: updatedHours },
            };
        });
    };










    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupSuggestions, setPickupSuggestions] = useState([]);

    // Obtenir les suggestions de lieu de départ
    const getPlacesByCountryStartLocation = async (query) => {
        try {
            const response = await axios.get(`${baseurl.url}/api/v1/places`, {
                params: { query: query },
            });
            const places = response.data.results;
            return places.map(place => place);
        } catch (error) {
            console.error("Erreur lors de la récupération des lieux : ", error);
        }
    };
    const handlePickupLocationChange = async (e) => {
        const value = e.target.value;
        setPickupLocation(value);
        if (value.length > 2) {
            const suggestions = await getPlacesByCountryStartLocation(value);
            setPickupSuggestions(suggestions);
        } else {
            setPickupSuggestions([]); // Réinitialiser la liste des suggestions
        }
    };
    const handlePickupSelection = (suggestion) => {
        // Met à jour le pickupLocation
        setPickupLocation(`${suggestion.name} - ${suggestion.formatted_address}`);

        // Met à jour newVehicle en une seule fois avec toutes les nouvelles valeurs
        setFormData(prevState => ({
            ...prevState,
            address: `${suggestion.name} - ${suggestion.formatted_address}`,
            lat: suggestion?.geometry?.location?.lat,
            lng: suggestion?.geometry?.location?.lng
        }));
        // Vérifie les valeurs dans suggestion
        // console.log(suggestion?.geometry?.location?.lat); // Affiche la latitude
        // console.log(suggestion?.geometry?.location?.lng); // Affiche la longitude
        // console.log(`${suggestion.name} - ${suggestion.formatted_address}`); // Affiche l'adresse complète

        // Vide les suggestions après la sélection
        setPickupSuggestions([]);
    };

    const handleCleanSugestions = () => {
        setPickupSuggestions([]);
    }










    // Fonction pour valider les champs requis
    const validateForm = () => {
        const { firstname, lastname, email, phone, codePostal, description, address } = formData;
        console.log(formData)
        if (!firstname || !lastname || !email || !phone || !codePostal || !description || !address) {
            return false;
        }
        return true;
    };


    // Fonction pour envoyer les données à l'API
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Tous les champs avec *  doivent être remplis.", { position: "bottom-right" });
            return;
        }
        // toast.success("Tous les champs avec *  doivent être remplis .", { position: "bottom-right" });
        dispatch(UserUpdateById(getAndCheckLocalStorage(localStorageKeys.userId), formData, toast))
    };







    return (
        <>
            <div className="clearfix"></div>

            <section className="title-transparent page-title" style={{ background: "url(assets/img/title-bg.jpg)" }}>
                <div className="container">
                    <div className="title-content">
                        <h1 style={{ fontSize: "35px" }}>Mis ajour de votre profile </h1>
                        <div className="mt-5" style={{ marginTop: "50px" }}>
                            <div>
                                <button type="button" className="btn btn-primary mx-5 text-white">Voire mon profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="clearfix"></div>

            <section onClick={handleCleanSugestions}>
                <div className="container-fluid">
                    <div className="col-md-10 col-sm-12 col-md-offset-1 mob-padd-0">

                        {/* Gestion des créneaux horaires */}

                        <Row>
                            <Col md={6}>
                                <div className="add-listing-box schedule-info mrg-bot-25 padd-bot-30 padd-top-25">
                                    <div className="listing-box-header">
                                        <i className="ti-time theme-cl"></i>
                                        <h3>Disponibilités</h3>
                                        <p>Sélectionnez les jours et créneaux horaires où vous êtes disponibles</p>
                                    </div>

                                    <div className="row">
                                        {daysOfWeek.map((day) => (
                                            <div key={day} className="col-sm-4">
                                                <div className="day-selector">
                                                    <button
                                                        className={`btn ${formData.schedule[day] ? 'btn-primary' : 'btn-default'}`}
                                                        onClick={() => handleDayClick(day)}
                                                    >
                                                        {day}
                                                    </button>
                                                    {formData.schedule[day] && (
                                                        <div className="hour-selector">
                                                            {hours.map((hour) => (
                                                                <button
                                                                    key={hour}
                                                                    className={`btn btn-sm ${formData.schedule[day].includes(hour)
                                                                        ? 'btn-success'
                                                                        : 'btn-outline-secondary'
                                                                        }`}
                                                                    onClick={() => handleTimeToggle(day, hour)}
                                                                >
                                                                    {hour}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="add-listing-box schedule-summary mrg-bot-25 padd-bot-30 padd-top-25">
                                    <div className="listing-box-header">
                                        <i className="ti-calendar theme-cl"></i>
                                        <h3>Résumé des Disponibilités</h3>
                                        <p>Voici un aperçu des créneaux sélectionnés</p>
                                    </div>
                                    <div>
                                        {Object.keys(formData.schedule).length === 0 ? (
                                            <p>Aucune disponibilité sélectionnée.</p>
                                        ) : (
                                            <ul>
                                                {Object.entries(formData.schedule).map(([day, times]) => (
                                                    <li key={day}>
                                                        <strong>{day} :</strong> {times.join(', ')}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        {/* Gestion de la galerie */}
                        <div className="add-listing-box gallery-info mrg-bot-25 padd-bot-30 padd-top-25">
                            <div className="listing-box-header">
                                <i className="ti-gallery theme-cl"></i>
                                <h3>Mettre à jour la Galerie</h3>
                                <p>Ajoutez ou modifiez les photos de votre galerie.</p>
                            </div>

                            <form>
                                <div className="row mrg-r-10 mrg-l-10">
                                    <div className="col-sm-12">
                                        <label>Ajouter des Images</label>
                                        <input
                                            type="file"
                                            name="images"
                                            onChange={handleImageUpload}
                                            className="form-control"
                                            accept="image/*"
                                            multiple
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <label>Galerie Actuelle</label>
                                        <div className="gallery-preview" style={{ display: "flex", flexWrap: "wrap" }}>
                                            {/* Placez ici les images déjà existantes */}
                                            {formData.images.map((image, index) => {
                                                return (
                                                    <li key={index} className="p-1">
                                                        <span className="text-danger text-xs" style={{ cursor: "pointer" }}
                                                            onClick={() => {
                                                                // On supprime l'image correspondant à l'index
                                                                const updatedImages = formData.images.filter((_, i) => i !== index);
                                                                setFormData({ ...formData, images: updatedImages });
                                                            }}
                                                        >
                                                            <MdClose size={30} />
                                                        </span>
                                                        <div>

                                                            <img
                                                                src={image || "https://via.placeholder.com/100"}
                                                                alt="Prévisualisation"
                                                                className="img-thumbnail m-1" style={{ height: "100px", width: "100px" }}
                                                            />
                                                        </div>
                                                    </li>
                                                )
                                            })}


                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Formulaire pour mettre à jour les informations personnelles */}
                        <div className="add-listing-box personal-info mrg-bot-25 padd-bot-30 padd-top-25">
                            <div className="listing-box-header">

                                <i className="ti-user theme-cl"></i>
                                <h3>Informations Personnelles</h3>
                                <p>Mettez à jour vos informations personnelles et coordonnées.</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row mrg-r-10 mrg-l-10">



                                    <div className="col-sm-12" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                                        {/* Image cliquable */}
                                        <img
                                            src={formData?.profilePicture || profilePictureDefault}
                                            alt="Profile"
                                            style={{ height: "100px", width: "100px", borderRadius: "50%", cursor: "pointer" }}
                                            onClick={handleImageClick} // Déclenche le clic de l'input file
                                        />
                                        {/* Input de fichier masqué */}
                                        <input
                                            type="file"
                                            id="fileInput"
                                            style={{ display: "none" }} // Masque l'input de fichier
                                            accept="image/*"
                                            onChange={handleImageChange} // Fonction de gestion du changement d'image
                                        />
                                    </div>


                                    <div className="col-sm-6">
                                        <label>Nom  <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            className="form-control"
                                            value={formData.firstname} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Prénoms  <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            className="form-control"
                                            value={formData.lastname} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Email  <span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Téléphone  <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Indicatif téléphone  <span className="text-danger">*</span></label>
                                        <select
                                            name="codePostal"
                                            className="form-control"
                                            value={formData.codePostal}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="">-- Sélectionnez un indicatif --</option>
                                            {codepostals.map((postal) => (
                                                <option key={postal._id} value={postal._id}>
                                                    +{postal.indicatif} - {postal.country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Adresse ( Entreprise / personnel / Société ) <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={pickupLocation} // Valeur actuelle
                                            onChange={(e) => handlePickupLocationChange(e)} // Gestion des changements
                                        />
                                        {pickupSuggestions && pickupSuggestions.length > 0 && (
                                            <ul className="rounded p-1 border " style={{ position: 'absolute', border: "1px solid", zIndex: 1000, backgroundColor: 'white', maxwidth: "400px", listStyleType: 'none', padding: 0, maxHeight: "200px", overflow: "auto" }}>
                                                {pickupSuggestions.map((suggestion, index) => (
                                                    <li className="border border-b"
                                                        key={index}
                                                        style={{ padding: '5px', cursor: 'pointer', }}
                                                        onClick={() => handlePickupSelection(suggestion)}
                                                    >
                                                        {`${suggestion.name} - ${suggestion.formatted_address}`}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>



                                    <div className="col-sm-6">
                                        <label>Localité  <span className="text-danger">*</span></label>
                                        <select
                                            name="region"
                                            className="form-control"
                                            value={formData.region}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="">-- Sélectionnez un indicatif --</option>
                                            {regions.map((postal) => (
                                                <option key={postal._id} value={postal._id}>
                                                    {postal?.name || ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Catégorie  <span className="text-danger">*</span></label>
                                        <select
                                            name="category"
                                            className="form-control"
                                            value={formData.category}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="">-- Sélectionnez un indicatif --</option>
                                            {categorys.map((postal) => (
                                                <option key={postal._id} value={postal._id}>
                                                    {postal?.name || ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="col-sm-6">
                                        <label>Profession  <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="profession"
                                            className="form-control"
                                            value={formData.profession} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Entreprise  <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            className="form-control"
                                            value={formData.companyName} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>



                                    <div className="col-sm-12 mt-5" style={{ marginBottom:"100px" }}>
                                        <label>Description (Activité ou votre profile )  <span className="text-danger">*</span> </label>
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.description}
                                            onChange={handleDescriptionChange}
                                            placeholder="Ajoutez une description détaillée ici..."
                                            style={{ height: "200px" }}
                                        />
                                    </div>
                                </div>


                                <div className="form-group text-center mx-5 px-5">
                                    {
                                        loadingUser ?
                                            <button type="button" className="btn btn-primary">chargement....</button>
                                            :
                                            <button type="submit" className="btn btn-primary">Enregistrer les Modifications</button>
                                    }

                                </div>
                            </form>
                        </div>
                        {/* Bouton de soumission */}





                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileEditPage;
