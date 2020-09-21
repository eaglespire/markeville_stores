import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {
    MDBRow,
    MDBCol,
    MDBBox,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
} from "mdbreact";
import { Spring } from "react-spring/renderprops";


import {fetchAllProducts} from "../containers/products/actions";
import {imageBaseUrl} from "../containers/constant";
import {addToCart} from "../containers/cart/actions";
import {Link} from "react-router-dom";
import ProductCarousel from "../components/products/ProductCarousel";

function Home(props) {
    console.log(props)

    useEffect(()=>{
        props.allProducts()
    },[])

    return (
        <React.Fragment>
            <MDBRow className={'justify-content-center '} style={styles.wrapper}>
                <MDBCol lg={'4'} style={styles.first_column} >
                    <MDBBox className={'h-100 d-flex justify-content-center align-items-center'}>
                        <Spring
                            from={{opacity:0,marginTop: -500}}
                            to = {{opacity:1,marginTop:0}}
                            config={{delay:1000,duration:2000}}
                        >
                            {props => (
                                <div style={props}>
                                    <MDBBox className={'px-2'}>
                            <h1 className="display-3 text-center">
                                Welcome to markeville stores
                            </h1>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda dolores eos hic, laboriosam lib
                                ero minus, odio quis, sapiente vitae voluptatem. Ad amet atque dolore eaque ex ipsam, praesentium?
                            </p>
                            {/*<p className="text-center">Latest Arrivals</p>
                <img src="/images/advert1.JPG" className={'img-fluid'} alt=""/>
                <img src="/images/shoes.jpg" className={'img-fluid'} alt=""/>*/}

                        </MDBBox>
                                </div>
                            )}
                        </Spring>
                            </MDBBox>
                </MDBCol>
                <MDBCol lg={'8'} className={'my-3'} >
                    <ProductCarousel all = {props.all} />
                </MDBCol>
            </MDBRow>
            <MDBRow className={'justify-content-center my-3'}>
                <MDBCol>
                    <p className={'font-weight-bold'}>
                        more products <MDBIcon icon={'arrow-down'} />
                    </p>
                </MDBCol>
            </MDBRow>
            <MDBRow className={'justify-content-center '} style={styles.wrapper}>
                <MDBCol lg={'10'} style={styles.first_column} >
                    <MDBRow>
                    {props.all.length !== 0 && props.all.map((product,index) => {
                        const {product_img,product_name,product_price,product_description,product_category,id} = product
                        return (
                            <MDBCol lg={'3'} md={'4'} sm={'6'} className={'my-4'} key ={index}>
                                <MDBCard key = {id}>
                                    <MDBCardImage className="img-fluid" src={`${imageBaseUrl}${product_img}`}
                                                  waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>
                                            <Link to={`/products/${id}`}>{product_name}</Link>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            {product_description}
                                        </MDBCardText>
                                        <MDBCol lg='12' className='d-flex justify-content-center'>
                    <span  className='px-2 fa-lg li-ic'>
                       &#8358; {product_price}
                    </span>
                                        </MDBCol>
                                        <MDBCol lg='12' className='d-flex justify-content-center'>
                                            <button className='px-2 btn btn-primary' onClick={()=>props.addToCart(id)}>
                                                <MDBIcon icon='shopping-cart'></MDBIcon> Add to cart
                                            </button>
                                        </MDBCol>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })}
                    </MDBRow>
                </MDBCol>
            </MDBRow>

        </React.Fragment>
    )
}

const styles = {
    wrapper:{
        fontFamily:'lora_custom',
        backgroundColor:'#616161'
    },
    first_column:{
        color:'#e0e0e0'
    }
}

const mapStateToProps = state=>{
    return {
        success:state.cart.success,
        all: state.products.all,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allProducts: () => dispatch(fetchAllProducts()),
        addToCart : (id) => dispatch(addToCart(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Home)