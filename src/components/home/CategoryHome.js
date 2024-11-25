// src/components/Home.js
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { routing } from "../../config/routing";

function CategoryHome() {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="heading">
                            <h2 style={{ fontSize:"40px" }}>Les <span>Catégories les Plus Populaires</span></h2>
                            <p>Explorez les catégories les plus prisées et trouvez ce que vous cherchez parmi les meilleures sélections.</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="category-box-full style-1">
                            <a href={`/${routing.search}`} className="category-boxs"
                                data-background-image="assets/img/category/art.jpg" tabindex="0">
                                <div className="category-box-content">
                                    <h3>Art & Design</h3>
                                    <span>70 annonces</span>
                                </div>
                                <span className="category-box-btn">Explorer</span>
                                <div className="category-box-bg"
                                    style={{ backgroundImage: `url(assets/img/category/art.jpg)` }}></div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="category-box-full style-1">
                            <a href={`/${routing.search}`} className="category-boxs"
                                data-background-image="assets/img/category/education.jpg" tabindex="0">
                                <div className="category-box-content">
                                    <h3>Éducation</h3>
                                    <span>40 annonces</span>
                                </div>
                                <span className="category-box-btn">Explorer</span>
                                <div className="category-box-bg"
                                    style={{ backgroundImage: `url(assets/img/category/education.jpg)` }}></div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="category-box-full style-1">
                            <a href={`/${routing.search}`} className="category-boxs"
                                data-background-image="assets/img/category/documentry.jpg" tabindex="0">
                                <div className="category-box-content">
                                    <h3>Documentaire</h3>
                                    <span>110 annonces</span>
                                </div>
                                <span className="category-box-btn">Explorer</span>
                                <div className="category-box-bg"
                                    style={{ backgroundImage: `url(assets/img/category/documentry-2.jpg)` }}></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CategoryHome;
