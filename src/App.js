import './App.scss'; // if you want a scss partial, add it to the styles folder and import it in the App.scss file
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TemplateSkeleton from './TemplateSkeleton'
// add a renamed copy of the template skeleton import with your name
import Hal from './Hal'
import image1 from './images/purpleEgg.png'
import image2 from './images/originalBuffSkel.png'
import image3 from './images/buffSkeletonLovesYou.png'
import image4 from './images/buff-skelly.jpg'
import image5 from './images/buff-skelly-bonus.jpg'
import image6 from './images/boxy.png'
import image7 from './images/buffSkel.png'
import image8 from './images/hilariousDog.png'
import image9 from './images/jamBoard.png'
import image10 from './images/kissy.png'
import image11 from './images/lauraCookies.png'
import image12 from './images/safi.png'
import image13 from './images/saladCommunism.png'
import image14 from './images/terribleJob.jpg'

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
				<img src={image3} alt="" />
				<img src={image4} alt="" />
				<img src={image5} alt="" />
				<img src={image6} alt="" />
				<img src={image7} alt="" />
				<img src={image8} alt="" />
				<img src={image9} alt="" />
				<img src={image10} alt="" />
				<img src={image11} alt="" />
				<img src={image12} alt="" />
				<img src={image13} alt="" />
				<img src={image14} alt="" />
				<img src='https://cdn.discordapp.com/attachments/879388796003696684/901196798503309362/album_2021-10-22_15-48-20.gif' alt="original buff skeleton by Laura B" />
			</div>
		</Router>
	);
}

export default App;
