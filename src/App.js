import './App.scss'; // if you want a scss partial, add it to the styles folder and import it in the App.scss file
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TemplateSkeleton from './TemplateSkeleton'
// add a renamed copy of the template skeleton import with your name
import Hal from './Hal'
import image1 from './images/purpleEgg.png'
import image2 from './images/originalBuffSkel.png'

function App() {
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/TemplateSkeleton'>TemplateSkeleton</Link>
				{/* add a renamed copy of Link here */}
				<Link to='/Hal'>Hal</Link>
			</nav>
			<div className="all">
				<h1>Buff Crypt</h1>
				<p>A place for buff skeletons</p>
				<div className="all">
					<Route exact path='/'>
						<TemplateSkeleton />
						{/* add a renamed copy of template skeleton here, and make a copy the TemplateSkeleton.js file */}
						<Hal />
					</Route>
				</div>
			</div>
			<Route path='/TemplateSkeleton'>
				<TemplateSkeleton />
			</Route>
			{/* add a renamed copy of the Route here */}
			<Route path='/Hal'>
				<Hal />
			</Route>
			<div className="imgGallery">
				<h1>Image gallery</h1>
				<img src={image1} alt="a purple egg by Laura B" />
				<img src={image2} alt="original buff skeleton by Laura B" />
			</div>
		</Router>
	);
}

export default App;
