import './App.scss'; // if you want a scss partial, add it to the styles folder and import it in the App.scss file
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TemplateSkeleton from './components/TemplateSkeleton'
// add a renamed copy of the template skeleton import with your name
import Azalia from './components/Azalia'
import Bree from './components/Bree'
import Brennan from './components/Brennan'
import Brian from './components/Brian'
import Brodie from './components/Brodie'
import Cal from './components/Cal'
import Cam from './components/Cam'
import Corey from './components/Corey'
import Daniel from './components/Daniel'
import Elisabeth from './components/Elisabeth'
import Hal from './components/Hal'
import Harpreet from './components/Harpreet'
import Iris from './components/Iris'
import Jasmine from './components/Jasmine'
import Jim from './components/Jim'
import Josh from './components/Josh'
import Jun from './components/Jun'
import Kevin from './components/Kevin'
import Linh from './components/Linh'
import Lou from './components/Lou'
import Maxim from './components/Maxim'
import Rob from './components/Rob'
import Ryan from './components/Ryan'
import Sara from './components/Sara'
import Seungmin from './components/Seungmin'
import Solon from './components/Solon'
import Steven from './components/Steven'
import Tasnia from './components/Tasnia'
import Yousef from './components/Yousef'
import Zeynab from './components/Zeynab'
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
	console.log("Main app did something, so mysterious");
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/TemplateSkeleton'>TemplateSkeleton</Link>
				{/* add a renamed copy of Link here */}
				<Link to='/Azalia'>Azalia</Link>
				<Link to='/Bree'>Bree</Link>
				<Link to='/Brennan'>Brennan</Link>
				<Link to='/Brian'>Brian</Link>
				<Link to='/Brodie'>Brodie</Link>
				<Link to='/Cal'>Cal</Link>
				<Link to='/Cam'>Cam</Link>
				<Link to='/Corey'>Corey</Link>
				<Link to='/Daniel'>Daniel</Link>
				<Link to='/Elisabeth'>Elisabeth</Link>
				<Link to='/Hal'>Hal</Link>
				<Link to='/Harpreet'>Harpreet</Link>
				<Link to='/Iris'>Iris</Link>
				<Link to='/Jasmine'>Jasmine</Link>
				<Link to='/Jim'>Jim</Link>
				<Link to='/Josh'>Josh</Link>
				<Link to='/Jun'>Jun</Link>
				<Link to='/Kevin'>Kevin</Link>
				<Link to='/Linh'>Linh</Link>
				<Link to='/Lou'>Lou</Link>
				<Link to='/Maxim'>Maxim</Link>
				<Link to='/Rob'>Rob</Link>
				<Link to='/Ryan'>Ryan</Link>
				<Link to='/Sara'>Sara</Link>
				<Link to='/Seungmin'>Seungmin</Link>
				<Link to='/Solon'>Solon</Link>
				<Link to='/Steven'>Steven</Link>
				<Link to='/Tasnia'>Tasnia</Link>
				<Link to='/Yousef'>Yousef</Link>
				<Link to='/Zeynab'>Zeynab</Link>
			</nav>
			<div className="all">
				<h1>Buff Crypt</h1>
				<p>A place for buff skeletons</p>
				<div className="all">
					<Route exact path='/'>
						<TemplateSkeleton />
						{/* add a renamed copy of template skeleton here, and make a copy the TemplateSkeleton.js file */}
						<Azalia />
						<Bree />
						<Brennan />
						<Brian />
						<Brodie />
						<Cal />
						<Cam />
						<Corey />
						<Daniel />
						<Elisabeth />
						<Hal />
						<Harpreet />
						<Iris />
						<Jasmine />
						<Josh />
						<Jim />
						<Jun />
						<Kevin />
						<Linh />
						<Lou />
						<Maxim />
						<Rob />
						<Ryan />
						<Sara />
						<Seungmin />
						<Solon />
						<Steven />
						<Tasnia />
						<Yousef />
						<Zeynab />
					</Route>
				</div>
			</div>
			<Route path='/TemplateSkeleton'>
				<TemplateSkeleton />
			</Route>
			{/* add a renamed copy of the Route here */}
			<Route path='/Azalia'>
				<Azalia />
			</Route>
			<Route path='/Bree'>
				<Bree />
			</Route>
			<Route path='/Brennan'>
				<Brennan />
			</Route>
			<Route path='/Brian'>
				<Brian />
			</Route>
			<Route path='/Brodie'>
				<Brodie />
			</Route>
			<Route path='/Cal'>
				<Cal />
			</Route>
			<Route path='/Cam'>
				<Cam />
			</Route>
			<Route path='/Corey'>
				<Corey />
			</Route>
			<Route path='/Daniel'>
				<Daniel />
			</Route>
			<Route path='/Elisabeth'>
				<Elisabeth />
			</Route>
			<Route path='/Hal'>
				<Hal />
			</Route>
			<Route path='/Harpreet'>
				<Harpreet />
			</Route>
			<Route path='/Iris'>
				<Iris />
			</Route>
			<Route path='/Jasmine'>
				<Jasmine />
			</Route>
			<Route path='/Jim'>
				<Jim />
			</Route>
			<Route path='/Josh'>
				<Josh />
			</Route>
			<Route path='/Jun'>
				<Jun />
			</Route>
			<Route path='/Kevin'>
				<Kevin />
			</Route>
			<Route path='/Linh'>
				<Linh />
			</Route>
			<Route path='/Lou'>
				<Lou />
			</Route>
			<Route path='/Maxim'>
				<Maxim />
			</Route>
			<Route path='/Rob'>
				<Rob />
			</Route>
			<Route path='/Ryan'>
				<Ryan />
			</Route>
			<Route path='/Sara'>
				<Sara />
			</Route>
			<Route path='/Seungmin'>
				<Seungmin />
			</Route>
			<Route path='/Solon'>
				<Solon />
			</Route>
			<Route path='/Steven'>
				<Steven />
			</Route>
			<Route path='/Tasnia'>
				<Tasnia />
			</Route>
			<Route path='/Yousef'>
				<Yousef />
			</Route>
			<Route path='/Zeynab'>
				<Zeynab />
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
