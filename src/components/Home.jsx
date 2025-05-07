import React from "react";
import Category from "../category/category";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our Grocery Store
              </h1>
              <p className="text-gray-600 mb-6">
                Discover the freshest produce, high-quality meats, and a wide
                selection of groceries to meet all your needs.
              </p>
              <Link
                to="/product"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
              >
                Shop Now
              </Link>
            </div>

            <div className="md:w-1/2 relative">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="image1.jpg"
                      alt="Grocery Store Image 1"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="image2.jpg"
                      alt="Grocery Store Image 2"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="image3.jpg"
                      alt="Grocery Store Image 3"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <Category />
        </div>
      </section>
    </div>
  );
};

export default Home;
