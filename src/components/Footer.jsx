import { BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
	return (
		<footer>
			<div className="container flex justify-between p-6 mx-auto lg:p-8 bg-moody-blue-500/70">
				<a
					rel="noopener noreferrer"
					href="#"
					className="font-bold text-moody-blue-800 hover:text-moody-blue-200 ease-in duration-300"
				>
					Valentina Ferrer
				</a>
				<div className="flex space-x-2">
					<a
						aria-label="Twitter"
						rel="noopener noreferrer"
						href="#"
						className="flex items-center justify-center"
					>
						<BsInstagram className="w-5 h-5 text-moody-blue-800 hover:text-moody-blue-200 ease-in duration-300 hover:scale-110" />
					</a>
					<a
						aria-label="Twitter"
						rel="noopener noreferrer"
						href="#"
						className="flex items-center justify-center"
					>
						<BsFacebook className="w-5 h-5 text-moody-blue-800 hover:text-moody-blue-200 ease-in duration-300 hover:scale-110" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
