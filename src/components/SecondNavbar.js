import React, { useState } from "react";
import Cart from "./Cart";

function SecondNavbar({
	cartItemCount,
	setCartItemCount,
	handleRemove,
	isPutInCart,
}) {
	const [cartVisible, setCartVisible] = useState(false);

	const handleCartClick = () => {
		setCartVisible(!cartVisible);
	};

	return (
		<>
			<div className='second-navbar flex-between'>
				<div className='search'>
					<input type='text' placeholder='Search' />
					<img src='../images/search.png' alt='search' />
				</div>
				<div className='addidas'>
					<img src='../images/addidas.png' alt='addidas' />
				</div>

				<div className='info flex-between'>
					<div className='cart flex' onClick={handleCartClick}>
						<img src='../images/cart-icon.png' alt='cart' />
						<span>Cart</span>
						<span className='number'>{cartItemCount}</span>
					</div>
					<div className='heart flex'>
						<img src='../images/heart.png' alt='heart' />
						<span>Wishlist</span>
					</div>
					<div className='login flex'>
						<img src='../images/login.png' alt='login' />
						<span>Login</span>
					</div>
				</div>
			</div>
			<Cart
				cartVisible={cartVisible}
				toggleCartVisibility={handleCartClick}
				cartItemCount={cartItemCount}
				setCartItemCount={setCartItemCount}
				handleRemove={handleRemove}
				isPutInCart={isPutInCart}
			/>
		</>
	);
}

export default SecondNavbar;
