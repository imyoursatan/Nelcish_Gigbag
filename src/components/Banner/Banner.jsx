import BannerImg from '../../assets/Custom/custom.png';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalOffer, MdPayment } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import CustomImg from '../../assets/wa.png';

const Banner = () => {
	return (
		// Menambahkan id="banner" untuk anchor link
		<div
			id="banner"
			className="min-h-[550px] flex justify-center items-center py-12 sm:py-0"
		>
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
					{/* image section */}
					<div data-aos="zoom-in">
						<img
							src={BannerImg}
							alt="Banner"
							className="max-w-[450px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-contain"
						/>
					</div>

					{/* text details section */}
					<div className="flex flex-col justify-center gap-6 sm:pt-0">
						<h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
							CUSTOM GIGBAG MU!
						</h1>
						<p
							data-aos="fade-up"
							className="text-sm text-gray-500 tracking-wide leading-5"
						>
							Kustomisasi gigbag Anda dengan desain kreatif dan gaya yang sesuai
							dengan karakter musik Anda. Tampil beda dengan gigbag yang
							dirancang khusus untuk Anda!
						</p>
						<div className="flex flex-col gap-4">
							<div data-aos="fade-up" className="flex items-center gap-4">
								<FaShoppingBag className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
								<p>Kualitas Product</p>
							</div>
							<div data-aos="fade-up" className="flex items-center gap-4">
								<TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
								<p>Pengiriman Cepat</p>
							</div>
							<div data-aos="fade-up" className="flex items-center gap-4">
								<MdPayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
								<p>Pembayaran Mudah</p>
							</div>
							<div data-aos="fade-up" className="flex items-center gap-4">
								<MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
								<p>Dapatkan Penawaran</p>
							</div>
							<a
								href="https://wa.me/6285759500550?text=Hi%2C%20saya%20tertarik%20untuk%20memesan%20produk%20dari%20toko%20Anda.%20Bisakah%20Anda%20membantu%20saya%3F"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary hover:scale-105 duration-300 text-white py-3 px-4 rounded-full mt-4 flex items-center gap-2 group-hover:bg-white group-hover:text-primary justify-center text-2xl"
							>
								Custom Sekarang via
								<img
									src={CustomImg}
									alt="WhatsApp Logo"
									className="h-10 w-10 ml-3"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
