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
			<a href='https://www.halcodes.ca' target="_blank" rel="noopener noreferrer">halcodes.ca</a>
			<p>Dark mode is the best mode</p>
			<h1>Always end with an h1</h1>
		</div>
	)
}
export default Hal