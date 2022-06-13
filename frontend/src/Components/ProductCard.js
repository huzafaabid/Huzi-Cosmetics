import React from 'react';

const ProductCard = (props) => {
    return (
        <div class="card" style={{width: "18rem", backgroundColor:"wheat", marginBottom:"10px"}}>

            <img src={props.pic} class="card-img-top" style={{height: "250px", weight:"200px"}} alt="Service Picture"/>

                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">${props.price}</p>
                </div>

                <button style={{padding:"3px", backgroundColor:"#ffa5a5", color:"black", border:"1px solid gray", borderRadius:"10px"}} onClick={()=>props.handleAdd(props.prod)}>Add to Cart</button>
                
        </div>
    );
}

export default ProductCard;