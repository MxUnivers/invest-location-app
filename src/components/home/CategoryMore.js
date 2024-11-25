import React from 'react';

const CategoryMore = () => {
    return (
        <section className="py-20 border-b border-gray-200 dark:border-foreground dark:bg-background">
            <div className="container mx-auto lg:p-0 p-5">
                <div className="flex lg:flex-row flex-col lg:text-left text-center flex-wrap items-center justify-between mb-12">
                    <div className="lg:mb-0 mb-4" data-aos="fade-up">
                        <h2 className="text-2xl lg:text-3xl font-medium capitalize mb-2 dark:text-gray-100">
                            Explorer par catégories
                        </h2>
                        <h6 className="text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal">
                            Une sélection d{"'"}annonces vérifiées pour leur qualité
                        </h6>
                    </div>
                    <div data-aos="fade-up">
                        <a href="listing-list.html"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 flex items-center">
                            Découvrir Plus
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 ml-3" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
                        <div className="relative overflow-hidden group rounded-lg group">
                            <img className="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                                src="assets/img/Image/landing-page-image/building.jpg" alt="" />
                            <div
                                className="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                                <h5 className="text-2xl font-medium mb-1 text-white">
                                    Appartement
                                </h5>
                                <p className="text-base font-normal text-gray-100">
                                    Plus de 15 appartements disponibles
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
                        <div className="relative overflow-hidden group rounded-lg group">
                            <img className="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                                src="assets/img/Image/landing-page-image/concert-2.jpg" alt="" />
                            <div
                                className="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                                <h5 className="text-2xl font-medium mb-1 text-white">Événement</h5>
                                <p className="text-base font-normal text-gray-100">
                                    Plus de 15 événements disponibles
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
                        <div className="relative overflow-hidden group rounded-lg group">
                            <img className="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                                src="assets/img/Image/landing-page-image/restaurant.jpg" alt="" />
                            <div
                                className="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                                <h5 className="text-2xl font-medium mb-1 text-white">Restaurant</h5>
                                <p className="text-base font-normal text-gray-100">
                                    Plus de 15 restaurants disponibles
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CategoryMore;
