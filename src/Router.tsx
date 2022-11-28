// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import Stories from "./pages/stories/Stories";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/features" element={<Features />} />
					<Route path="/" element={<Home />} />
					<Route path="/stories" element={<Stories />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
