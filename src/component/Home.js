import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h2>This is the home page</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          {/* <Link to='/navbar'>Navbar</Link> */}
        </button>
    </div>
  )
}
