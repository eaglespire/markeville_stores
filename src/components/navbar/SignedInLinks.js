import React from 'react'
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavItem} from "mdbreact";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'
import {logoutUser} from "../../containers/auth/actions";

function SignedInLinks(props){
    const handleLogout = (e) => {
        e.preventDefault()
        props.logout()
       // console.log('clicked')
    }
    return (
        <React.Fragment>
            <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                        <span className="mr-2">
                            {props.user && props.user.name }
                        </span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem tag={'div'}>
                            <NavLink to={'/settings'}>
                                <MDBIcon icon={'grip-horizontal'} className={'text-danger'} /> Settings
                            </NavLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem onClick={handleLogout} tag={'div'} >
                            <NavLink to={'#'}>
                                <MDBIcon icon={'power-off'} className={'text-danger'} /> logout
                            </NavLink>
                        </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(null,mapDispatchToProps) (SignedInLinks)