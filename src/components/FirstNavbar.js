import React from "react";

function FirstNavbar() {
	return (
		<div className='first-navbar flex-between'>
			<div className='one flex-between'>
				<img src='../images/toggle.png' alt='logo' />
				<img src='../images/logo.png' alt='toggle' />
			</div>

			<div className='two flex-between'>
				<img src='../images/left.png' alt='left' />
				<p className='shop-now'>
					Valentine’s Day Offers! Buy Two Get One Free Shop Now{" "}
					<span>Shop Now</span>
				</p>
				<img src='../images/right.png' alt='right' />
			</div>

			<div className='three flex-between'>
				<div className='contact flex'>
					<img src='../images/phone.png' alt='contact' />
					<span>Contact Us</span>
				</div>
				<div className='order flex'>
					<img src='../images/order.png' alt='order' />
					<span>Track Order</span>
				</div>
				<div className='location flex'>
					<img src='../images/location.png' alt='location' />
					<span>Find A Store</span>
				</div>
			</div>
		</div>
	);
}

export default FirstNavbar;
