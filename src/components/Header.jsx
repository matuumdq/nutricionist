const Header = () => {
	return (
		<header className="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-moody-blue-400">
			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
				Home
			</a>
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">
					<a rel="noopener noreferrer" href="#metodos">
						Metodos
					</a>
					<a rel="noopener noreferrer" href="#resultados">
						Resultados
					</a>
					<a rel="noopener noreferrer" href="#trabajo">
						Formas de trabajo
					</a>
					<a rel="noopener noreferrer" href="#blog">
						Blog
					</a>
				</div>
				<a
					href="https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20estoy%20interesado%20en%20una%20consulta"
					className="px-4 py-2 rounded-md bg-moody-blue-200 text-gray-900"
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
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</header>
	);
};

export default Header;
