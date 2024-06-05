import React from "react";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
import FourthNavbar from "./FourthNavbar";

function AllNavbars({ cartItemCount }) {
	return (
		<div className='navigation'>
			<FirstNavbar />
			<SecondNavbar cartItemCount={cartItemCount} />
			<ThirdNavbar />
			<FourthNavbar />
		</div>
	);
}

export default AllNavbars;
