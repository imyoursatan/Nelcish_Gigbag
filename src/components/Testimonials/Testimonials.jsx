import Slider from 'react-slick';
import Img1 from '../../assets/orang.png';
import Img2 from '../../assets/orang2.jpeg';
import Img3 from '../../assets/orang3.jpeg';
import Img4 from '../../assets/orang4.jpeg';

const TestimonialData = [
	{
		id: 1,
		name: 'a*****0',
		text: 'The best sih ini,bahan tebal bgt...bner2 tebel,kualitas jempol banget gaes... sengaja pilih yg besar bgt biar bisa muat fx dan printilannya semua. Jgn ragu beli dsni pelayanan toko ramah sat set bgitu co g pke lama langsung kirim.sukses terus ya',
		img: Img1,
	},
	{
		id: 2,
		name: 'karinawidiastuti.dr',
		text: 'Buagus puolllll....tasnya kuat dan bisa request logo...nie sdh repeat order🎉🎉🎉',
		img: Img1,
	},
	{
		id: 3,
		name: 'p*****s',
		text: 'Kualitas produk sangat baik, sesuai ekspektasi, sesuai harga.. semoga awet. Thks seller..',
		img: Img2,
	},
	{
		id: 5,
		name: 'febinovianda',
		text: 'alhamdulillah sampai tepat waktu, tasnya bagus dan kokoh..terima kasih.',
		img: Img1,
	},
	{
		id: 6,
		name: 'carlaclaudi',
		text: 'terima kasih paket sudah diterima dengan baik, barang original harga murah terjangkau kualitas premium.',
		img: Img3,
	},
	{
		id: 7,
		name: 'renasusanty82',
		text: 'puas banget sama kualitas bahan jahitan super rapi dan kuat sepadan dengan hargapengiriman juga cepat top mantab pokoknya',
		img: Img4,
	},
	{
		id: 8,
		name: 'bintangzf033',
		text: 'barang sangat bagus sesuai pesanan, bahan bagus, jahitan rapih, packing juga rapih. barang sesuai pesanan🔥🤟',
		img: Img1,
	},
];

const Testimonials = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="py-10 mb-10">
			<div className="container">
				{/* header section */}
				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">
						Apa yang dikatakan pelanggan kami
					</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Testimonials
					</h1>
				</div>
				{/* Testimonial cards */}
				<div data-aos="zoom-in">
					<Slider {...settings}>
						{TestimonialData.map((data) => (
							<div key={data.id} className="my-6">
								<div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
									<div className="mb-4">
										<img
											src={data.img}
											alt=""
											className="rounded-full w-20 h-20"
										/>
									</div>
									<div className="flex flex-col items-center gap-4">
										<div className="space-y-3">
											<p className="text-xs text-gray-500">{data.text}</p>
											<h1 className="text-xl font-bold text-black/80 dark:text-light">
												{data.name}
											</h1>
										</div>
									</div>
									<p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
										,,
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
