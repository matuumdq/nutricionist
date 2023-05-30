import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [nav, setNav] = useState(false);
	return (
		<header className="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-moody-blue-400">
			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
				Home
			</a>
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4 ">
					<a
						rel="noopener noreferrer"
						href="#metodos"
						className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
					>
						Metodos
					</a>
					<a
						rel="noopener noreferrer"
						href="#resultados"
						className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
					>
						Resultados
					</a>
					<a
						rel="noopener noreferrer"
						href="#trabajo"
						className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
					>
						Formas de trabajo
					</a>
					<a
						rel="noopener noreferrer"
						href="#blog"
						className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
					>
						Blog
					</a>
				</div>
				<a
					href="https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20estoy%20interesado%20en%20una%20consulta"
					className="px-4 py-2 rounded-md bg-moody-blue-200 text-gray-900 hover:bg-moody-blue-700 hover:text-moody-blue-50 ease-in duration-300"
					target="_blank"
					rel="noreferrer"
				>
					Agenda tu turno
				</a>
			</div>
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6 dark:text-gray-50"
					onClick={() => setNav(!nav)}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-moody-blue-400 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer text-moody-blue-800 hover:text-moody-blue-900 hover:scale-110 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<a href="/" onClick={() => setNav(false)}>
					<img
						src="https://i.pinimg.com/564x/e0/9b/5e/e09b5edb47e4475f93a8c59fee1a8456.jpg"
						alt="nutricionist"
						className="h-32 w-auto mx-auto mt-4 rounded-full"
					/>
				</a>
				<nav>
					<ul className="flex flex-col px-4 py-8 gap-6 text-xl text-gray-800">
						<a
							rel="noopener noreferrer"
							href="#metodos"
							onClick={() => setNav(false)}
							className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
						>
							Metodos
						</a>
						<a
							rel="noopener noreferrer"
							href="#resultados"
							onClick={() => setNav(false)}
							className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
						>
							Resultados
						</a>
						<a
							rel="noopener noreferrer"
							href="#trabajo"
							onClick={() => setNav(false)}
							className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
						>
							Formas de trabajo
						</a>
						<a
							rel="noopener noreferrer"
							href="#blog"
							onClick={() => setNav(false)}
							className="text-moody-blue-100 hover:text-moody-blue-800 ease-in duration-300"
						>
							Blog
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20estoy%20interesado%20en%20una%20consulta"
							className="px-4 py-2 rounded-md bg-moody-blue-200 hover:bg-moody-blue-700 hover:text-moody-blue-50 ease-in duration-300 hover:scale-105 text-center"
							target="_blank"
							rel="noreferrer"
							onClick={() => setNav(false)}
						>
							Agenda tu turno
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
