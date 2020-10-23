import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default function Contact({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
       <h1>Contact</h1>
      </div>
      <Footer/>
    </div>
  );
}
