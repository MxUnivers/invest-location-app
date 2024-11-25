// src/components/Home.js
import React from "react";
import "react-multi-carousel/lib/styles.css";

function CategoryHome() {
  

  return (
    <section>
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div class="heading">
							<h2>Most Popular <span>Categories</span></h2>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="category-box-full style-1">
							<a href="search-listing.html" class="category-boxs"
								data-background-image="assets/img/category/art.jpg" tabindex="0">
								<div class="category-box-content">
									<h3>Art & Design</h3>
									<span>70 listings</span>
								</div>
								<span class="category-box-btn">Browse</span>
								<div class="category-box-bg"
									style={{backgroundImage: `url(assets/img/category/art.jpg)`}}></div>
							</a>
						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="category-box-full style-1">
							<a href="search-listing.html" class="category-boxs"
								data-background-image="assets/img/category/education.jpg" tabindex="0">
								<div class="category-box-content">
									<h3>Education</h3>
									<span>40 listings</span>
								</div>
								<span class="category-box-btn">Browse</span>
								<div class="category-box-bg"
									style={{backgroundImage: `url(assets/img/category/education.jpg)`}}></div>
							</a>
						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="category-box-full style-1">
							<a href="search-listing.html" class="category-boxs"
								data-background-image="assets/img/category/documentry.jpg" tabindex="0">
								<div class="category-box-content">
									<h3>Documentary</h3>
									<span>110 listings</span>
								</div>
								<span class="category-box-btn">Browse</span>
								<div class="category-box-bg"
									style={{backgroundImage: `url(assets/img/category/documentry-2.jpg)`}}></div>
							</a>
						</div>
					</div>

				</div>
			</div>
		</section>
  );
}

export default CategoryHome;
