import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top " style={{opacity:0.97,boxShadow: '1.3px 1.2px 1.1px 1.5px'}}>
        <div className="container-fluid" >
          <Link href="/"><Image src='/Images/logo.png' height='100' width='150'/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/Home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href="#">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
