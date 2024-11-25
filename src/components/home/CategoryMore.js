import React from 'react'

const CategoryMore = () => {
    return (
        <section class="py-20 border-b border-gray-200 dark:border-foreground dark:bg-background">
        <div class="container mx-auto lg:p-0 p-5">
          <div class="flex lg:flex-row flex-col lg:text-left text-center flex-wrap items-center justify-between mb-12">
            <div class="lg:mb-0 mb-4" data-aos="fade-up">
              <h2 class="text-2xl lg:text-3xl font-medium capitalize mb-2 dark:text-gray-100">
                Explore by categories
              </h2>
              <h6 class="text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal">
                A selection of listing verified for quality
              </h6>
            </div>
            <div data-aos="fade-up">
              <a href="listing-list.html"
                class="text-gray-500 dark:text-gray-400 hover:text-blue-500 flex items-center">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-5 ml-3" viewbox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/building.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">
                    Apartment
                  </h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Apartment available
                  </p>
                </div>
              </div>
            </a>
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/concert-2.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">Event</h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Event available
                  </p>
                </div>
              </div>
            </a>
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/meeting.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">
                    Coaching
                  </h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Coaching available
                  </p>
                </div>
              </div>
            </a>
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/coffee-house.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">
                    Resturants
                  </h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Resturants available
                  </p>
                </div>
              </div>
            </a>
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/drinks.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">
                    Eat &amp; Drinks
                  </h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Drinks available
                  </p>
                </div>
              </div>
            </a>
            <a href="event-listing-details-page.html" data-aos="fade-up" data-aos-duration="800">
              <div class="relative overflow-hidden group rounded-lg group">
                <img class="w-full h-[277px] object-cover rounded-lg transition-all group-hover:scale-105"
                  src="assets/img/Image/landing-page-image/palace.jpg" alt="" />
                <div
                  class="absolute bottom-0 top-1/2 flex flex-col justify-end left-0 pb-5 pl-5 rounded-b-lg pt-2 card-linear-gradient w-full">
                  <h5 class="text-2xl font-medium mb-1 text-white">Hotel</h5>
                  <p class="text-base font-normal text-gray-100">
                    15+ Hotel available
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    )
}

export default CategoryMore
