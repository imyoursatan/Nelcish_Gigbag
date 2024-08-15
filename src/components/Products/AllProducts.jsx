import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/drum/drum6.png';
import Img2 from '../../assets/drum/drum2.png';
import Img3 from '../../assets/bass/bass2.png';
import { FaStar } from 'react-icons/fa6';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Hero from '../Hero/Hero';

const ProductsData = [
	{
		id: 1,
		images: [Img1, Img2, Img3],
		title: 'Women Ethnic',
		rating: 5.0,
		color: 'white',
	},
	{
		id: 2,
		images: [Img2, Img3, Img1],
		title: 'Women western',
		rating: 4.5,
		color: 'Red',
	},
	{
		id: 3,
		images: [Img3, Img1, Img2],
		title: 'Goggles',
		rating: 4.7,
		color: 'brown',
	},
];

const AllProducts = ({ handleOrderPopup }) => {
	const [currentIndex, setCurrentIndex] = useState(ProductsData.map(() => 0));
	const [animatingIndex, setAnimatingIndex] = useState(null);
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	const navigate = useNavigate();

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
		navigate(`/product/${id}`);
	};

	return (
		<div className="mt-0">
			<Hero handleOrderPopup={handleOrderPopup} />
			<div className="text-center mb-10 max-w-[600px] mx-auto mt-20">
				<h1 className="text-3xl font-bold">All Products</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 px-5">
				{ProductsData.map((data, index) => (
					<div
						key={data.id}
						className="space-y-5 relative flex flex-col items-center dark:bg-gray-800 bg-white p-4 rounded-lg shadow-lg dark:hover:bg-primary w-full max-w-xs"
					>
						<div className="relative overflow-hidden h-72 w-full transition-transform transform">
							<img
								src={data.images[currentIndex[index]]}
								alt=""
								className="object-contain rounded-lg w-full h-full cursor-pointer transition-transform transform hover:scale-105 duration-300"
								onClick={() => handleImageClick(data.id)}
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
							<h3 className="font-semibold">{data.title}</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								{data.color}
							</p>
							<div className="flex items-center gap-1 justify-center">
								<FaStar className="text-yellow-400" />
								<span>{data.rating}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProducts;
