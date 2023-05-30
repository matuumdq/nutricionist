import Blog from "./Blog";
import Method from "./Method";
import Presentation from "./Presentation";
import Results from "./Results";
import Work from "./Work";

const Main = () => {
	return (
		<main>
			<div className="container mx-auto space-y-16">
				<Presentation />
				<Method />
				<Results />
				<Work />
				<Blog />
			</div>
		</main>
	);
};

export default Main;
