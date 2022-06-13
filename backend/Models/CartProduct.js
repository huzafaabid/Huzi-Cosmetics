import mongoose from "mongoose";

const cartProductStructure = mongoose.Schema(
    {
        id: Number,
        product: Object,
        quantity: Number,
        totalPrice: Number
    }
);

const cartProductModel = mongoose.model('CartProduct', cartProductStructure);

export default cartProductModel;