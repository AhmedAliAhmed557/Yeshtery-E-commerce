import React from "react";

function Footer() {
	return (
		<>
			<div className='footer flex'>
				<div className='info'>
					<img className='logo' src='../images/logo2.png' alt='logo' />
					<div className='intro'>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum dolore eu
							feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed dia{" "}
						</p>
						<p>
							m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum dolore eu
							feugiat nulla facilisis at vero eros et accumsan et iusto odio
							dignissim qui blandit
						</p>
					</div>
				</div>

				<div className='subscribe'>
					<h4>Subscribe to our newsletter</h4>
					<div className='box'>
						<input type='email' placeholder='Enter Your Mail' />
						<div className='subscribe-btn flex-center'>
							<span>Subscribe</span>
							<img src='../images/subscribe.png' alt='subscribe' />
						</div>
					</div>
					<div className='contact flex-between'>
						<ul className='links'>
							<li>About Us</li>
							<li>Contact Us</li>
							<li>Track Order</li>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
							<li>Blog</li>
							<li>Sell With Us</li>
							<li>Shipping And Returns</li>
						</ul>

						<div className='social'>
							<ul>
								<li>
									<img
										className='logo'
										src='../images/facebook.png'
										alt='facebook'
									/>
									/YESHTERY
								</li>
								<li>
									<img
										className='logo'
										src='../images/linkedin.png'
										alt='linkedin'
									/>
									/YESHTERY
								</li>
								<li>
									<img
										className='logo'
										src='../images/instgram.png'
										alt='instgram'
									/>
									/YESHTERY
								</li>
								<li>
									<img
										className='logo'
										src='../images/twitter.png'
										alt='twitter'
									/>
									/YESHTERY
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='latest flex'>
				<p>© 2021 yeshtery, all rights reserved.</p>
				<div className='last flex-between flex-grow'>
					<div className='payment flex'>
						<img src='../images/cash.png' alt='cash' />
						<img src='../images/visa.png' alt='visa' />
						<img src='../images/mastercard.png' alt='mastercard' />
					</div>
					<div className='nasnav-logo flex'>
						<span>Powered By</span>
						<img src='../images/nasnav.png' alt='nasnav' />
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
