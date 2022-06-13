import { getProductDetails } from "../ProductDetails"

const products = getProductDetails();

const CartDetails = [
    //to hold cart items, will be added by add to cart button
]

export function getCartDetails()
{
    return CartDetails;
}