import React from 'react'
import '../css/offer.css'
import offer1 from '../assets/smasung/Samsung-Galaxy-M-M20-M10-e1548750383733.jpg'
import offer2 from '../assets/smasung/Galaxy-M01-Core-Press-Banner.jpg'
const Offers = () => {
  return (
    <section className="offer-section">
      <h2 className="section-title">Year ending offer</h2>
      <div className="offer-container">
        <div>
          <img src={offer1} alt={offer1} />
        </div>
        <div>
          <img src={offer2} alt={offer2} />
        </div>
      </div>
    </section>
  )
}

export default Offers
