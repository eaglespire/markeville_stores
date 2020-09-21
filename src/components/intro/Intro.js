import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardText,MDBCardTitle,MDBBtn} from "mdbreact";

function Intro() {
    return (
        <OwlCarousel
            className={'owl-theme'}
            loop
            autoplay={true}
            nav
            items={2}
        >
            <MDBCard style={{ width: "22rem" }} className={'item'}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "22rem" }} className={'item'}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "22rem" }} className={'item'}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </OwlCarousel>
    )
}
export default Intro