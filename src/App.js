import "./App.css";
import React, { useState } from "react";
import AllNavbars from "./components/AllNavbars";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";

function App() {
	const [cartItemCount, setCartItemCount] = useState(0); // State for the number of items in the cart
	const addToCart = () => {
		setCartItemCount((prevCount) => prevCount + 1);
	};

	const removeFromCart = () => {
		if (cartItemCount > 0) {
			setCartItemCount((prevCount) => prevCount - 1);
		}
	};
	return (
		<div className='App'>
			<AllNavbars cartItemCount={cartItemCount} />
			<Product
				cartItemCount={cartItemCount}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
			/>
			<AllProducts />
			<Footer />
		</div>
	);
}

export default App;
