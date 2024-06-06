import "./App.css";
import React, { useState, Suspense, lazy } from "react";
import AllNavbars from "./components/AllNavbars";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
	const [cartItemCount, setCartItemCount] = useState(0);
	const [isPutInCart, setIsPutInCart] = useState(false);
	const addToCart = () => {
		setCartItemCount((prevCount) => prevCount + 1);
	};

	const removeFromCart = () => {
		if (cartItemCount > 0) {
			setCartItemCount((prevCount) => prevCount - 1);
		}
	};
	const LazyComponent = lazy(() => import("./components/AllProducts"));
	const handleRemove = () => {
		setCartItemCount((prevCount) => prevCount - 1);
	};
	return (
		<div className='App'>
			<AllNavbars
				cartItemCount={cartItemCount}
				setCartItemCount={setCartItemCount}
				handleRemove={handleRemove}
				isPutInCart={isPutInCart}
			/>
			<Product
				cartItemCount={cartItemCount}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				isPutInCart={isPutInCart}
				setIsPutInCart={setIsPutInCart}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
