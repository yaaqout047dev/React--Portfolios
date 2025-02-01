import React from 'react'
import img1 from '../../assets/img4.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img5.webp'
import img5 from '../../assets/img1.webp'
import img6 from '../../assets/img6.webp'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img2} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img3} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img4} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img5} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img6} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
      </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
