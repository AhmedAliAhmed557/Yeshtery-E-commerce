import React from "react";

function Product({ cartItemCount, addToCart, removeFromCart }) {
	return (
		<div className='product-info flex-between'>
			<div className='gallery'>
				<div className='main'>
					<img className='icon' src='../images/number.png' alt='number' />
					<img src='../images/boy1.png' alt='boy' />
				</div>
				<div className='slider flex-between'>
					<img src='../images/left2.png' alt='left' />
					<div className='imgs'>
						<img src='../images/boy1.png' alt='boy' />
						<img src='../images/boy2.png' alt='boy' />
						<img src='../images/boy3.png' alt='boy' />
						<img src='../images/boy4.png' alt='boy' />
					</div>
					<img src='../images/right2.png' alt='right' />
				</div>
			</div>

			<div className='details '>
				<div className='title'>
					<div className='top'>
						<img className='logo' src='../images/addidas.png' alt='addidas' />
						<p>
							Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
							adipiscing elit.
						</p>
						<span>Men</span>
					</div>
					<div className='rating'>
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
						<span>22 Rates </span>
					</div>
					<div className='price'>
						<span>9,999 LE</span>
						<span>9,999 LE</span>
						<span>30% Off</span>
					</div>
				</div>

				<div className='size'>
					<h4>Size</h4>
					<div className='circles flex'>
						{["Small", "Medium", "Large", "XLarge", "XXLarge"].map((size) => (
							<div key={size} className={`circle ${size} flex-center`}>
								<span className={size}>{size}</span>
							</div>
						))}
					</div>
				</div>

				<div className='color'>
					<h4>Color</h4>
					<div className='circles flex'>
						{["player", "player2"].map((color) => (
							<div key={color} className='circle flex'>
								<img src={`../images/${color}.png`} alt='' />
							</div>
						))}
					</div>
				</div>
				<div className='quantity'>
					<h4>Quantity</h4>
					<div className='cart-options flex'>
						<div className='circles flex'>
							<div className='cart'>
								<span className='minus' onClick={removeFromCart}>
									-
								</span>
								<span>{cartItemCount}</span>
								<span className='plus' onClick={addToCart}>
									+
								</span>
							</div>
						</div>
						<div className='btns'>
							<button className='add'>Add to cart</button>
							<button className='store'>Pickup From Store</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
