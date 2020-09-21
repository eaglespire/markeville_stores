import React,{useEffect,useState} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBSpinner,
    MDBAlert, MDBBox, MDBView, MDBCardGroup
} from
        'mdbreact';
import {connect} from 'react-redux'
import {fetchSingleProduct} from "../../containers/product/actions";
import {baseUrl} from "../../containers/utility";
import {addToCart} from "../../containers/cart/actions";
import { Redirect } from 'react-router-dom'
import { Spring } from "react-spring/renderprops";

const SingleProduct = (props) => {
    const [redirect,setRedirect] = useState(false)
    console.log(props.match.params.id)
    useEffect(()=>{
        let id = props.match.params.id
        props.fetchProduct(id)
    },[])

    if(redirect){
        return <Redirect to={'/checkout'} />
    }

    return (
        <Spring
            from={{opacity:0,marginTop:-500}}
            to={{opacity:1,marginTop:0}}
            config={{duration:2000,delay:1000}}
        >
            { prop => (
                <div style={prop}>
                    <MDBRow className={'justify-content-center mt-1'}>
                        {
                            props.loading
                                ? (<MDBCol className={'text-center'}>
                                    <MDBSpinner />
                                </MDBCol>)
                                : (
                                    props.product
                                        ? (<MDBCol md="12">
                                            <MDBRow className={'justify-content-center'}>
                                                <MDBCol md='6'>
                                                    <MDBCard narrow>
                                                        <MDBView cascade>
                                                            <MDBCardImage
                                                                hover
                                                                overlay='stylish-strong'
                                                                className='card-img-top'
                                                                src={`${baseUrl}${props.product.product_img}`}
                                                                alt={props.product.product_name}
                                                            />
                                                        </MDBView>

                                                        <MDBCardBody>
                                                            <h5 className='pink-text'>
                                                                <MDBIcon icon='check-double' /> {props.product.product_category}
                                                            </h5>

                                                            <MDBCardTitle className='font-weight-bold'>
                                                                {props.product.product_name}
                                                            </MDBCardTitle>

                                                            <MDBCardText>
                                                                {props.product_description}
                                                            </MDBCardText>
                                                            <p className="blue-text my-4 font-weight-bold">
                                                                <span className="badge badge-danger mr-2">Best Seller</span>
                                                                <span className="badge badge-success">Sale</span>
                                                            </p>

                                                            <MDBBox my={'3'}>
                                                <span className={'card-text'}>
                                                <strong className="text-danger font-weight-bolder h2 mr-2">&#8358; {props.product.discountedPrice}</strong>
                                            </span>
                                                                <span style={{textDecoration:'line-through'}} className={'card-text h5 font-weight-bold mr-2'}>&#8358; {props.product.product_price}</span>
                                                                <span className={'text-danger'}>{props.product.product_discount}% off</span>
                                                            </MDBBox>
                                                            <MDBCardText>
                                                                {props.product.product_description}
                                                            </MDBCardText>
                                                            <MDBCardText>
                                                                <h6 className={'font-weight-bold'}>Availability: In stock</h6>
                                                            </MDBCardText>
                                                            <hr className="my-4" />
                                                            <div className="pt-2">
                                                                <MDBBtn
                                                                    color="indigo"
                                                                    className="waves-effect"
                                                                    onClick={()=>props.addToCart(props.product.id)}
                                                                >
                                                                    Add to Cart <MDBIcon icon="shopping-cart" />
                                                                </MDBBtn>
                                                                <MDBBtn
                                                                    outline
                                                                    color="primary"
                                                                    className="waves-effect"
                                                                    onClick={() => setRedirect(true)}
                                                                >
                                                                    Proceed to CheckOut <MDBIcon icon="arrow-right" />
                                                                </MDBBtn>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>

                                                {/*<MDBCol md={'8'}>
                                    <MDBJumbotron style = {styles.wrapper}>
                                        <MDBCardImage
                                            className="img-fluid"
                                            src={`${baseUrl}${props.product.product_img}`}
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle className="h2">
                                                {props.product.product_name}
                                            </MDBCardTitle>
                                            <p className="blue-text my-4 font-weight-bold">
                                                <span className="badge badge-danger mr-2">Best Seller</span>
                                                <span className="badge badge-success">Sale</span>
                                            </p>
                                            <p className="blue-text my-4 font-weight-bold">
                                                {props.product.product_category}
                                            </p>
                                            <MDBBox my={'3'}>
                                                <span className={'card-text'}>
                                                <strong className="text-danger font-weight-bolder h2 mr-2">$ {props.product.discountedPrice}</strong>
                                            </span>
                                                <span style={{textDecoration:'line-through'}} className={'card-text h5 font-weight-bold mr-2'}># {props.product.product_price}</span>
                                                <span className={'text-danger'}>{props.product.product_discount}% off</span>
                                            </MDBBox>
                                            <MDBCardText>
                                                {props.product.product_description}
                                            </MDBCardText>
                                            <MDBCardText>
                                                <h6 className={'font-weight-bold'}>Availability: In stock</h6>
                                            </MDBCardText>
                                            <hr className="my-4" />
                                            <div className="pt-2">
                                                <MDBBtn
                                                    color="indigo"
                                                    className="waves-effect"
                                                    onClick={()=>props.addToCart(props.product.id)}
                                                >
                                                    Add to Cart <MDBIcon icon="shopping-cart" />
                                                </MDBBtn>
                                                <MDBBtn
                                                    outline
                                                    color="primary"
                                                    className="waves-effect"
                                                    onClick={() => setRedirect(true)}
                                                >
                                                    Proceed to CheckOut <MDBIcon icon="arrow-right" />
                                                </MDBBtn>
                                            </div>

                                        </MDBCardBody>
                                    </MDBJumbotron>
                                </MDBCol>*/}
                                                <MDBCol md={'4'}>
                                                    <p className="text-center font-weight-bold text-secondary">Top deals</p>
                                                    <MDBCardGroup>
                                                        <MDBCard className={'mr-3'}>
                                                            <MDBCardImage src="/images/m6.png" alt="product" top hover
                                                                          overlay="white-slight" />
                                                            {/*<MDBCardBody>
                                                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary" size="md">
                                                    read more
                                                </MDBBtn>
                                            </MDBCardBody>*/}
                                                        </MDBCard>

                                                        <MDBCard>
                                                            <MDBCardImage src="/images/m7.png" alt="MDBCard image cap" top hover
                                                                          overlay="white-slight" />
                                                            {/*<MDBCardBody>
                                                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary" size="md">
                                                    read more
                                                </MDBBtn>
                                            </MDBCardBody>*/}
                                                        </MDBCard>
                                                    </MDBCardGroup>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>)
                                        : (<MDBAlert color="success">
                                            <h4 className="alert-heading">Oops!</h4>
                                            <p>Error loading</p>
                                            <hr />
                                            <p className="mb-0">Error</p>
                                        </MDBAlert>)
                                )
                        }
                    </MDBRow>
                </div>
            ) }
        </Spring>
    )
}

const styles = {
    wrapper:{
        fontFamily:'lora_custom',
        backgroundColor:'#757575'
    },
    first_column:{
        color:'#e0e0e0'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct:(id) => dispatch(fetchSingleProduct(id)),
        addToCart:(id)=>dispatch(addToCart(id))
    }
}

const mapStateToProps = state =>{
    return {
        product: state.product.product,
        loading: state.product.isLoading,
        error: state.product.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SingleProduct);