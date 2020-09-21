import React,{useState} from 'react'
import {MDBRow,MDBCol} from 'mdbreact'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";
import {clearOutCart} from "../containers/cart/actions";

const CheckOut = (props) => {
    const [redirectAfterPayment,setRedirectAfterPayment] = useState(false)
    console.log(props)
    const priceForStripe = props.price * 100;
    const publishableKey = 'pk_test_51HF8vyGkbXf4CjQJYELNWxRkqYGpzboxxW8vTUHiKLYTddRmTNz0PKdjFnI6de6RBrqRFk0PXLkhTuMdL0KfZk3O00hLjCcWHD';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
        props.clearCart()
        setRedirectAfterPayment(true)
    };
    if(!props.isAuthenticated){
        return <Redirect to={'/signin'} />
    }
    if (redirectAfterPayment){
        return <Redirect to={'/'} />
    }

    return (
        <MDBRow className={'justify-content-center'}>
            <MDBCol md={'4'} className={'mt-5'}>
                {props.price !== 0 && (
                    <StripeCheckout
                        label='Pay Now'
                        name='Markeville Online Store'
                        billingAddress
                        shippingAddress
                        image='https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
                        description={`Total Amount To Pay:  ${props.price} Naira `}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        currency={'NGN'}
                        token={onToken}
                        stripeKey={publishableKey}
                    />
                )}

            </MDBCol>
        </MDBRow>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        price : state.cart.checkoutAmount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart : () => dispatch(clearOutCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CheckOut)