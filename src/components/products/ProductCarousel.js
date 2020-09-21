import React,{ useEffect } from 'react'
import {
    MDBBox,
    MDBCard, MDBCardBody,
    MDBCardImage, MDBCardText, MDBCardTitle,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer, MDBIcon,
    MDBRow
} from "mdbreact";
import {chunkArray} from "../../containers/utility";
import {imageBaseUrl} from "../../containers/constant";
import { connect } from 'react-redux'
import { fetchProducts } from "../../containers/products/actions";
import AlertPage from "../AlertPage";
import SpinnerPage from "../SpinnerPage";
import {Link} from "react-router-dom";
import {addToCart} from "../../containers/cart/actions";

const ProductCarousel = (props) => {
    useEffect(() => {
        props.getProducts()
    },[])

    const error = <AlertPage/>
    const loading = <SpinnerPage/>

    return (
        <MDBRow>
            <MDBContainer>
                {props.loading ? loading : props.error ? error : (
                    <MDBBox>
                        <p className="text-center font-weight-bold text-white">Top Selling Items</p>
                        <MDBCarousel  activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                            <MDBCarouselInner >
                                <MDBRow>
                                    {
                                        props.products.length !== 0 &&
                                        chunkArray(props.products,3)
                                            .map((all,index) => {
                                                console.log(all,index)
                                                return (
                                                    <MDBCarouselItem itemId={index +1} key = {index} >
                                                        {all.map((item,index) => (
                                                            <MDBCol md="4" key = {index} >
                                                                <MDBCard className="mb-2">
                                                                    <MDBCardImage className="img-fluid" src={`${imageBaseUrl}${item.product_img}`} />
                                                                    <MDBCardBody>
                                                                        <MDBCardTitle>
                                                                            <Link to={`/products/${item.id}`}>{item.product_name}</Link>
                                                                        </MDBCardTitle>
                                                                        <MDBCardText>
                                                                            {item.product_description}
                                                                        </MDBCardText>
                                                                        <MDBCol lg='12' className='d-flex justify-content-center'>
                                                                        <span  className='px-2 fa-lg li-ic'>
                                                                           &#8358; {item.product_price}
                                                                        </span>
                                                                        </MDBCol>
                                                                        <MDBCol lg='12' className='d-flex justify-content-center'>
                                                                            <button className='px-2 btn btn-outline-primary'  onClick={()=>props.addToCart(item.id)}>
                                                                                <MDBIcon icon='shopping-cart'></MDBIcon> Add to cart
                                                                            </button>
                                                                        </MDBCol>
                                                                    </MDBCardBody>
                                                                </MDBCard>
                                                            </MDBCol>
                                                        ))}
                                                    </MDBCarouselItem>
                                                )
                                            })
                                    }
                                </MDBRow>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBBox>
                )}
            </MDBContainer>
        </MDBRow>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts : () => dispatch(fetchProducts()),
        addToCart : (id) => dispatch(addToCart(id))
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        loading:state.products.isLoading,
        error:state.products.error,
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductCarousel)