import React from "react";

function Cart({
	cartItemCount,
	cartVisible,
	toggleCartVisibility,
	handleRemove,
	isPutInCart,
}) {
	const handleClose = () => {
		toggleCartVisibility();
	};

	return (
		<div className={`my-cart ${cartVisible ? "visible-cart" : "hide-cart"}`}>
			<img
				className='close'
				src='../images/close.png'
				alt='close'
				onClick={handleClose}
			/>
			<h2>My Cart</h2>
			<h3>Cart Summary</h3>
			{isPutInCart ? (
				Array.from({ length: cartItemCount }, (_, index) => (
					<div className='quantity' key={index}>
						<div className='box flex'>
							<img src='../images/boy2.png' alt='boy' />
							<div className='data flex'>
								<p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
								<span>Quantity: 1</span>
								<div className='price flex-between'>
									<span>9,999 LE</span>
									<span
										style={{ cursor: "pointer" }}
										onClick={() => handleRemove(index)}
									>
										Remove
									</span>
								</div>
							</div>
						</div>
						<p className='total'>Total: 19,999 LE</p>
					</div>
				))
			) : (
				<p className='empty'>The cart is empty</p>
			)}
			<div className='btns flex-between'>
				<button>Review Cart</button>
				<button>Complete Checkout</button>
			</div>
		</div>
	);
}

export default Cart;
