import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default class HomePage extends React.Component {
  render(){
    return (
      <div>
        <NavBar/>
        <div className="container">
        Home!
        </div>
        <Footer/>
      </div>
    );
  }
}
