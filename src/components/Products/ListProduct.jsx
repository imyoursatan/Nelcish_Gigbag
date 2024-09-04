import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShopeeIcon from '../../assets/shope.png';
import TokopediaIcon from '../../assets/tokped1.png';
import Img1 from '../../assets/Allproduct/Gitar/g0.png';
import Img2 from '../../assets/Allproduct/Gitar/g2.png';
import Img3 from '../../assets/Allproduct/Gitar/g3.png';
import Img4 from '../../assets/Allproduct/Gitar/g4.png';
import Img5 from '../../assets/Allproduct/bass/b0.png';
import Img6 from '../../assets/Allproduct/bass/b2.png';
import Img7 from '../../assets/Allproduct/bass/b3.png';
import Img8 from '../../assets/Allproduct/bass/b4.png';
import Img9 from '../../assets/Allproduct/Keyboard/k0.png';
import Img10 from '../../assets/Allproduct/Keyboard/k2.png';
import Img11 from '../../assets/Allproduct/Keyboard/k3.png';
import Img12 from '../../assets/Allproduct/Keyboard/k4.png';
import Img13 from '../../assets/Allproduct/Drum/d0.png';
import Img14 from '../../assets/Allproduct/Drum/d2.png';
import Img15 from '../../assets/Allproduct/Drum/d3.png';
import Img16 from '../../assets/Allproduct/Drum/d4.png';
import Img17 from '../../assets/Allproduct/Dj/dj0.png';
import Img18 from '../../assets/Allproduct/Dj/dj2.png';
import Img19 from '../../assets/Allproduct/Dj/dj3.png';
import Img20 from '../../assets/Allproduct/Dj/dj4.png';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

const products = [
	{
		id: 1,
		title: ' GIGBAG GITAR ELEKTRIK by NELCISH',
		images: [Img1, Img2, Img3, Img4],
		price: 'Rp. 487,000.00',
		description:
			'Gigbag gitar elektrik keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk alat musiknya karena material yang kaku dan empuk pada bagian dalam.',
		detail: [
			'Ransel gendongan yang kuat dan nyaman',
			'Bahan cordura hitam',
			'Tekstur bahan kuat dan kaku',
			'Bagian dalam terdapat perekat dan bantalan',
			'Bagian samping ada pegangan handle',
		],
		shopeeLink:
			'https://shopee.co.id/product/398504495/23017528541?d_id=4643e&uls_trackid=50kmcba500oe&utm_content=3MZ9yG9TzA24zZeiF9Lo9o98meEB',
		tokopediaLink:
			'https://www.tokopedia.com/kezanbags/softcase-gigbag-tas-gitar-elektrik-bag-case-guitar-electric-by-nelcish?utm_source=whatsapp&utm_medium=share&utm_campaign=pdp-h0is0jo8yaoe-7477130526-0&_branch_match_id=1299506983404943546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvW9wj1iUgpCHEv9UkCAKiePz0iAAAA',
	},
	{
		id: 2,
		title: 'GIGBAG GITAR BASS ELEKTRIK by NELCISH',
		images: [Img5, Img6, Img7, Img8],
		price: 'Rp. 485,000.00',
		description:
			'Gigbag bass keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman untuk alat musik karena material yang kaku dan empuk di bagian dalam.',
		detail: [
			'Terdapat tali gendongan yang kuat dan nyaman',
			'Bahan kordura hitam dan abu tua',
			'Tekstur body kuat dan kaku',
			'Pada bagian dalam terdapat perekat  untuk menempelkan bass agar diam tidak goyang',
		],
		shopeeLink:
			'https://shopee.co.id/product/278768172/8562210102?d_id=dcd5b&uls_trackid=50kmlamh011r&utm_content=2NnxuiBMDw1TeA8bzhYPGsaAjNdd',
		tokopediaLink:
			'https://www.tokopedia.com/nelcish/tas-softcase-gigbag-gitar-bass-elektrik-berkualitas-by-nelcish?utm_source=whatsapp&utm_medium=share&utm_campaign=PDP-109917767-1692022157-030824-RKdhUE&_branch_match_id=1299506983404943546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWNwoLMIpM97Xw9kkCANhZZGYiAAAA',
	},
	{
		id: 3,
		title: 'GIGBAG KEYBOARD YAMAHA CK61 by NELCISH',
		images: [Img9, Img10, Img11, Img12],
		price: 'Rp. 673,000.00',
		description:
			'Gigbag keyboard yamaha CK61 keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk alat musiknya karena material yang kaku dan empuk pada bagian dalam',
		detail: [
			'Ransel gendongan yang kuat dan nyaman',
			'Bahan cordura hitam',
			'Tekstur bahan kuat dan kaku ',
			'Bagian samping ada pegangan handle',
		],
		shopeeLink:
			'https://shopee.co.id/product/915079449/22474417505?d_id=1c433&uls_trackid=50kmr97800pv&utm_content=23gGtcFmsjAWPmrHTTcagQxNMBj5',
		tokopediaLink:
			'https://www.tokopedia.com/nelcish/tas-gigbag-softcase-keyboard-yamaha-ck61-synthesizer-bag-case-nelcish?utm_source=whatsapp&utm_medium=share&utm_campaign=pdp-wbvejzles9u8-10773532096-0&_branch_match_id=1299506983404943546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWdwzzNA4L945w9kkCAMG9KoUiAAAA',
	},
	{
		id: 4,
		title: 'GIGBAG YAMAHA DTX MULTI12 MULTIPAD by NELCISH',
		images: [Img13, Img14, Img15, Img16],
		price: 'Rp. 465,000.00',
		description:
			'Gigbag multi12 keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk alat musiknya karena material yang kaku dan empuk pada bagian dalam.',
		detail: [
			'Ransel gendongan yang kuat dan nyaman',
			'Bahan cordura hitam',
			'Tekstur bahan kuat dan kaku',
			'Bagian dalam terdapat sekat pemisah drum dan pedal',
			'Bagian samping atas ada pegangan handle',
			'Bisa masuk pedal yang ukuran kecil',
			'Size : 46 x 36 x 10 cm',
		],
		shopeeLink:
			'https://shopee.co.id/product/278768172/17186997875?d_id=4643e&uls_trackid=50kmv4qh00li&utm_content=3MZ9yG9UAqagPjPSWr95XavGoHFM',
		tokopediaLink:
			'https://www.tokopedia.com/nelcish/softcase-gigbag-tas-yamaha-dtx-multi12-cover-drumpad-elektrik-nelcish?utm_source=whatsapp&utm_medium=share&utm_campaign=pdp-ql5bksw67ri2-6702480613-0&_branch_match_id=1299506983404943546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWzzT2MExLDoh09kkCAEYu4UMiAAAA',
	},
	{
		id: 5,
		title: 'GIGBAG DDJ-FLX4 CONTROLLER by NELCISH',
		images: [Img17, Img18, Img19, Img20],
		price: 'Rp. 635,000.00',
		description:
			'Gigbag khusus DDJ flx4 yang keren dan stylis ini adalah pilihan tepat, selain bentuk dan model yang elegan gigbag ini sangat aman dan nyaman untuk melindungi pioneer dj karena material yang kaku keras tapi empuk pada bagian dalam.',
		detail: [
			'Ransel gendongan yang kuat dan nyaman',
			'Bahan cordura hitam',
			'Tekstur bahan kuat dan kaku',
			'Pada bagian dalam terdapat perekat',
			'Bagian samping ada pegangan handle',
			'Size : 48 X 27 X 6 cm',
		],
		shopeeLink:
			'https://shopee.co.id/product/278768172/20666239362?d_id=dcd5b&uls_trackid=50kn6nbj01pv&utm_content=2NnxuiBN3HqSUPfxAH9s5hxrjs5H',
		tokopediaLink:
			'https://www.tokopedia.com/nelcish/gigbag-softcase-tas-dj-ddj-flx4-controller-bag-case-dj-by-nelcish?utm_source=whatsapp&utm_medium=share&utm_campaign=PDP-109917767-7113347667-250824-RKdhUE&_branch_match_id=1299506983404943546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWL0y2zE3N8QnO8U0CAKy%2BiCsiAAAA',
	},
];

