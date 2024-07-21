import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Tour' subtitle='Travel across Ethiopia and uncover the beauty within her..' />

          <form className='flex'>
            <div className='box'>
              <span>where to ?</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Date</span>
              <input type='text' placeholder='day with its time' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
