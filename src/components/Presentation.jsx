const Presentation = () => {
	return (
		<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
			<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-moody-blue-400 flex flex-col items-center justify-center gap-4">
				<span className="block mb-2 text-moody-blue-50 italic">
					Transforma tu salud a través de una nutrición personalizada
				</span>
				<h1 className="text-5xl font-extrabold">Valentina Ferrer</h1>
				<p className="my-8">
					<span className="font-medium ">Nutricionista. </span>
					Especializada en nutricion deportiva.
				</p>
			</div>
			<img
				src="https://images.pexels.com/photos/8845070/pexels-photo-8845070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
				className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
			/>
		</section>
	);
};

export default Presentation;
