const Blog = () => {
	const blog = [
		{
			id: 0,
			img: "https://images.pexels.com/photos/15832880/pexels-photo-15832880/free-photo-of-comida-ensalada-sano-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "blog1",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
		{
			id: 1,
			img: "https://images.pexels.com/photos/15832880/pexels-photo-15832880/free-photo-of-comida-ensalada-sano-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "blog2",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/15832880/pexels-photo-15832880/free-photo-of-comida-ensalada-sano-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "blog3",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
	];
	return (
		<section id="blog">
			<div className="container p-6 pt-10 mx-auto rounded lg:px-8 bg-moody-blue-300">
				<h2 className="text-5xl font-bold text-center mt-6">
					Articulos recomendados del mes:
				</h2>
				<img
					src="https://img.freepik.com/foto-gratis/mujer-negocios-alegre-pie-sobre-pared-gris-periodicos_171337-7377.jpg?w=740&t=st=1685472710~exp=1685473310~hmac=79e7d8f52429995d372aef4f6498b85e8fd8d66d5425d5ba45328bfaf09cba9e"
					alt=""
					className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
				/>
				<div className="grid lg:grid-cols-3 gap-3 pt-10">
					{blog.map((item) => (
						<div
							className="p-6 rounded lg:p-8 lg:py-10 bg-moody-blue-400 flex flex-col gap-3 w-full justify-center items-center"
							key={item.id}
						>
							<img
								src={item.img}
								className="max-h-56 w-auto mx-auto rounded-md"
								alt=""
							/>
							<h2>{item.name}</h2>
							<p>{item.text}</p>
							<a
								className="py-2 px-4 bg-moody-blue-600 rounded-lg font-thin text-moody-blue-50 hover:scale-105 hover:bg-moody-blue-700 ease-in duration-300 mt-3"
								href={item.url}
								target="_blank"
								rel="noreferrer"
							>
								Ver Articulo
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
