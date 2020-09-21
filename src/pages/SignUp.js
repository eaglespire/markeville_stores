import React, {useState} from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux'
import {registerUser} from "../containers/auth/actions";
import { Spring } from "react-spring/renderprops";

const SignUp = (props) => {
    const [data,setData] = useState({
        email:'',
        password:'',
        password_confirmation:'',
        name:''
    })

    const handleSubmit = e => {
        e.preventDefault()
        props.sendFormData(data)
        console.log(data)
    }
    if(props.isAuthenticated){
        return <Redirect to={'/cart'} />
    }
    return (
        <Spring
            from={{opacity:0,marginTop:-500}}
            to={{opacity:1,marginTop:0}}
            config={{duration:2000,delay:1000}}
        >
            { prop => (
                <div style={prop}>
                    <MDBRow className={'justify-content-center mt-5'}>
                        <MDBCol md="6">
                            <form onSubmit={handleSubmit}>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="FullName"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => setData({...data,name:e.target.value})}
                                    />
                                    <MDBInput
                                        label="email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => setData({...data,email:e.target.value})}
                                    />

                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        onChange={(e) => setData({...data,password:e.target.value})}
                                    />
                                    <MDBInput
                                        label="Confirm password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        onChange={(e) => setData({...data,password_confirmation:e.target.value})}
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type={'submit'} color={'indigo'} >Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </div>
            ) }
        </Spring>
    );
};

const mapDispatchToProps = dispatch =>{
    return {
        sendFormData: (data) => dispatch(registerUser(data))
    }
}

const mapStateToProps = state =>{
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);