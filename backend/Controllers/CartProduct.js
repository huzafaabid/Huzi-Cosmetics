import cartProductModel from "../Models/CartProduct.js";

export const AddNewCartProduct = async (req, res) => {
    const cartProduct = new cartProductModel(
        {
            id: req.body.id,
            product: {
                id: req.body.product.id,
                name: req.body.product.name,
                price: req.body.product.price,
                image: req.body.product.image
            },
            quantity: req.body.quantity,
            totalPrice: req.body.totalPrice
        }
    );

    await cartProduct.save();
    res.send("");
}
