import React from "react";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
import FourthNavbar from "./FourthNavbar";

function AllNavbars({ cartItemCount, handleRemove, isPutInCart }) {
	return (
		<div className='navigation'>
			<FirstNavbar />
			<SecondNavbar
				cartItemCount={cartItemCount}
				handleRemove={handleRemove}
				isPutInCart={isPutInCart}
			/>
			<ThirdNavbar />
			<FourthNavbar />
		</div>
	);
}

export default AllNavbars;
