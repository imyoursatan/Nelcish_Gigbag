import footerLogo from '../../assets/logo1.png';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="relative bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto text-center">
				{/* Tagline */}
				<h1 className="text-3xl font-bold mb-2">NELCISH. GIGBAG. MUSIC</h1>
				<p className="text-gray-400 mb-6 max-w-md mx-auto">
					Di NELCISH, kami memahami bahwa setiap musisi membutuhkan gigbag yang
					kuat dan bergaya. Dengan dedikasi penuh, kami merancang gigbag yang
					melindungi instrumen Anda dengan kualitas terbaik, sambil tetap
					menghadirkan desain yang memukau. Kepercayaan Anda adalah inspirasi
					kami, dan kami siap mendukung perjalanan musik Anda dengan gigbag yang
					handal dan elegan.
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
					<Link
						to="/all-products"
						className="bg-white text-black px-6 py-2 rounded-full inline-block"
					>
						Product
					</Link>
					<a
						href="https://wa.me/6285759500550?text=Hi%2C%20saya%20tertarik%20untuk%20memesan%20produk%20dari%20toko%20Anda.%20Bisakah%20Anda%20membantu%20saya%3F"
						className="bg-white text-black px-6 py-2 rounded-full inline-block"
						aria-label="Contact"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact
					</a>
				</div>

				{/* Address */}
				<div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-400 mb-8">
					<FaMapMarkerAlt className="text-lg" />
					<p className="text-center sm:text-left">
						Gapura Bumi Bukamukti Jalan. Cicangkudu Kp. Sekeawi RT 03 / RW 14
						Kel. Sukamukti Kec. Katapang Kab. Bandung 40921 Jawa Barat.
					</p>
				</div>

				{/* Logo and Social Icons */}
				<div className="border-t border-gray-700 pt-4 mt-8">
					<div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
						{/* Footer Logo */}
						<div className="mb-4 sm:mb-0">
							<img
								src={footerLogo}
								alt="Nelcish Logo"
								className="max-w-[150px]"
							/>
						</div>

						{/* Copyright */}
						<p className="text-gray-400 mb-4 sm:mb-0">
							&copy; 2024 Nelcish. All rights reserved.
						</p>

						{/* Social Icons */}
						<div className="flex gap-4 text-xl">
							<a
								href="https://www.facebook.com/profile.php?id=100063819120004"
								aria-label="Facebook"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/nelcish.bag/"
								aria-label="Instagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</a>
							<a
								href="https://wa.me/6285759500550?text=Hi%2C%20saya%20tertarik%20untuk%20memesan%20produk%20dari%20toko%20Anda.%20Bisakah%20Anda%20membantu%20saya%3F"
								aria-label="Whatsapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Designer Credit */}
			<div className="absolute bottom-0 inset-x-0 text-gray-400 text-sm text-center sm:text-right py-4">
				<a
					href="https://666zzz.netlify.app/"
					className="hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Design and Build by Teguh
				</a>
			</div>
		</div>
	);
};

export default Footer;
