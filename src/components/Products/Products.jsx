import Img1 from '../../assets/Allproduct/Gitar/g0.png';
import Img2 from '../../assets/Allproduct/Bass/b0.png';
import Img3 from '../../assets/Allproduct/Keyboard/k0.png';
import Img4 from '../../assets/Allproduct/Drum/d0.png';
import Img5 from '../../assets/Allproduct/Dj/dj0.png';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: 'GIGBAG GITAR ELEKTRIK',
		rating: 5.0,
		color: 'Rp. 487,000.00',
		aosDelay: '0',
	},
	{
		id: 2,
		img: Img2,
		title: 'GIGBAG GITAR BASS ELEKTRIK',
		rating: 4.5,
		color: 'Rp. 485,000.00',
		aosDelay: '200',
	},
	{
		id: 3,
		img: Img3,
		title: 'GIGBAG KEYBOARD YAMAHA CK61',
		rating: 4.7,
		color: 'Rp. 673,000.00',
		aosDelay: '400',
	},
	{
		id: 4,
		img: Img4,
		title: 'GIGBAG YAMAHA DTX MULTI12 MULTIPAD',
		rating: 4.4,
		color: 'Rp. 465,000.00',
		aosDelay: '600',
	},
	{
		id: 5,
		img: Img5,
		title: 'GIGBAG DDJ-FLX4 CONTROLLER',
		rating: 4.5,
		color: 'Rp. 635,000.00',
		aosDelay: '800',
	},
];

const Products = () => {
	return (
		<div className="mt-20 mb-12">
			<div className="container">
				{/* Header section */}
				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">
						Produk Terlaris untuk Anda
					</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Products by Nelcish
					</h1>
				</div>
				{/* Body section */}
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
						{/* card section */}
						{ProductsData.map((data) => (
							<div
								data-aos="fade-up"
								data-aos-delay={data.aosDelay}
								key={data.id}
								className="w-full bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group rounded-lg overflow-hidden"
							>
								{/* Image Section */}
								<div className="h-[250px] flex items-center justify-center pt-4">
									<img
										src={data.img}
										alt={data.title}
										className="h-full w-full object-contain transform group-hover:scale-105 duration-300"
									/>
								</div>
								{/* Text Section */}
								<div className="p-4 text-center">
									<h3 className="font-semibold text-lg">{data.title}</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										{data.color}
									</p>
									<div className="flex justify-center items-center gap-1 mt-2">
										<FaStar className="text-yellow-400" />
										<span>{data.rating}</span>
									</div>
								</div>
								{/* Button Section */}
								<Link
									to={`/product/${data.id}`}
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								>
									<button className="bg-primary text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary">
										See Products
									</button>
								</Link>
							</div>
						))}
					</div>
					{/* View All Button */}
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
