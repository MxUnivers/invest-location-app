import React from 'react'
import { routing } from '../../config/routing'
import { profilePictureDefault } from '../../config/dataApi'

const ProfileListHome = () => {
	return (
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div class="heading">
							<h2 style={{ fontSize: "40px" }}>Les <span>Annonces les Plus Populaires</span></h2>
							<p>Découvrez les meilleures offres, soigneusement sélectionnées pour vous, dans diverses catégories.
							</p>
						</div>
					</div>

				</div>

				<div class="row">

					<div class="col-md-4 col-sm-6">
						<div class="listing-shot grid-style style-2">
							{/*<div class="listing-badge now-open">Now Open</div> */}
							<a href={`/${routing.profile_view}`}> <div class="listing-shot-img">
								<img src="assets/img/category/art.jpg" class="img-responsive" alt="" />
								<span class="approve-listing"><i class="fa fa-check"></i></span>
								<span class="like-listing"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
							</div>
								<div class="listing-shot-caption">
									<h4>Art & Design</h4>
									<p class="listing-location">Bishop Avenue, New York</p>
									<a href="#" class="author-img-box"><img src={profilePictureDefault} class="img-responsive author"
										alt="" /></a>
								</div>
							</a>
							<div class="listing-shot-info">
								<div class="row extra">
									<div class="col-md-12">
										<div class="listing-detail-info">
											<span><i class="fa fa-phone" aria-hidden="true"></i> 807-502-5867</span>
											<span><i class="fa fa-globe" aria-hidden="true"></i>
												www.mysitelink.com</span>
										</div>
									</div>
								</div>
							</div>
							<div class="listing-shot-info rating">
								<div class="row extra">
									<div class="col-md-7 col-sm-7 col-xs-6">
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star-half-o" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
									</div>
									<div class="col-md-5 col-sm-5 col-xs-6 pull-right">
										<a href={`/${routing.profile_view}`} class="detail-link">Détail</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="listing-shot grid-style style-2">
							<a href={`/${routing.profile_view}`}> <div class="listing-shot-img">
								<img src="assets/img/category/education.jpg" class="img-responsive" alt="" />
								<span class="like-listing"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
							</div>
								<div class="listing-shot-caption">
									<h4>Education</h4>
									<p class="listing-location">Bishop Avenue, New York</p>
									<a href="#" class="author-img-box"><img src={profilePictureDefault} class="img-responsive author"
										alt="" /></a>
								</div>
							</a>
							<div class="listing-shot-info">
								<div class="row extra">
									<div class="col-md-12">
										<div class="listing-detail-info">
											<span><i class="fa fa-phone" aria-hidden="true"></i> 807-502-5867</span>
											<span><i class="fa fa-globe" aria-hidden="true"></i>
												www.mysitelink.com</span>
										</div>
									</div>
								</div>
							</div>
							<div class="listing-shot-info rating">
								<div class="row extra">
									<div class="col-md-7 col-sm-7 col-xs-6">
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star-half-o" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
									</div>
									<div class="col-md-5 col-sm-5 col-xs-6 pull-right">
										<a href={`/${routing.profile_view}`} class="detail-link">Détail</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="listing-shot grid-style style-2">
							<a href={`/${routing.profile_view}`}> <div class="listing-shot-img">
								<img src="assets/img/category/documentry.jpg" class="img-responsive" alt="" />
								<span class="approve-listing"><i class="fa fa-check"></i></span>
								<span class="like-listing"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
							</div>
								<div class="listing-shot-caption">
									<h4>Documentary</h4>
									<p class="listing-location">Bishop Avenue, New York</p>
									<a href="#" class="author-img-box"><img src={profilePictureDefault} class="img-responsive author"
										alt="" /></a>
								</div>
							</a>
							<div class="listing-shot-info">
								<div class="row extra">
									<div class="col-md-12">
										<div class="listing-detail-info">
											<span><i class="fa fa-phone" aria-hidden="true"></i> 807-502-5867</span>
											<span><i class="fa fa-globe" aria-hidden="true"></i>
												www.mysitelink.com</span>
										</div>
									</div>
								</div>
							</div>
							<div class="listing-shot-info rating">
								<div class="row extra">
									<div class="col-md-7 col-sm-7 col-xs-6">
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star" aria-hidden="true"></i>
										<i class="color fa fa-star-half-o" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
									</div>
									<div class="col-md-5 col-sm-5 col-xs-6 pull-right">
										<a href={`/${routing.profile_view}`} class="detail-link">Détail</a>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default ProfileListHome