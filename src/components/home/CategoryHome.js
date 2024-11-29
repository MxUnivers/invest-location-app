// src/components/Home.js
import React, { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { routing } from "../../config/routing";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorysAll } from "../../actions/request/CategoryRequest";
import { fetchUsersAll } from "../../actions/request/UserRequest";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CategoryHome() {


    const dispatch = useDispatch();


    // Récupération des codes postaux et état de chargement
    const users = useSelector((state) => state.users.users);
    const categorys = useSelector((state) => state.categorys.categorys);

    // Charger les codes postaux au montage du composant
    useEffect(() => {
        dispatch(fetchCategorysAll());
        dispatch(fetchUsersAll());
        // dispatch(fetchUserByGet(getAndCheckLocalStorage(localStorageKeys.userId)))
    }, [dispatch]);


    // Configuration du carrousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Nombre d'éléments visibles sur grand écran
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2, // Nombre d'éléments visibles sur tablette
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1, // Nombre d'éléments visibles sur mobile
        },
    };

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="heading">
                            <h2 style={{ fontSize: "40px" }}>Les <span>Catégories les Plus Populaires</span></h2>
                            <p>Explorez les catégories les plus prisées et trouvez ce que vous cherchez parmi les meilleures sélections.</p>
                        </div>
                    </div>
                </div>


                <div className="row">

                    {categorys && categorys.length > 0 ? (
                        <Carousel responsive={responsive} infinite={true} autoPlay={true}  transitionDuration={6000}>
                            {categorys.map((category, index) => (
                                <div className="" style={{ padding:"5px" }}>
                                    <div className="category-box-full style-1">
                                        <a href={`/${routing.search}`} className="category-boxs"
                                            data-background-image="assets/img/category/art.jpg" tabindex="0">
                                            <div className="category-box-content">
                                                <h3>{category?.name || ""}</h3>
                                               {/* <span>70 annonces</span> */}
                                            </div>
                                            <span className="category-box-btn">Explorer</span>
                                            <div className="category-box-bg"
                                                style={{ backgroundImage: `url(${category && category.coverPicture ? category.coverPicture : ""})` }}></div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <p>Aucune catégorie disponible.</p>
                    )}




                </div>
            </div>
        </section>
    );
}

export default CategoryHome;
