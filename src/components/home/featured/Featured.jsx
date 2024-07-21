import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Most visited cityies' subtitle='Find all travel package.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
