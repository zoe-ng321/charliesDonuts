import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default class Contact extends React.Component {
  render(){
    return (
      <div>
        <NavBar/>
        <div className="container">
        Contact
        </div>
        <Footer/>
      </div>
    );
  }
}
