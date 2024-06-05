import React from "react";

function AllProducts() {
	const product = () => {
		return (
			<div className='product'>
				<div className='photo'>
					<img className='icon' src='../images/number.png' alt='number' />
					<img src='../images/main-boy.png' alt='boy' />
				</div>
				<p className='title'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
				</p>
				<div className='details flex-between'>
					<div>
						<span className='price'>9,999 LE</span>
						<p className='bill flex-between'>
							<span className='price2'>9,999 LE</span>
							<span className='discount-percent'>50%</span>
						</p>
					</div>
					<img className='logo' src='../images/addidas.png' alt='addidas' />
				</div>

				<div className='rating '>
					<div className='stars'>
						<img src='../images/star.png' alt='star' />
						<img src='../images/star.png' alt='star' />
						<img src='../images/star.png' alt='star' />
						<img src='../images/star.png' alt='star' />
						<img src='../images/star2.png' alt='star' />
					</div>
					<span>
						<strong>4.9 of 5</strong>
					</span>
				</div>
				<p className='mail'>
					Pickup From: <span>Genena Mall</span>
				</p>
			</div>
		);
	};
	return (
		<div className='all-products'>
			<h3>Similar Products</h3>
			<p>You may like these products also</p>

			<div className='all flex-between'>
				{product()}
				{product()}
				{product()}
				{product()}
			</div>
			<div className='line'></div>
		</div>
	);
}

export default AllProducts;
