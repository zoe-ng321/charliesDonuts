import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default class Gallery extends React.Component {
  render(){
    return (
      <div>
        <NavBar/>
        <div className="container">
        Gallery!
        </div>
        <Footer/>
      </div>
    );
  }
}
