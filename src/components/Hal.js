import { useEffect } from "react"

const Hal = () => {
	useEffect(() => {
		console.log("You checked the console, well done!");
	}, [])
	return (
		<div className="hal">
			<h1>Important work being done</h1>
			<h2>Hal's crypt room</h2>
			<p>I've become obsessed with _________ instead of designing my portfolio.  My portfolio is very far from being done, which was not at all the plan.  That said I've got really good at _________.</p>
			<a href='https://www.halcodes.ca'  rel="noopener noreferrer">halcodes.ca</a>
		</div>
	)
}
export default Hal