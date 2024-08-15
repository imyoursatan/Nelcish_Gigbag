import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopeeIcon from '../../assets/shope.png'; // Sesuaikan path ini
import TokopediaIcon from '../../assets/tokped.png'; // Sesuaikan path ini
import Img1 from '../../assets/drum/drum6.png';
import Img2 from '../../assets/drum/drum2.png';
import Img3 from '../../assets/bass/bass2.png';

const products = [
	{
		id: 1,
		title: 'Gigbag Guitar Electric',
		images: [Img1, Img2, Img3],
		price: 'Rp. 487,000.00',
		description:
			'Gigbag gitar elektrik keren dan stylish ini adalah pilihan tepat...',
		shopeeLink: 'https://shopee.co.id/your-product-link',
		tokopediaLink: 'https://www.tokopedia.com/your-product-link',
	},
	{
		id: 2,
		title: 'Women Western',
		images: [Img2, Img3, Img1],
		price: 'Rp. 300,000.00',
		description: 'Deskripsi produk Women Western...',
		shopeeLink: 'https://shopee.co.id/another-product-link',
		tokopediaLink: 'https://www.tokopedia.com/another-product-link',
	},
	{
		id: 3,
		title: 'Goggles',
		images: [Img3, Img1, Img2],
		price: 'Rp. 200,000.00',
		description: 'Deskripsi produk Goggles...',
		shopeeLink: 'https://shopee.co.id/yet-another-product-link',
		tokopediaLink: 'https://www.tokopedia.com/yet-another-product-link',
	},
];

const ListProduct = () => {
	const { id } = useParams(); // Mengambil id dari URL
	const product = products.find((p) => p.id === parseInt(id)); // Mencari produk berdasarkan id
	const [selectedImage, setSelectedImage] = useState(product.images[0]); // Menyimpan gambar yang dipilih

	if (!product) {
		return <p>Product not found</p>; // Menampilkan pesan jika produk tidak ditemukan
	}

	return (
		<div className="container mx-auto mt-10 p-5 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex flex-col md:flex-row gap-10 p-5">
				{/* Bagian Kiri: Thumbnail Gambar dengan Latar Belakang Abu */}
				<div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
					{product.images.map((image, index) => (
						<div
							key={index}
							className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex justify-center items-center"
						>
							<img
								src={image}
								alt={`Product ${index}`}
								className="w-20 h-20 object-cover rounded-lg cursor-pointer"
								onClick={() => setSelectedImage(image)}
							/>
						</div>
					))}
				</div>

				{/* Bagian Tengah: Gambar Utama */}
				<div className="flex justify-center flex-grow">
					<img
						src={selectedImage}
						alt={product.title}
						className="w-full max-w-lg h-[400px] object-cover rounded-lg"
					/>
				</div>

				{/* Bagian Kanan: Detail Produk */}
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl font-bold mb-4">{product.title}</h1>
					<p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
						{product.price}
					</p>
					<p className="mb-6">{product.description}</p>
					<div className="flex items-center space-x-4 mb-10">
						<a
							href={product.shopeeLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-36 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 text-black dark:text-white font-bold rounded-lg border border-gray-300 dark:border-gray-600"
						>
							<img src={ShopeeIcon} alt="Shopee" className="w-6 h-6 mr-2" />
							<span>Shop Via</span>
						</a>
						<a
							href={product.tokopediaLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-36 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 text-black dark:text-white font-bold rounded-lg border border-gray-300 dark:border-gray-600"
						>
							<img
								src={TokopediaIcon}
								alt="Tokopedia"
								className="w-6 h-6 mr-2"
							/>
							<span>Shop Via</span>
						</a>
					</div>
					<h3 className="text-2xl font-semibold">Description</h3>
					<p className="text-gray-700 dark:text-gray-300 mt-2">
						{product.description}
					</p>
					<h3 className="text-2xl font-semibold mt-6">Reviews</h3>
					{/* Review Content */}
				</div>
			</div>
		</div>
	);
};

export default ListProduct;
