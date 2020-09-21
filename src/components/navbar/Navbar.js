import React,{useState} from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import {connect} from 'react-redux'
import {getTotalUnitsAdded} from "../../containers/utility";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
//import './navbar.css'

function Navbar(props) {
    console.log(props.cart)
    const [activeProp, setActiveProp] = useState(false)
    const [isOpen,toggleIsOpen] = useState(false)

    const toggleCollapse = ()=>{
        toggleIsOpen(!isOpen)
    }
    const handleActiveProp = () =>{
        setActiveProp(true)
    }

    return (
        <MDBNavbar color="stylish-color" dark expand="md" className={'sticky-top'}>
            <MDBNavbarBrand>
                <strong className="white-text">
                    <MDBNavLink to = {'/'} className={'white-text'}>
                        markeville
                    </MDBNavLink>
                </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem onClick = {() => handleActiveProp()} active={activeProp}>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem >
                        <MDBNavLink to="/cart">
                            <MDBIcon icon={'shopping-cart'} /> cart <span className="badge badge-primary">
                            {props.cart.length ? getTotalUnitsAdded(props.cart) : null}
                        </span>
                        </MDBNavLink>
                    </MDBNavItem>
                        {props.isAuthenticated && (<SignedInLinks user = {props.user} />)}
                        {!props.isAuthenticated && (<SignedOutLinks/>)}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

const mapStateToProps = state=>{
    return {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        cart:state.cart.cart,
        success:state.cart.success
    }
}

export default connect(mapStateToProps) (Navbar)