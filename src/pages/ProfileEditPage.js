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
                                                            className={`btn btn-sm ${
                                                                schedule[day].includes(hour)
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileEditPage;
