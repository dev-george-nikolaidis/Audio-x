// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import Home from "./pages/home/Home";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/user/register" element={<Register />} />
					<Route path="/user/login" element={<Login />} />
					<Route path="/media/movie/:id" element={<SingleMoviePage />} />
					<Route path="/person/:id" element={<SinglePersonPage />} />
					<Route path="/media/movies" element={<Movies />} />
					<Route path="/media/series" element={<Series />} />
					<Route path="/media/bookmarked" element={<Bookmarked />} />
					<Route path="*" element={<div>Error</div>} /> */}
					<Route path="/" element={<Home />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
