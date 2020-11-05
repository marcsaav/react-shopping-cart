import React from 'react';

const Item = props => {
	const {cart, setCart} = props

	const removeItem = e => {
		setCart(cart.filter((item) => {
			if(item.id !== props.id){
				return item
			} else {
				return null
			}
		}))
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
