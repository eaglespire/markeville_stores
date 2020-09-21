import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBView
} from 'mdbreact';
import {imageBaseUrl} from "../../containers/constant";
import {connect} from 'react-redux'
import {addToCart} from "../../containers/cart/actions";
import {Link} from 'react-router-dom'
const ProductCard = (props) => {
console.log(props)
    return (
            <MDBCol lg='6' md={'6'} className={'my-2'}>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src={imageBaseUrl + props.image}
                            alt='product image'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center'>
                        <Link to={`/products/${props.id}`}>
                            <MDBCardTitle className='card-title'>
                                <strong>{props.title}</strong>
                            </MDBCardTitle>
                        </Link>

                        <p className='font-weight-bold blue-text'>{props.category}</p>

                        <MDBCardText>
                            {props.description}
                        </MDBCardText>

                        <MDBCol lg='12' className='d-flex justify-content-center'>
                            <span  className='px-2 fa-lg li-ic'>
                               &#8358; {props.price}
                            </span>
                        </MDBCol>
                        <MDBCol lg='12' className='d-flex justify-content-center'>
                            <button className='px-2 btn btn-primary' onClick={()=>props.addToCart(props.btnId)}>
                                <MDBIcon icon='shopping-cart'></MDBIcon> Add to cart
                            </button>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToCart:(id)=>dispatch(addToCart(id))
    }
}

export default connect(null,mapDispatchToProps)(ProductCard);