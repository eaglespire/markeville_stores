import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = (props) => {
    return (
        <MDBContainer>
            <MDBAlert color="warning" dismiss>
                <strong>{props.message}</strong>
            </MDBAlert>
        </MDBContainer>
    );
};

export default AlertPage;