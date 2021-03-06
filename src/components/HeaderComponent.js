import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isNavOpen: false,
        isModalOpen:false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

    toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    handleLogin(event){
      this.toggleModal();
      alert("Username:" + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);
      event.preventDefault();
    }
render() {
return(
    <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler  onClick={this.toggleNav} />
                <img id="brand"src='https://raw.githubusercontent.com/Hossik/roja/master/public/assets/logo1.jpg'  alt='Ristorante Con Fusion' />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> خانه</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> درباره من</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> منو</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> تماس</NavLink>
                    </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
         
    </React.Fragment>
    );
}
}
export default Header;