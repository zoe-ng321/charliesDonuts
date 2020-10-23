import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default function Menu({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>Menu</h1>
      </div>
      <Footer/>
    </div>
  );
}
