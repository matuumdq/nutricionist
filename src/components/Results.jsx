import { useEffect, useState } from "react";

const Results = () => {
	const [quoteIndex, setQuoteIndex] = useState(0);
	const [animateFadeRight, setAnimateFadeRight] = useState(false);

	const opinions = [
		{
			quote: "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
			name: "Leroy",
			company: "CEO of Company",
			imagen: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436180.jpg?w=740&t=st=1685458140~exp=1685458740~hmac=e35b60b52c9bd004c15dc1f6679f98f259c18f651a0d223e77c4e8d9405919bf",
		},
		{
			quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, animi.",
			name: "Juan",
			company: "El PepoCompany",
			imagen: "https://img.freepik.com/psd-gratis/ilustracion-3d-persona-calva-gafas_23-2149436184.jpg?t=st=1685458140~exp=1685458740~hmac=fe133d5ecedfe15722839db61fbc838e500b4896fced5c00d0417ba67263798f",
		},
		{
			quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit assumenda quia totam.",
			name: "MrTeta",
			company: "Atleta",
			imagen: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas_23-2149436185.jpg",
		},
		{
			quote: "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
			name: "Denmigod",
			company: "Enadrya CoFounder",
			imagen: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas_23-2149436189.jpg",
		},
	];

	const autoChangePage = () => {
		setAnimateFadeRight(true);
		setTimeout(() => {
			setQuoteIndex((prevIndex) => (prevIndex + 1) % opinions.length);
			setAnimateFadeRight(false);
		}, 200);
	};

	useEffect(() => {
		const interval = setInterval(autoChangePage, 5000);
		return () => clearInterval(interval);
	}, []);

	const handlePageChange = (index) => {
		setAnimateFadeRight(true);
		setTimeout(() => {
			setQuoteIndex(index);
			setAnimateFadeRight(false);
		}, 200);
	};

	return (
		<section id="resultados">
			<div className="grid mx-auto gap-6 lg:grid-cols-2">
				<div className="">
					<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center text-moody-blue-600">
						Resultados
					</span>
					<img
						src="https://www.mediasource.mx/hubfs/imagenes-blog/Como-puedo-generar-mas-confianza-y-seguridad-en-los-pacientes.png"
						alt="resultados"
						className="object-cover rounded-md my-auto"
					/>
				</div>
				<div className="bg-moody-blue-300">
					<div
						className={`flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 ${
							animateFadeRight ? "animate-fade-right" : ""
						}`}
					>
						<img
							src={opinions[quoteIndex].imagen}
							alt=""
							className="object-cover w-20 h-20 rounded-full "
						/>
						<blockquote className="max-w-lg w-auto text-lg italic font-medium text-center">
							{opinions[quoteIndex].quote}
						</blockquote>
						<div className="text-center text-moody-blue-800">
							<p>{opinions[quoteIndex].name}</p>
							<p>{opinions[quoteIndex].company}</p>
						</div>
						<div className="flex space-x-2">
							<button
								type="button"
								aria-label="Page 1"
								className={`w-2 h-2 rounded-full ${
									quoteIndex === 0
										? "bg-moody-blue-200"
										: "bg-moody-blue-700"
								}`}
								onClick={() => handlePageChange(0)}
							></button>
							<button
								type="button"
								aria-label="Page 2"
								className={`w-2 h-2 rounded-full ${
									quoteIndex === 1
										? "bg-moody-blue-200"
										: "bg-moody-blue-700"
								}`}
								onClick={() => handlePageChange(1)}
							></button>
							<button
								type="button"
								aria-label="Page 3"
								className={`w-2 h-2 rounded-full ${
									quoteIndex === 2
										? "bg-moody-blue-200"
										: "bg-moody-blue-700"
								}`}
								onClick={() => handlePageChange(2)}
							></button>
							<button
								type="button"
								aria-label="Page 4"
								className={`w-2 h-2 rounded-full ${
									quoteIndex === 3
										? "bg-moody-blue-200"
										: "bg-moody-blue-700"
								}`}
								onClick={() => handlePageChange(3)}
							></button>
						</div>
					</div>
				</div>
				<div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-moody-blue-800/70">
					<h2 className="text-2xl md:text-5xl font-bold text-moody-blue-50">
						Atencion personalizada
					</h2>
					<p className="text-moody-blue-50">
						Priorizo tu salud ofreciendo atención personalizada para
						lograr tus objetivos de bienestar y nutrición. Adaptaré
						un plan alimentario a tus necesidades y estilo de vida.
						Juntos estableceremos metas realistas y te brindaré el
						apoyo necesario en tu camino hacia una vida saludable.
						Descubre cómo mi atención personalizada puede
						transformar tu vida hoy.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Results;
