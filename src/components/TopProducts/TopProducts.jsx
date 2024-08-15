import React from 'react';
import Img1 from '../../assets/Gitar/gitar.png';
import Img2 from '../../assets/keyboard/keyboard.png';
import Img3 from '../../assets/bass/bass.png';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: 'Gigbag Guitar',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 2,
		img: Img2,
		title: 'Gigbag Keyboard',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 3,
		img: Img3,
		title: 'Gigbag Bass',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

const TopProducts = ({ handleOrderPopup }) => {
	return (
		<div>
			<div className="container">
				{/* Header section */}
				<div className="text-center mb-20 mt-10">
					<h1 data-aos="fade-up" className="text-4xl font-bold ">
						Nelcish Bag Top Products
					</h1>
				</div>
				{/* Body section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
					{ProductsData.map((data) => (
						<div
							key={data.id}
							data-aos="zoom-in"
							className="rounded-3xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mt-15"
						>
							{/* image section */}
							<div className="h-[250px] flex items-center justify-center">
								<img
									src={data.img}
									alt=""
									className="w-25 h-25 transform group-hover:scale-105 duration-300 drop-shadow-md object-contain "
								/>
							</div>
							{/* details section */}
							<div className="p-4 text-center mb-8 mt-7">
								{/* star rating */}
								<div className="w-full flex items-center justify-center gap-1">
									<FaStar className="text-yellow-500" />
									<FaStar className="text-yellow-500" />
									<FaStar className="text-yellow-500" />
									<FaStar className="text-yellow-500" />
									<FaStar className="text-yellow-500" />
								</div>
								<h1 className="text-xl font-bold">{data.title}</h1>
								<p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
									{data.description}
								</p>
								<button
									className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
									onClick={handleOrderPopup}
								>
									See Products
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopProducts;
