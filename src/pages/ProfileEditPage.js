import React, { useState } from 'react';

const ProfileEditPage = () => {
    const [schedule, setSchedule] = useState({});
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    const handleDayClick = (day) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: prev[day] || [], // Initialise un tableau vide si non défini
        }));
    };

    const handleTimeToggle = (day, hour) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: prev[day]?.includes(hour)
                ? prev[day].filter((h) => h !== hour) // Retirer l'heure si déjà sélectionnée
                : [...(prev[day] || []), hour], // Ajouter l'heure si non sélectionnée
        }));
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
                                            className="form-control"
                                            accept="image/*"
                                            multiple
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <label>Galerie Actuelle</label>
                                        <div className="gallery-preview">
                                            {/* Placez ici les images déjà existantes */}
                                            <img
                                                src="https://via.placeholder.com/100"
                                                alt="Prévisualisation"
                                                className="img-thumbnail m-1"
                                            />
                                            <img
                                                src="https://via.placeholder.com/100"
                                                alt="Prévisualisation"
                                                className="img-thumbnail m-1"
                                            />
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
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Téléphone</label>
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Adresse</label>
                                        <input type="text" className="form-control" />
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
