import { IoCloseOutline } from 'react-icons/io5';
import ShopeeLogo from '../../assets/shope.png';
import TokopediaLogo from '../../assets/tokped1.png';
import WhatsAppLogo from '../../assets/wa.png';
import PropTypes from 'prop-types';

const Popup = ({ orderPopup, setOrderPopup }) => {
	return (
		<>
			{orderPopup && (
				<div className="popup">
					<div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
						<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
							{/* header */}
							<div className="flex items-center justify-between">
								<div>
									<h1>Order Now</h1>
								</div>
								<div>
									<IoCloseOutline
										className="text-2xl cursor-pointer"
										onClick={() => setOrderPopup(false)}
									/>
								</div>
							</div>
							{/* button section */}
							<div className="mt-4 flex flex-col gap-4">
								<a
									href="https://shopee.co.id/kezan.bags?categoryId=100637&entryPoint=ShopByPDP&itemId=10146464939"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-full py-2 border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 hover:bg-blue-400"
								>
									<img
										src={ShopeeLogo}
										alt="Shopee"
										className="w-15 h-10 mr-2"
									/>
									<span>Shopee</span>
								</a>
								<a
									href="https://www.tokopedia.com/nelcish"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-full py-2 border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 hover:bg-blue-400"
								>
									<img
										src={TokopediaLogo}
										alt="Tokopedia"
										className="w-12 h-12 mr-2"
									/>
									<span>Tokopedia</span>
								</a>
								<a
									href="https://wa.me/6285759500550?text=Hi%2C%20saya%20tertarik%20untuk%20memesan%20produk%20dari%20toko%20Anda.%20Bisakah%20Anda%20membantu%20saya%3F"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-full py-2 border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 hover:bg-blue-400"
								>
									<img
										src={WhatsAppLogo}
										alt="WhatsApp"
										className="w-9 h-9 mr-2"
									/>
									<span>WhatsApp</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Popup.propTypes = {
	orderPopup: PropTypes.bool.isRequired, // Expecting a boolean value
	setOrderPopup: PropTypes.func.isRequired, // Expecting a function
};

export default Popup;
