import "./App.css";
import React, { useState, Suspense, lazy } from "react";
import AllNavbars from "./components/AllNavbars";
import Footer from "./components/Footer";
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
	const LazyComponent = lazy(() => import("./components/AllProducts"));
	return (
		<div className='App'>
			<AllNavbars cartItemCount={cartItemCount} />
			<Product
				cartItemCount={cartItemCount}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
