import React from 'react'
import './slider.css'
import "https://unpkg.com/swiper@8/swiper-bundle.min.css"
import "https://unpkg.com/swiper@8/swiper-bundle.min.js"
import './script'
import food_1 from './images/tranding-food-1.png'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
const Slider = () => {
  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Special Pizza
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Meat Ball
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$40</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Burger
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$15</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Frish Curry
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$15</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Pane Cake
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Vanilla cake
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={food_1} alt="Tranding" /></div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$8</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    Straw Cake
                  </h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <BiLeftArrowAlt />
            </div>
            <div className="swiper-button-next slider-arrow">
              <BiRightArrowAlt />
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Slider