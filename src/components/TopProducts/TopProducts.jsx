import Img1 from '../../assets/Gitar/gitar.png';
import Img2 from '../../assets/keyboard/keyboard.png';
import Img3 from '../../assets/bass/bass.png';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: 'Gigbag Guitar',
		description:
			'Gigbag gitar elektrik keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk alat musiknya karena material yang kaku dan empuk pada bagian dalam.',
	},
	{
		id: 2,
		img: Img2,
		title: 'Gigbag Keyboard',
		description:
			'Gigbag keyboard yamaha CK61 keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk alat musiknya karena material yang kaku dan empuk pada bagian dalam.',
	},
	{
		id: 3,
		img: Img3,
		title: 'Gigbag Bass',
		description:
			'Gigbag bass keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman untuk alat musik karena material yang kaku dan empuk di bagian dalam..',
	},
];

const TopProducts = () => {
	return (
		<div>
			<div className="container">
				{/* Header section */}
				<div className="text-center mb-20 mt-10">
					<h1 data-aos="fade-up" className="text-4xl font-bold ">
						NELCISH BAG TOP PRODUCTS
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
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

TopProducts.propTypes = {
	handleOrderPopup: PropTypes.func.isRequired,
};

export default TopProducts;
