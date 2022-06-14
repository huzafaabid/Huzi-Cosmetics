import cartProductModel from "../Models/CartProduct.js";

export const AddNewCartProduct = async (req, res) => {
    const cartProduct = new cartProductModel(
        {
            id: req.body.id,
            product: req.body.product,
            quantity: req.body.quantity,
            totalPrice: req.body.totalPrice
        }
    );

    await cartProduct.save();
    res.send("");
}
