import React from 'react'
import {MDBCol, MDBContainer, MDBFooter, MDBListGroup, MDBListGroupItem, MDBNavLink, MDBRow} from "mdbreact";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <MDBFooter color="grey darken-4" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className={'h-100 d-flex justify-content-center align-items-center'}>
                    <MDBCol md="4">
                        <h5 className="title">Pages</h5>
                        <MDBListGroup>
                            <MDBListGroupItem tag={'p'} href="#" style={styles}>
                                <Link to={'/'}>Home</Link>
                            </MDBListGroupItem>
                            <MDBListGroupItem tag={'p'} href="#" style={styles}>
                                <Link to={'/signin'}>Login</Link>
                            </MDBListGroupItem>
                            <MDBListGroupItem tag={'p'} href="#" style={styles}>
                                <Link to={'/signup'}>Register</Link>
                            </MDBListGroupItem>
                            <MDBListGroupItem tag={'p'} href="#" style={styles}>
                                <Link to={'/cart'}>View Cart</Link>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Markeville stores</h5>
                        <p>
                            Get the best products at an amazingly discounted rate
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Categories</h5>
                        <MDBListGroup>
                            <MDBListGroupItem style={styles}>Books</MDBListGroupItem>
                            <MDBListGroupItem style={styles}>Computers and accessories</MDBListGroupItem>
                            <MDBListGroupItem style={styles}>Consumer Electronics</MDBListGroupItem>
                            <MDBListGroupItem style={styles}>Mobile phones and accessories</MDBListGroupItem>
                            <MDBListGroupItem style={styles}>Clothing</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://markeville.com"> markeville.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}

const styles = {
    backgroundColor:'#3E4551'
}
export default Footer