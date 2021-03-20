import { Router } from "@reach/router";
import Homeworld from "./components/Homeworld/Homeworld";
import Viewtainer from "./components/Viewtainer/Viewtainer";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<Homeworld path='/'>
					<Viewtainer path=':resource/*id' />
				</Homeworld>
			</Router>
		</div>
	);
}

export default App;
