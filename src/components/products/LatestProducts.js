import React,{useEffect} from 'react'

import { MDBRow } from "mdbreact";
import {connect} from 'react-redux'
import {fetchProducts} from "../../containers/products/actions";
import SpinnerPage from "../SpinnerPage";
import AlertPage from "../AlertPage";
import ProductCard from "./ProductCard";

function LatestProducts(props) {
    useEffect(()=>{
        props.fetchProducts()
    },[]);

    const error = <AlertPage/>
    const loading = <SpinnerPage/>
    const result = props.products.map(product=>{
        const {id,product_name,product_img,product_description,product_category,product_price} = product
        return (
            <ProductCard
                key={id}
                image={product_img}
                title={product_name}
                description={product_description}
                category = {product_category}
                price = {product_price}
                btnId = {id}
                id = {id}
            />
        )
    })
    return (
            <MDBRow>
                {props.loading ? loading : (props.products ? result : error)}
            </MDBRow>
    )
}

const mapStateToProps = state=>{
    return {
        products:state.products.products,
        loading:state.products.isLoading,
        error:state.products.error,
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        fetchProducts:()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (LatestProducts)