import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TemplateSkeleton from './TemplateSkeleton'
import Hal from './Hal'
import image1 from './images/purpleEgg.png'

function App() {
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/TemplateSkeleton'>TemplateSkeleton</Link>
				<Link to='/Hal'>Hal</Link>
			</nav>
			<div className="all">
				<h1>Buff Crypt</h1>
				<p>A place for buff skeletons</p>
				<div className="all">
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
			<div className="imgGallery">
				<img src={image1} alt="a purple egg" />
			</div>
		</Router>
	);
}

export default App;
