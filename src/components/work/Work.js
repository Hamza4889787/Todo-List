import React from 'react'
import './Work.css'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <>
    <div className='work-section'>
      {/* <!--- search bar --> */}

      <div className="contenir">

    <input type="text" className="search" id="search-inp" placeholder="Search..."/>

    <button className="search-btn"  id="search-inp-btn">&#x027A4;</button>
     </div>
     </div>

     {/* <!--------- cards -------->*/}

     <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </>
  )
}

export default Work
