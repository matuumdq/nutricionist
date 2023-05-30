const Method = () => {
	return (
		<section id="metodos">
			<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-400">
				Metodologia de trabajo
			</span>
			<h2 className="text-2xl md:text-5xl font-bold lg:text-center dark:text-gray-50">
				Descubre el poder de una alimentación balanceada y alcanza tu
				mejor versión
			</h2>
			<div className="grid gap-6 my-16 lg:grid-cols-3">
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						1
					</div>
					<p className="text-xl flex flex-col">
						<span className="font-bold text-2xl">
							Nutricion Deportiva:
						</span>{" "}
						Planes de alimentación personalizados que aseguran el
						suministro adecuado de nutrientes, mejora la
						recuperación muscular y potencia el rendimiento físico.
					</p>
				</div>
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						2
					</div>
					<p className="text-xl flex flex-col">
						<span className="font-bold text-2xl">
							Nutrición Clínica:
						</span>{" "}
						Diseño planes de alimentación específicos, teniendo en
						cuenta las necesidades nutricionales de los pacientes y
						sus condiciones médicas.
					</p>
				</div>
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						3
					</div>
					<p className="text-xl flex flex-col">
						<span className="font-bold text-2xl">
							Nutrición Pediátrica:
						</span>{" "}
						Brindo asesoramiento a padres y cuidadores para
						garantizar una alimentación saludable y equilibrada,
						promoviendo un crecimiento y desarrollo óptimos.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Method;
