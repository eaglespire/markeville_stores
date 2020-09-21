import React,{useState} from 'react'
import {
    MDBIcon,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

function SignedOutLinks(props){
    const [activeProp, setActiveProp] = useState(false)
    const handleActiveProp = () =>{
        setActiveProp(true)
    }
    return (
        <React.Fragment>
            <MDBNavItem >
                <MDBNavLink to={'/signin'}>
                    <MDBIcon icon={'user'} /> sign in
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to={'/signup'}>
                    <MDBIcon icon={'user'} /> register
                </MDBNavLink>
            </MDBNavItem>
        </React.Fragment>
    )
}
export default SignedOutLinks