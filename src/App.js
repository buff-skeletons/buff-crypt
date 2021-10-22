import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TemplateSkeleton from './TemplateSkeleton'
import Hal from './Hal'

function App() {
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/TemplateSkeleton'>TemplateSkeleton</Link>
				<Link to='/Hal'>Hal</Link>
			</nav>
			<div className="App">
				<h1>Buff Crypt</h1>
				<p>A place for buff skeletons</p>
				<div class="all">
					<Route exact path='/'>
						<TemplateSkeleton />
						<Hal />
					</Route>
				</div>
			</div>
			<Route path='/TemplateSkeleton'>
				<TemplateSkeleton />
			</Route>
			<Route path='/Hal'>
				<Hal />
			</Route>
		</Router>
	);
}

export default App;
