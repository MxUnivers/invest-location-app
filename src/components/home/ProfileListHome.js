import React, { useEffect } from 'react'
import { routing } from '../../config/routing'
import { emptyImage, profilePictureDefault } from '../../config/dataApi'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategorysAll } from '../../actions/request/CategoryRequest';
import { fetchUsersAll } from '../../actions/request/UserRequest';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ProfileListHome = () => {

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
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div class="heading">
							<h2 style={{ fontSize: "40px" }}>Les <span>Profile les plus populaire</span></h2>
							<p>Découvrez les meilleures profile, soigneusement sélectionnées pour vous, dans diverses catégories.
							</p>
						</div>
					</div>

				</div>

				<div class="row">

					{categorys && categorys.length > 0 ? (
						<Carousel responsive={responsive} infinite={true} autoPlay={true} transitionDuration={6000} >
							{
								users && users.length > 0 && users.map((item) => {
									return (
										<div class="" style={{ padding: "5px" }}>
											<div class="listing-shot grid-style style-2">
												{/*<div class="listing-badge now-open">Now Open</div> */}
												<a href={`/${routing.profile_view}/${item._id}`}> <div class="listing-shot-img">
													<img src={item && item?.images && item?.images.length > 0 ? item?.images[0] : profilePictureDefault } class="img-responsive" alt="" />
													<span class="approve-listing"><i class="fa fa-check"></i></span>
													<span class="like-listing"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
												</div>
													<div class="listing-shot-caption">
														<h4>{item?.category?.name || ""}</h4>
														<p class="listing-location">{item?.address || ""}</p>
														<a href="#" class="author-img-box"><img src={item?.profilePicture || profilePictureDefault} class="img-responsive author"
															alt="" /></a>
													</div>
												</a>
												{/*<div class="listing-shot-info">
													<div class="row extra">
														<div class="col-md-12">
															<div class="listing-detail-info">
																<span><i class="fa fa-phone" aria-hidden="true"></i> 807-502-5867</span>
																<span><i class="fa fa-globe" aria-hidden="true"></i>
																	www.mysitelink.com</span>
															</div>
														</div>
													</div>
												</div> */}
												<div class="listing-shot-info rating">
													<div class="row extra">
														<div class="col-md-7 col-sm-7 col-xs-6">
															{[...Array(5)].map((_, i) => (
																<i key={i} className={i < Math.floor(item?.rating || 1) ? "color fa fa-star" : "fa fa-star"}
																	aria-hidden="true"></i>
															))}
														</div>
														<div class="col-md-5 col-sm-5 col-xs-6 pull-right">
															<a href={`/${routing.profile_view}/${item._id}`} class="detail-link">Détail</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								})
							}
						</Carousel>
					)
						: (
							<p>Aucune profile.</p>
						)}




				</div>
			</div>
		</section>
	)
}

export default ProfileListHome