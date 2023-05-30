import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="min-h-screen bg-moody-blue-200">
			<div className="p-6 space-y-8 max-w-screen-xl mx-auto">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
