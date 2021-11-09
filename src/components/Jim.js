import { Wave } from 'react-animated-text';
const Jim = () => {
	return (
		<div className="jim">
			<h2>Jim's crypt room</h2>
			<Wave text="Cohort 36 ❤" effect="jump" color="orange" speed="5" effectChange={1.0} />
			<h3>Checkout out the 'after bootcamp' <a href="https://github.com/HackerYou/bootcamp-notes/blob/main/stuff-you-need-to-know/resources-and-cheat-sheets/bootcamp-completed.md">resources</a></h3>
			<h1>BUFF SKELETON</h1>
		</div>
	)
}
export default Jim