import React,{useState} from 'react'
import { MDBRow,MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { fetchUser } from "../containers/auth/actions";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AlertPage from "../components/AlertPage";
import { Spring } from "react-spring/renderprops";


const SignIn = (props) => {
    console.log(props)
    const [data,setData] = useState({
        email:'',
        password:''
    })

    const handleSubmit = e => {
        e.preventDefault()
        props.sendFormData(data)
        //console.log(data)
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
                     <MDBRow className={'justify-content-center my-5'}>
                         <MDBCol md="6" className={'my-5'}>
                             <form onSubmit={handleSubmit}>
                                 <p className="h5 text-center mb-4">Sign in</p>
                                 {props.error && <AlertPage message = {props.error} />}
                                 <div className="grey-text">
                                     <MDBInput
                                         value={data.email}
                                         label="Type your email"
                                         icon="envelope"
                                         group
                                         type="email"
                                         validate
                                         error="wrong"
                                         success="right"
                                         onChange={(e) => setData({...data,email:e.target.value})}
                                     />

                                     <MDBInput
                                         value={data.password}
                                         label="Type your password"
                                         icon="lock"
                                         group
                                         type="password"
                                         validate
                                         onChange={(e) => setData({...data,password:e.target.value})}
                                     />
                                 </div>
                                 <div className="text-center">
                                     <MDBBtn type={'submit'} color={'indigo'}>Login</MDBBtn>
                                 </div>
                             </form>
                         </MDBCol>
                     </MDBRow>
                 </div>
             ) }
         </Spring>
     )
}

const mapDispatchToProps = dispatch =>{
    return {
        sendFormData: (data) => dispatch(fetchUser(data))
    }
}

const mapStateToProps = state =>{
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIn)