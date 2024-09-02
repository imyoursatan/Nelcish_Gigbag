import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/Allproduct/Gitar/g1.png';
import Img2 from '../../assets/Allproduct/Gitar/g2.png';
import Img3 from '../../assets/Allproduct/Gitar/g3.png';
import Img4 from '../../assets/Allproduct/Bass/b1.png';
import Img5 from '../../assets/Allproduct/Bass/b2.png';
import Img6 from '../../assets/Allproduct/Bass/b3.png';
import Img7 from '../../assets/Allproduct/Keyboard/k1.png';
import Img8 from '../../assets/Allproduct/Keyboard/k2.png';
import Img9 from '../../assets/Allproduct/Keyboard/k3.png';
import Img10 from '../../assets/Allproduct/Drum/d1.png';
import Img11 from '../../assets/Allproduct/Drum/d2.png';
import Img12 from '../../assets/Allproduct/Drum/d3.png';
import Img13 from '../../assets/Allproduct/Dj/dj1.png';
import Img14 from '../../assets/Allproduct/Dj/dj2.png';
import Img15 from '../../assets/Allproduct/Dj/dj3.png';
import { FaStar } from 'react-icons/fa6';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const ProductsData = [
	{
		id: 1,
		images: [Img1, Img2, Img3],
		title: ' GIGBAG GITAR ELEKTRIK',
		rating: 5.0,
	},
	{
		id: 2,
		images: [Img4, Img5, Img6],
		title: ' GIGBAG GITAR BASS ELEKTRIK',
		rating: 4.5,
	},
	{
		id: 3,
		images: [Img7, Img8, Img9],
		title: 'GIGBAG KEYBOARD YAMAHA CK61',
		rating: 4.7,
	},
	{
		id: 4,
		images: [Img10, Img11, Img12],
		title: 'GIGBAG YAMAHA DTX MULTI12 DRUMPAD',
		rating: 4.7,
	},
	{
		id: 5,
		images: [Img13, Img14, Img15],
		title: 'GIGBAG DDJ-FLX4 CONTROLLER ',
		rating: 4.7,
	},
];

const AllProducts = ({ handleOrderPopup }) => {
	const [currentIndex, setCurrentIndex] = useState(ProductsData.map(() => 0));
	const [animatingIndex, setAnimatingIndex] = useState(null);
	const [setIsButtonPressed] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handlePrev = (index) => {
		if (animatingIndex !== null) return;

		setIsButtonPressed(true);
		setAnimatingIndex(index);
		setTimeout(() => {
			const newIndex = currentIndex.map((item, idx) => {
				if (idx === index) {
					return item === 0 ? ProductsData[index].images.length - 1 : item - 1;
				}
				return item;
			});
			setCurrentIndex(newIndex);
			setAnimatingIndex(null);
			setIsButtonPressed(false);
		}, 300);
	};

	const handleNext = (index) => {
		if (animatingIndex !== null) return;

		setIsButtonPressed(true);
		setAnimatingIndex(index);
		setTimeout(() => {
			const newIndex = currentIndex.map((item, idx) => {
				if (idx === index) {
					return item === ProductsData[index].images.length - 1 ? 0 : item + 1;
				}
				return item;
			});
			setCurrentIndex(newIndex);
			setAnimatingIndex(null);
			setIsButtonPressed(false);
		}, 300);
	};

	const handleImageClick = (id) => {
		navigate(`/product/${id}`, { state: { scrollToTop: true } });
	};

	return (
		<div className="mt-0">
			<Hero handleOrderPopup={handleOrderPopup} />
			<div className="text-center mb-10 max-w-[600px] mx-auto mt-20">
				<h1 className="text-3xl font-bold">All PRODUCTS OF NELCISH</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 px-5">
				{ProductsData.map((data, index) => (
					<div
						key={data.id}
						className="space-y-5 relative flex flex-col items-center dark:bg-gray-800 bg-white p-4 rounded-lg shadow-lg dark:hover:bg-primary w-full max-w-xs h-[420px]" // Tetapkan tinggi tetap pada container
					>
						<div className="relative overflow-hidden h-72 w-full transition-transform transform">
							<img
								src={data.images[currentIndex[index]]}
								alt=""
								className="object-contain rounded-lg w-full h-full cursor-pointer transition-transform transform hover:scale-105 duration-300"
								onClick={() => handleImageClick(data.id)} // Navigasi ke produk yang diklik
							/>
						</div>
						{/* Left Button */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								handlePrev(index);
							}}
							className={`absolute top-1/3 transform -translate-y-1/2 left-2 p-1 flex items-center justify-center ${
								animatingIndex === index ? 'pointer-events-none' : ''
							}`}
						>
							<RiArrowLeftSLine
								size={35}
								className="text-black dark:text-white"
							/>
						</button>
						{/* Right Button */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								handleNext(index);
							}}
							className={`absolute top-1/3 transform -translate-y-1/2 right-2 p-1 flex items-center justify-center ${
								animatingIndex === index ? 'pointer-events-none' : ''
							}`}
						>
							<RiArrowRightSLine
								size={35}
								className="text-black dark:text-white"
							/>
						</button>
						<div className="text-center">
							<h3 className="font-bold">{data.title}</h3>
							<div className="flex items-center gap-1 justify-center">
								<FaStar className="text-yellow-400" />
								<span>{data.rating}</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-20">
				<Footer />
			</div>
		</div>
	);
};

AllProducts.propTypes = {
	handleOrderPopup: PropTypes.func.isRequired,
};

export default AllProducts;
