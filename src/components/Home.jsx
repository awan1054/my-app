import React from "react";

const Home = () => {
  return (
    <div>
      <section class="bg-gray-100 py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-4xl font-bold mb-4">
                Welcome to Our Grocery Store
              </h1>
              <p class="text-gray-600 mb-6">
                Discover the freshest produce, high-quality meats, and a wide
                selection of groceries to meet all your needs.
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
              >
                Shop Now
              </a>
            </div>

            <div class="md:w-1/2 relative">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="image1.jpg"
                      alt="Grocery Store Image 1"
                      class="rounded-lg shadow-lg"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="image2.jpg"
                      alt="Grocery Store Image 2"
                      class="rounded-lg shadow-lg"
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="image3.jpg"
                      alt="Grocery Store Image 3"
                      class="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
