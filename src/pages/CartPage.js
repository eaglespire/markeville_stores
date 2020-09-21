import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBJumbotron,
    MDBCardTitle,
    MDBBtn,
    MDBCardText, MDBCardBody, MDBCardImage, MDBBox, MDBIcon
} from 'mdbreact'
import {connect} from 'react-redux'
import cartImage from '../images/cart2.JPG'
import {Link} from "react-router-dom";
import {totalPriceCartItems} from "../containers/cart/actions";
import {getTotalAmount, getTotalUnitsAdded} from "../containers/utility";
import {removeItemFromCart} from "../containers/cart/actions";
import { Spring } from "react-spring/renderprops";

const CartPage = props=>{
    console.log(props)
    return (
        <Spring
            from = {{opacity:0,marginTop:-500}}
            to = {{opacity:1,marginTop:0}}
            config={{delay:1000,duration:1000}}
        >
            {prop => (
                <div style={prop}>
                    <MDBRow className={'justify-content-center'}>
                        <MDBCol className={'mt-5 text-center'}>
                            {
                                props.cartItems.length > 0
                                    ? (
                                        <MDBBox>
                                            <MDBTable>
                                                <MDBTableHead color="primary-color" textWhite>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {props.cartItems.map(item=>(
                                                        <tr key={item.id}>
                                                            <td>
                                                                <img width={'100'} height={'100'} className = 'img-thumbnail' src={"http://localhost:8000" + item.product_img} alt=""/>
                                                            </td>
                                                            <td>
                                                                <Link to={'/products/'+ item.id}>
                                                                    {item.product_name}
                                                                </Link>
                                                            </td>
                                                            <td>&#8358; {item.product_price}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>&#8358; {item.product_price * item.quantity}</td>
                                                            <td>
                                                                <MDBBtn
                                                                    onClick={()=>props.removeItem(item.id)}
                                                                    color="danger">
                                                                    <MDBIcon
                                                                        icon="trash-alt"
                                                                        className="mr-1"
                                                                    />
                                                                    remove
                                                                </MDBBtn>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <td className={'text-right'} colSpan={'4'}>Total Quantity : {getTotalUnitsAdded(props.cartItems)}</td>
                                                        <td>Total Amount : &#8358; {getTotalAmount(props.cartItems,props.totalPriceOfCartItems)} </td>
                                                    </tr>
                                                </MDBTableBody>
                                            </MDBTable>
                                                <Link to={'/checkout'} className={'btn btn-primary'}>
                                                    <MDBIcon icon="cart-arrow-down" className="mr-1 text-white" /> Proceed to checkout
                                                </Link>

                                        </MDBBox>
                                    )
                                    : <MDBJumbotron className="p-0">
                                        <MDBCardImage
                                            className="img-fluid"
                                            src={cartImage}
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle className="h3">Cart Empty</MDBCardTitle>
                                            <MDBCardText>
                                                You have not added any item to cart
                                            </MDBCardText>
                                            <Link to={'/'} className={'btn btn-primary'}>Start Shopping Today</Link>
                                        </MDBCardBody>
                                    </MDBJumbotron>
                            }
                        </MDBCol>
                    </MDBRow>
                </div>
            )}
        </Spring>
    )
}

const mapStateToProps = state => {
    return {
        cartItems:state.cart.cart
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        totalPriceOfCartItems:(total)=>dispatch(totalPriceCartItems(total)),
        removeItem:(id)=>dispatch(removeItemFromCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartPage)
