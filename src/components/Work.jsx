const Work = () => {
	const metodos = [
		{
			id: 0,
			name: "Análisis de necesidades",
			explic: "Realizaré una evaluación exhaustiva de tus objetivos, historial médico y preferencias alimentarias para entender tus necesidades nutricionales específicas.",
		},
		{
			id: 1,
			name: "Diagnóstico y evaluación",
			explic: "Utilizaré herramientas profesionales como el análisis de composición corporal y cálculo de requerimientos nutricionales para diagnosticar tus necesidades y evaluar tu estado de salud actual.",
		},
		{
			id: 2,
			name: "Planificación personalizada",
			explic: "Diseñaré un plan nutricional adaptado a tus necesidades y objetivos, teniendo en cuenta tus preferencias individuales y estableciendo metas realistas.",
		},
		{
			id: 3,
			name: "Seguimiento y ajustes",
			explic: "Realizaremos un seguimiento regular para monitorear tu progreso, brindarte apoyo y realizar ajustes en tu plan nutricional según sea necesario.",
		},
		{
			id: 4,
			name: "Educación y asesoramiento",
			explic: "Te proporcionaré información y educación sobre principios de alimentación saludable, etiquetado de alimentos y técnicas de preparación de comidas. También te brindaré asesoramiento para mantener un estilo de vida saludable a largo plazo.",
		},
		{
			id: 5,
			name: "Colaboración multidisciplinaria",
			explic: " Cuando sea necesario, trabajaré en colaboración con otros profesionales de la salud para ofrecerte un enfoque integral que mejore tu bienestar general.",
		},
	];
	return (
		<section id="trabajo">
			<div className="grid gap-6 lg:grid-cols-3">
				<div className="overflow-hidden rounded lg:flex lg:col-span-3">
					<img
						src="https://images.pexels.com/photos/8844379/pexels-photo-8844379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="object-cover w-full h-auto max-h-96 "
					/>
					<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-moody-blue-300">
						<span className="self-start px-3 py-1 text-sm rounded-full bg-moody-blue-500 text-moody-blue-50">
							Formas de trabajo
						</span>
						<h2 className="text-3xl font-bold md:flex-1">
							Conoce como trabajo con cada uno de mis pacientes
						</h2>
						<p className="text-gray-900">
							*Puede variar segun las necesidades
						</p>
					</div>
				</div>
				{metodos.map((method) => (
					<div
						key={method.id}
						className="p-6 rounded lg:p-8 lg:py-10 bg-moody-blue-400 flex flex-col gap-3"
					>
						<h3 className="inline font-medium text-moody-blue-50">
							{method.name}:
						</h3>
						<p className="inline text-gray-950 text-sm">
							{method.explic}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Work;