const ListProduct = () => {
	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const [selectedImage, setSelectedImage] = useState(product.images[0]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!product) {
		return <p>Product not found</p>;
	}

	return (
		<div className="w-full mx-auto mt-20 dark:bg-gray-700 dark:text-gray-100">
			<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 p-10">
				{/* Bagian Tengah: Gambar Utama */}
				<div className="flex justify-center flex-grow">
					<img
						src={selectedImage}
						alt={product.title}
						className="w-auto max-w-lg h-auto object-contain rounded-lg"
					/>
				</div>

				{/* Bagian Kanan: Detail Produk */}
				<div className="flex flex-col justify-center lg:ml-5 mt-5 lg:mt-0 mr-2">
					{/* Bagian Bawah: Thumbnail Gambar */}
					<div className="flex justify-center space-x-4 mt-4 mb-5 order-first lg:order-none">
						{product.images.map((image, index) => (
							<div
								key={index}
								className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg flex justify-center items-center"
							>
								<img
									src={image}
									alt={`Product ${index}`}
									className="w-20 h-20 object-contain rounded-lg cursor-pointer"
									onClick={() => setSelectedImage(image)}
								/>
							</div>
						))}
					</div>
					<h1 className="text-4xl font-bold mb-4">{product.title}</h1>
					<p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
						{product.price}
					</p>
					<p className="mb-6">{product.description}</p>
					<h3 className="text-2xl font-semibold">Detail</h3>
					<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 mb-6">
						{product.detail.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<div className="flex items-center space-x-4 mb-10">
						<a
							href={product.shopeeLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-36 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 text-black dark:text-white font-bold rounded-lg border border-gray-300 dark:border-gray-600 mt-3"
						>
							<span>Shop Via</span>
							<img src={ShopeeIcon} alt="Shopee" className="w-12 h-8 " />
						</a>
						<a
							href={product.tokopediaLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-36 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 text-black dark:text-white font-bold rounded-lg border border-gray-300 dark:border-gray-600 mt-3"
						>
							<span>Shop Via</span>
							<img src={TokopediaIcon} alt="Tokopedia" className="w-10 h-10 " />
						</a>
					</div>
				</div>
			</div>
			<Testimonials />
			<div className="w-full m-0 p-0">
				<Footer />
			</div>
		</div>
	);
};

export default ListProduct;
