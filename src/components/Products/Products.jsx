import React from 'react';
import Img1 from '../../assets/Allproduct/Drum/d1.png';
import Img2 from '../../assets/keyboard/keyboard1.png';
import Img3 from '../../assets/bass/bass3.png';
import Img4 from '../../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: 'Gigbag Gitar',
		rating: 5.0,
		color: 'white',
		aosDelay: '0',
	},
	{
		id: 2,
		img: Img2,
		title: 'Women western',
		rating: 4.5,
		color: 'Red',
		aosDelay: '200',
	},
	{
		id: 3,
		img: Img3,
		title: 'Goggles',
		rating: 4.7,
		color: 'brown',
		aosDelay: '400',
	},
	{
		id: 4,
		img: Img4,
		title: 'Printed T-Shirt',
		rating: 4.4,
		color: 'Yellow',
		aosDelay: '600',
	},
	{
		id: 5,
		img: Img2,
		title: 'Fashin T-Shirt',
		rating: 4.5,
		color: 'Pink',
		aosDelay: '800',
	},
];

const Products = () => {
	return (
		<div className="mt-14 mb-12">
			<div className="container">
				{/* Header section */}
				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">
						Top Selling Products for you
					</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Products by Nelcish
					</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
						asperiores modi Sit asperiores modi
					</p>
				</div>
				{/* Body section */}
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
						{/* card section */}
						{ProductsData.map((data) => (
							<div
								data-aos="fade-up"
								data-aos-delay={data.aosDelay}
								key={data.id}
								className="space-y-5"
							>
								<img
									src={data.img}
									alt=""
									className="h-[350px] w-[250px] object-cover rounded-md"
								/>
								<div>
									<h3 className="font-semibold">{data.title}</h3>
									<p className="text-sm text-gray-600">{data.color}</p>
									<div className="flex items-center gap-1">
										<FaStar className="text-yellow-400" />
										<span>{data.rating}</span>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* view all button */}
					<div className="flex justify-center">
						<Link to="/all-products">
							<button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
								View All Products
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
