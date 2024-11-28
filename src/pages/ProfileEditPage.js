import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importation des styles par défaut de Quill

import { fetchCodePostalsAll } from '../actions/request/CodePostalRequest';


const ProfileEditPage = () => {


    const dispatch = useDispatch();

    // Récupération des codes postaux et état de chargement
    const codepostals = useSelector((state) => state.codepostals.codepostals);
    const loadingUser = useSelector((state) => state.users.loadingUser);
    // Charger les codes postaux au montage du composant
    useEffect(() => {
        dispatch(fetchCodePostalsAll());
    }, [dispatch]);


    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        companyName: '',
        email: '',
        phone: '',
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
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file)); // Crée des URLs pour prévisualiser
        setFormData({
            ...formData,
            images: [...formData.images, ...newImages], // Ajoute les nouvelles images au tableau existant
        });
    };

    // Gestion des horaires
    const handleDayClick = (day) => {

        setSchedule((prev) => ({
            ...prev,
            [day]: prev[day] || [], // Initialise un tableau vide si non défini
        }));
        setFormData({ ...formData, schedule: schedule })
    };

    const handleTimeToggle = (day, hour) => {
        setSchedule((prev) => {
            const updatedDay = prev[day] || [];
            const updatedHours = updatedDay.includes(hour)
                ? updatedDay.filter((h) => h !== hour) // Retirer l'heure
                : [...updatedDay, hour]; // Ajouter l'heure

            return { ...prev, [day]: updatedHours };
        });

        setFormData({ ...formData, schedule: schedule })
    };


    return (
        <>
            <div className="clearfix"></div>

            <section className="title-transparent page-title" style={{ background: "url(assets/img/title-bg.jpg)" }}>
                <div className="container">
                    <div className="title-content">
                        <h1>Mis ajour de votre profile de disponibilite</h1>
                        <div className="breadcrumbs">
                            <a href="#">Accueil</a>
                            <span className="gt3_breadcrumb_divider"></span>
                            <span className="current">Ajouter une Annonce</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>

            <section>
                <div className="container-fluid">
                    <div className="col-md-10 col-sm-12 col-md-offset-1 mob-padd-0">

                        {/* Gestion des créneaux horaires */}

                        <Row>
                            <Col md={6} >
                                <div className="add-listing-box schedule-info mrg-bot-25 padd-bot-30 padd-top-25">
                                    <div className="listing-box-header">
                                        <i className="ti-time theme-cl"></i>
                                        <h3>Disponibilités</h3>
                                        <p>Sélectionnez les jours et créneaux horaires où vous êtes disponibles</p>
                                    </div>

                                    <div className="row">
                                        {/* Liste des jours */}
                                        {daysOfWeek.map((day) => (
                                            <div key={day} className="col-sm-4">
                                                <div className="day-selector">
                                                    <button
                                                        className={`btn ${schedule[day] ? 'btn-primary' : 'btn-default'}`}
                                                        onClick={() => handleDayClick(day)}
                                                    >
                                                        {day}
                                                    </button>
                                                    {schedule[day] && (
                                                        <div className="hour-selector">
                                                            {hours.map((hour) => (
                                                                <button
                                                                    key={hour}
                                                                    className={`btn btn-sm ${schedule[day].includes(hour)
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

                                {/* Affichage du planning */}
                                <div className="add-listing-box schedule-summary mrg-bot-25 padd-bot-30 padd-top-25">
                                    <div className="listing-box-header">
                                        <i className="ti-calendar theme-cl"></i>
                                        <h3>Résumé des Disponibilités</h3>
                                        <p>Voici un aperçu des créneaux sélectionnés</p>
                                    </div>
                                    <div>
                                        {Object.keys(schedule).length === 0 ? (
                                            <p>Aucune disponibilité sélectionnée.</p>
                                        ) : (
                                            <ul>
                                                {Object.entries(schedule).map(([day, times]) => (
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
                                        <div className="gallery-preview">
                                            {/* Placez ici les images déjà existantes */}
                                            {formData.images.map((image, index) => {
                                                return (
                                                    <img
                                                        src={image || "https://via.placeholder.com/100"}
                                                        alt="Prévisualisation"
                                                        className="img-thumbnail m-1" style={{ height: "100px", width: "100px" }}
                                                    />
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

                            <form>
                                <div className="row mrg-r-10 mrg-l-10">
                                    <div className="col-sm-6">
                                        <label>Nom</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            className="form-control"
                                            value={formData.firstname} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Prénoms</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            className="form-control"
                                            value={formData.lastname} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-6">
                                        <label>Indicatif téléphone</label>
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
                                        <label>Adresse</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={formData.address} // Valeur actuelle
                                            onChange={(e) => handleChange(e)} // Gestion des changements
                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <label>Description </label>
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.description}
                                            onChange={handleDescriptionChange}
                                            placeholder="Ajoutez une description détaillée ici..."
                                            style={{ height: "150px" }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Bouton de soumission */}
                        <div className="form-group text-center">
                            <button className="btn btn-primary">Enregistrer les Modifications</button>
                        </div>




                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileEditPage;
