import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AllProducts from './components/Products/AllProducts';
import ListProduct from './components/Products/ListProduct'; // Import komponen ListProduct
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

const App = () => {
	const [orderPopup, setOrderPopup] = React.useState(false);

	const handleOrderPopup = () => {
		setOrderPopup(!orderPopup);
	};

	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<Router>
			<div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
				<Navbar handleOrderPopup={handleOrderPopup} />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Hero handleOrderPopup={handleOrderPopup} />
								<TopProducts handleOrderPopup={handleOrderPopup} />
								<Products />
								<Banner />
								<Subscribe />
								<Testimonials />
								<Footer />
								<Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
							</>
						}
					/>
					<Route
						path="/all-products"
						element={<AllProducts handleOrderPopup={handleOrderPopup} />}
					/>
					<Route path="/product/:id" element={<ListProduct />} />{' '}
					{/* Tambahkan rute ini */}
				</Routes>
			</div>
		</Router>
	);
};

export default App;
