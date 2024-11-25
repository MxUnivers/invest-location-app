import React from 'react'

const HeaderWeb = () => {
    return (
      <header class="bg-no-repeat bg-cover text-white dark:bg-transparent sticky-header-first-content" style={{ 
      backgroundImage: `linear-gradient(
          177.37deg,
          #000000 2.19%,
          rgba(75, 82, 93, 0) 77.2%
        ),
        url('assets/img/bg-header.jpg')`
      }}>
 
  <div class="w-full navbar h-20 flex items-center hero-sticky-header -top-20">
    <nav class="container mx-auto lg:px-0 px-5 flex items-center justify-between transition-all">
      <button type="button" class="lg:hidden block menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewbox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <a href="index.htm" class="flex items-center">
        <img class="w-11 h-11 mr-3" src="assets/img/logo.svg" alt="" />
        <h6 class="text-base font-medium block md:hidden">Accommo</h6>
      </a>
      <button type="button" class="text-white hover:text-blue-500 flex items-center lg:hidden">
        <span class="lg:mr-3 mr-0 relative">
          <img class="w-8 h-8 rounded-full border border-white" src="assets/img/faces/10.jpg" alt="" />
          <span class="w-2 h-2 bg-green-500 rounded-full border absolute bottom-0 right-0"></span>
        </span>
      </button>
      <div class="hidden lg:flex items-center">
        <ul class="flex items-center">
          <li class="list-none">
            <div
              class="relative [&>div] [&>div]:hover:visible [&>div]:hover:transition-all [&>div]:hover:pt-3 [&>div]:hover:h-full [&>div]:hover:opacity-100 [&>div]:hover:top-auto [&>div]:hover:z-10 pr-9">
              <button class="link hover:text-blue-500 flex items-center">
                Home
                <svg data-dropdown-button="" class="w-3 h-auto ml-2" width="10" height="6" viewbox="0 0 10 6"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.99982 6.00001C4.79513 6.00001 4.59034 5.92467 4.43435 5.774L0.434558 1.91686C0.122074 1.61552 0.122074 1.12735 0.434558 0.826011C0.747042 0.524671 1.25327 0.524671 1.56575 0.826011L4.99982 4.13893L8.43464 0.826613C8.74712 0.525274 9.25335 0.525274 9.56583 0.826613C9.87831 1.12795 9.87831 1.61612 9.56583 1.91746L5.56604 5.7746C5.4098 5.92527 5.20481 6.00001 4.99982 6.00001Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <div class="absolute top-9 invisible opacity-0 whitespace-nowrap pt-0">
                <div
                  class="rounded-lg whitespace-nowrap shadow-front-3 bg-white dark:bg-foreground dark:text-gray-300 text-gray-700 z-50">
                  <ul x-data="{ pages: [
          { 
            title: 'Landing page', 
            subTitle: 'Area Listing page & Inner Pages', 
            url: 'landing-page-1.html', 
            image: 'assets/img/landing-page-image/01.png'
          },
        ]}" class="h-full rounded-lg relative bg-white dark:bg-foreground dark:text-gray-300 text-gray-700">
                    <template x-for="page in pages">
                      <li
                        class="flex rounded-t-lg [&>a_h6]:hover:text-blue-500 [&>a:first-child]:hover:border-blue-200 [&>a:first-child]:hover:rounded-t-lg [&>a:first-child]:hover:bg-blue-50 [&>a:last-child]:hover:block [&>a:last-child]:hover:translate-x-[189px] bg-white dark:bg-foreground">
                        <a href="page.url"
                          class="link px-3 py-2 border-b text-sm border-grey-200 dark:border-gray-800 w-full">
                          <h6 x-text="page.title" class="font-medium text-gray-600 dark:text-gray-200"></h6>
                          <p x-text="page.subTitle" class="font-normal text-gray-500 dark:text-gray-400 text-xs">
                          </p>
                        </a>
                        <a href="page.url"
                          class="absolute left-0 top-0 translate-x-0 hidden bg-white dark:bg-foreground p-3 shadow-inner rounded-r-lg">
                          <img class="w-full h-[346px] object-cover shadow-input" src="page.image" alt="" />
                        </a>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="list-none">
            
            <div
              class="dropdown relative [&>div]:hover:visible [&>div]:hover:transition-all [&>div]:hover:pt-3 [&>div]:hover:h-full [&>div]:hover:block [&>div]:hover:opacity-100 [&>div]:hover:top-auto [&>div]:hover:z-10 pr-9">
              <button class="link hover:text-blue-500 flex items-center">
                Pages
                <svg class="w-3 h-auto ml-2" width="10" height="6" viewbox="0 0 10 6" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.99982 6.00001C4.79513 6.00001 4.59034 5.92467 4.43435 5.774L0.434558 1.91686C0.122074 1.61552 0.122074 1.12735 0.434558 0.826011C0.747042 0.524671 1.25327 0.524671 1.56575 0.826011L4.99982 4.13893L8.43464 0.826613C8.74712 0.525274 9.25335 0.525274 9.56583 0.826613C9.87831 1.12795 9.87831 1.61612 9.56583 1.91746L5.56604 5.7746C5.4098 5.92527 5.20481 6.00001 4.99982 6.00001Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <div class="absolute top-9 invisible opacity-0 whitespace-nowrap pt-0">
                <div
                  class="rounded-lg whitespace-nowrap shadow-front-3 bg-white dark:bg-foreground dark:text-gray-300 text-gray-700">
                  <div class="flex max-w-full">
                    <div class="p-6">
                      <div class="mb-7 flex flex-col">
                        <img class="shadow-front-2 w-32 mb-3 border-2 rounded-lg border-gray-100"
                          src="assets/img/header-img/landing-page.png" alt="" />
                        <h5 class="text-sm font-semibold mb-2">
                          Landing Pages
                        </h5>
                        <a href="landing-page-1.html" class="link text-sm font-normal hover:text-blue-500 mb-2">Area
                          Listing page</a>
                        
                      </div>
                      
                    </div>
                    
                    <div class="p-6">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-none">
            
            <div
              class="relative [&>div]:hover:visible [&>div]:hover:pt-3 [&>div]:hover:h-full [&>div]:hover:opacity-100 [&>div]:hover:top-auto [&>div]:hover:transition-all [&>div]:hover:z-10 pr-9">
              <button class="link hover:text-blue-500 flex items-center">
                Dashboards
              </button>
              <div class="absolute top-9 invisible opacity-0 whitespace-nowrap pt-0">
                
              </div>
            </div>
          </li>
          <li class="mr-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300 cursor-pointer darkMode"
              viewbox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 cursor-pointer lightMode hidden"
              viewbox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"></path>
            </svg>
          </li>
          <li class="mr-9">
            <div class="dropdown" data-dropdown="">
              <button class="link hover:text-blue-500 flex items-center" data-dropdown-button="">
                <span class="lg:mr-3 mr-0 relative">
                  <img class="w-8 h-8 rounded-full border border-white" src="assets/img/faces/10.jpg"
                    data-dropdown-button="" alt="" />
                  <span class="w-2 h-2 bg-green-500 rounded-full border absolute bottom-0 right-0"></span>
                </span>
              </button>
              <div class="dropdown-menu bg-white dark:bg-foreground dark:text-gray-300 text-gray-700">
                <div>
                  <div class="dropdown-links max-w-xs w-48 rounded-md py-3">
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300"><svg
                        xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>Account
                    </a>
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                        </path>
                      </svg>
                      Order Tracking
                    </a>
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                      My Voucher
                    </a>
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                      </svg>
                      My Wishlist
                    </a>
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                        </path>
                      </svg>
                      Settings
                    </a>
                    <a href="listing-list.html"
                      class="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                      </svg>
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button type="button"
          class="inline-flex hover:bg-blue-500 hover:text-white items-center px-3 py-[9px] rounded-lg border hover:border-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 xl:mr-2 mr-0" viewbox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="xl:block hidden">Add Listing</span>
        </button>
      </div>
    </nav>
  </div>
  <div class="pt-32 lg:px-0 px-5 lg:pt-64 text-center">
    <h1 class="text-2xl lg:text-5xl font-semibold mb-4">
      Find Nearby Anything
    </h1>
    <p class="text-sm lg:text-lg font-medium block pb-16">
      The best way to find yourself in the service of others.
    </p>
    <div
      class="md:inline-flex hidden py-3 bg-white dark:bg-background overflow-hidden rounded-full mb-6 text-gray-900">
      <input type="text"
        class="pl-7 py-2 border-r pr-4 dark:bg-background dark:placeholder:text-gray-100 dark:text-gray-100 border-gray-200 focus:outline-none"
        placeholder="What are you looking for ?" />
      <select name="cars" id="select-4"
        class="pl-4 py-2 pr-20 mr-4 dark:bg-background dark:text-gray-100 text-gray-400 focus:outline-none">
        <option value="volvo">Location</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <select name="cars" id="select-7"
        class="text-gray-400 border-l dark:bg-background dark:text-gray-100 border-gray-200 focus:outline-none pl-4 py-2 pr-20 mr-4">
        <option value="volvo">Category</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <button type="button" class="bg-blue-500 hover:bg-blue-600 rounded-full text-white px-8 py-3 mr-3">
        Search
      </button>
    </div>
    <div class="text-base font-normal mb-3 lg:block hidden">
      Or browse featured categories:
    </div>
    <div class="md:flex hidden justify-center flex-wrap pb-20">
      <button type="button"
        class="flex bg-gray-100 hover:bg-gray-200 hover:text-gray-600 text-gray-500 text-xs items-center py-1 px-2 rounded-full mr-2">
        <svg class="w-3 h-3 mr-2" width="9" height="10" viewbox="0 0 11 10" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.6199 0.199997C8.1499 0.199997 8.5799 0.602934 8.5799 1.1V8.9C8.5799 9.39687 8.1499 9.8 7.6199 9.8H5.6999V8.3C5.6999 7.80312 5.2699 7.4 4.7399 7.4C4.2099 7.4 3.7799 7.80312 3.7799 8.3V9.8H1.8599C1.3297 9.8 0.899902 9.39687 0.899902 8.9V1.1C0.899902 0.602934 1.3297 0.199997 1.8599 0.199997H7.6199ZM2.1799 5.3C2.1799 5.465 2.3231 5.6 2.4999 5.6H3.1399C3.3159 5.6 3.4599 5.465 3.4599 5.3V4.7C3.4599 4.535 3.3159 4.4 3.1399 4.4H2.4999C2.3231 4.4 2.1799 4.535 2.1799 4.7V5.3ZM4.4199 4.4C4.2439 4.4 4.0999 4.535 4.0999 4.7V5.3C4.0999 5.465 4.2439 5.6 4.4199 5.6H5.0599C5.2359 5.6 5.3799 5.465 5.3799 5.3V4.7C5.3799 4.535 5.2359 4.4 5.0599 4.4H4.4199ZM6.0199 5.3C6.0199 5.465 6.1639 5.6 6.3399 5.6H6.9799C7.1559 5.6 7.2999 5.465 7.2999 5.3V4.7C7.2999 4.535 7.1559 4.4 6.9799 4.4H6.3399C6.1639 4.4 6.0199 4.535 6.0199 4.7V5.3ZM2.4999 2C2.3231 2 2.1799 2.135 2.1799 2.3V2.9C2.1799 3.065 2.3231 3.2 2.4999 3.2H3.1399C3.3159 3.2 3.4599 3.065 3.4599 2.9V2.3C3.4599 2.135 3.3159 2 3.1399 2H2.4999ZM4.0999 2.9C4.0999 3.065 4.2439 3.2 4.4199 3.2H5.0599C5.2359 3.2 5.3799 3.065 5.3799 2.9V2.3C5.3799 2.135 5.2359 2 5.0599 2H4.4199C4.2439 2 4.0999 2.135 4.0999 2.3V2.9ZM6.3399 2C6.1639 2 6.0199 2.135 6.0199 2.3V2.9C6.0199 3.065 6.1639 3.2 6.3399 3.2H6.9799C7.1559 3.2 7.2999 3.065 7.2999 2.9V2.3C7.2999 2.135 7.1559 2 6.9799 2H6.3399Z"
            fill="currentColor"></path>
        </svg>
        <span class="font-medium">Apartment</span>
      </button>
      <button type="button"
        class="flex bg-gray-100 hover:bg-gray-200 hover:text-gray-600 text-gray-500 text-xs items-center py-1 px-2 rounded-full mr-2">
        <svg class="w-3 h-3 mr-2" width="13" height="12" viewbox="0 0 13 12" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.7002 9.77143C1.7002 10.3543 2.14591 10.8 2.72877 10.8H10.2716C10.8545 10.8 11.3002 10.3543 11.3002 9.77143V4.62857H1.7002V9.77143ZM10.2716 1.88571H9.92877V1.54285C9.92877 1.33714 9.79162 1.2 9.58591 1.2C9.38019 1.2 9.24305 1.33714 9.24305 1.54285V1.88571H7.87162V1.54285C7.87162 1.33714 7.73448 1.2 7.52877 1.2C7.32305 1.2 7.18591 1.33714 7.18591 1.54285V1.88571H5.81448V1.54285C5.81448 1.33714 5.67734 1.2 5.47162 1.2C5.26591 1.2 5.12877 1.33714 5.12877 1.54285V1.88571H3.75734V1.54285C3.75734 1.33714 3.6202 1.2 3.41448 1.2C3.20877 1.2 3.07162 1.33714 3.07162 1.54285V1.88571H2.72877C2.14591 1.88571 1.7002 2.33143 1.7002 2.91428V3.94285H11.3002V2.91428C11.3002 2.33143 10.8545 1.88571 10.2716 1.88571ZM8.55734 3.25714H4.44305C4.23734 3.25714 4.1002 3.12 4.1002 2.91428C4.1002 2.70857 4.23734 2.57143 4.44305 2.57143H8.55734C8.76305 2.57143 8.90019 2.70857 8.90019 2.91428C8.90019 3.12 8.76305 3.25714 8.55734 3.25714Z"
            fill="#667085"></path>
        </svg>
        <span class="font-medium">Event</span>
      </button>
      <button type="button"
        class="flex bg-gray-100 hover:bg-gray-200 hover:text-gray-600 text-gray-500 text-xs items-center py-1 px-2 rounded-full mr-2">
        <svg class="w-3 h-3 mr-2" width="13" height="12" viewbox="0 0 13 12" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.68337 3.6H2.30062C2.13191 3.6 1.97024 3.67265 1.85531 3.79687C1.74281 3.92343 1.68659 4.08975 1.703 4.2585L2.30281 10.2416C2.33343 10.5656 2.59124 10.8 2.90062 10.8H7.08375C7.39312 10.8 7.65094 10.5656 7.68131 10.2587L8.28131 4.27556C8.29772 4.10681 8.24149 3.9405 8.12899 3.81393C8.03025 3.67312 7.85212 3.6 7.68337 3.6ZM6.90712 6H3.09412L2.97524 4.8H7.02525L6.90712 6ZM8.60025 1.2C7.42612 1.2 6.4365 1.95468 6.06712 3H7.0515C7.36312 2.46562 7.93744 2.1 8.60062 2.1C9.5775 2.1 10.4004 2.90625 10.4004 3.9C10.4004 4.83993 9.67631 5.604 8.75756 5.68368L8.66616 6.59306C10.1265 6.55875 11.3003 5.37 11.3003 3.9C11.3003 2.40937 10.0909 1.2 8.60025 1.2Z"
            fill="#667085"></path>
        </svg>
        <span class="font-medium">Eat & Drink</span>
      </button>
      <button type="button"
        class="flex bg-gray-100 hover:bg-gray-200 hover:text-gray-600 text-gray-500 text-xs items-center py-1 px-2 rounded-full mr-2">
        <svg class="w-3 h-3 mr-2" width="13" height="12" viewbox="0 0 10 12" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.2602 3.82286H2.5402C2.34145 3.82286 2.1802 3.96171 2.1802 4.13143V5.46857C1.91515 5.46857 1.7002 5.65243 1.7002 5.88C1.7002 6.10719 1.91515 6.29143 2.1667 6.29143L2.1802 7.62857C2.1802 7.79957 2.34145 7.93714 2.5402 7.93714H3.2602C3.4597 7.93714 3.6202 7.79957 3.6202 7.62857V4.13143C3.6202 3.96171 3.4597 3.82286 3.2602 3.82286ZM8.54019 3H7.82019C7.62219 3 7.46019 3.13821 7.46019 3.30857V5.46857H5.54019V3.30857C5.54019 3.13821 5.3797 3 5.1802 3H4.4602C4.2622 3 4.1002 3.13821 4.1002 3.30857V8.45143C4.1002 8.62243 4.2622 8.76 4.4602 8.76H5.1802C5.3797 8.76 5.54019 8.62243 5.54019 8.45143V6.29143H7.46019V8.45143C7.46019 8.62179 7.62144 8.76 7.82019 8.76H8.54019C8.73894 8.76 8.90019 8.62179 8.90019 8.45143V3.30857C8.90019 3.13821 8.73969 3 8.54019 3ZM10.8202 5.46857V4.13143C10.8202 3.96171 10.6597 3.82286 10.4602 3.82286H9.74019C9.54219 3.82286 9.38019 3.96171 9.38019 4.13143V7.62857C9.38019 7.79893 9.54144 7.93714 9.74019 7.93714H10.4602C10.6589 7.93714 10.8202 7.79893 10.8202 7.62857V6.29143C11.0852 6.29143 11.3002 6.10719 11.3002 5.88C11.3002 5.65243 11.0857 5.46857 10.8202 5.46857Z"
            fill="#667085"></path>
        </svg>
        <span class="font-medium">Fitness</span>
      </button>
    </div>
  </div>
</header>
    )
}

export default HeaderWeb
