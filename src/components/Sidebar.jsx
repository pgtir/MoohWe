import React from 'react'
import Layout from './Layout';
import {Link} from 'react-router-dom'
import {useState} from 'react'

function sidebar({movieType}) {
    const [activeLink, setActiveLink] = useState('streaming-now');

  return (
    <section className=" sidebar left-bar py-3 px-5 pe-4 shadow-sm">
          
          <div className="logo mb-4 ">
              MoohWe
          </div>
          <div className="profile mb-4">
            <div className="dp">
            <img src="https://randomuser.me/api/portraits/men/78.jpg" className="shadow-sm rounded-circle" alt="Display picture"></img>
            </div>
            <div className="username">Alex Hawkins</div>
          </div>
          <article className="recommended mb-4">
              <span className="heading d-block">RECOMMENDED</span>
              <ul>
                  <li className={`${movieType == 'now_playing' ? "active" : " "}`}><Link to='/' style={{ textDecoration: 'none', color:`${movieType == 'now_playing' ? "var(--blue)" : 'var(--grey)'}` }}>Streaming Now</Link></li>
                  <li className={`${movieType == 'popular' ? "active" : " "}`}><Link to='/popular' style={{ textDecoration: 'none', color:`${movieType == 'popular' ? "var(--blue)" : 'var(--grey)'}` }}>Popular</Link></li>
                  <li className={`${movieType == 'top_rated' ? "active" : " "}`}><Link to='/top-rated' style={{ textDecoration: 'none', color:`${movieType == 'top_rated' ? "var(--blue)" : 'var(--grey)'}` }}>Top Rated</Link></li>
                  <li className={`${movieType == 'upcoming' ? "active" : " "}`}><Link to='/upcoming' style={{ textDecoration: 'none', color:`${movieType == 'upcoming' ? "var(--blue)" : 'var(--grey)'}` }}>Upcoming</Link></li>
              </ul>
          </article>
          <article className="recommended mb-4">
              <span className="heading d-block">CATEGORIES</span>
              <ul>
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Drama</li>
                  <li>Horror</li>
                  <li>Family</li>
                  <li>Thriller</li>
              </ul>
          </article>
      </section>
  )
}

export default sidebar