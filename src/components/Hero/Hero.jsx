import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Hero1 from '../../assets/hero/hero1.png';
import Hero2 from '../../assets/hero/hero2.png';

const ImageList = [
	{
		id: 1,
		img: Hero1,
		title: 'Gigbag Guitar by Nelcish',
		description:
			'Gigbag gitar by Nelcish ini tidak hanya memberikan perlindungan maksimal untuk gitar kesayangan Anda, tetapi juga menambah sentuhan stylish dan modern. Dibuat dengan material berkualitas tinggi dan desain ergonomis, gigbag ini memastikan gitar Anda tetap aman dan nyaman dibawa ke mana saja, baik saat latihan, pertunjukan, maupun perjalanan jauh.',
	},
	{
		id: 2,
		img: Hero2,
		title: 'Gigbag Keyboard by Nelcish',
		description:
			'Gigbag keyboard by Nelcish ini dirancang khusus untuk melindungi keyboard Anda dengan sempurna, menggabungkan desain elegan dengan fungsionalitas tinggi. Dilengkapi dengan bantalan tebal dan kompartemen tambahan, gigbag ini memberikan ruang yang cukup untuk aksesori penting. Cocok untuk musisi yang sering berpindah-pindah, gigbag ini memastikan keyboard Anda tetap aman dan mudah dibawa, tanpa mengorbankan gaya.',
	},
];

const Hero = ({ handleOrderPopup }) => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'ease-in-out',
		pauseOnHover: false,
		pauseOnFocus: true,
	};

	return (
		<div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200">
			{/* background pattern */}
			<div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-[-8]"></div>
			{/* hero section */}
			<div className="container pb-8 sm:pb-0">
				<Slider {...settings}>
					{ImageList.map((data) => (
						<div key={data.id}>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								{/* text content section */}
								<div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
									<h1
										data-aos="zoom-out"
										data-aos-duration="500"
										data-aos-once="true"
										className="text-5xl sm:text-6xl lg:text-7xl font-bold"
									>
										{data.title}
									</h1>
									<p
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-delay="100"
										className="text-sm"
									>
										{data.description}
									</p>
									<div
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-delay="300"
									>
										<button
											onClick={handleOrderPopup}
											className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
										>
											Order Now
										</button>
									</div>
								</div>
								{/* image section */}
								<div className="order-1 sm:order-2">
									<div
										data-aos="zoom-in"
										data-aos-once="true"
										className="relative z-10"
									>
										<img
											src={data.img}
											alt=""
											className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

Hero.propTypes = {
	handleOrderPopup: PropTypes.func.isRequired,
};

export default Hero;
