// libraries

// local
import { useEffect } from "react";
import { data } from "./data/data";
import { ActionTypes } from "./context/Actions";
import { useGeneralContext } from "./context/GeneralContext";
import Router from "./Router";

const App: React.FC = () => {
	return (
		<>
			<Router />
		</>
	);
};

export default App;
