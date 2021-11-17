import { useEffect, useState } from "react"

const Hal = () => {
	const [madLibProcrast, setMadLibProcrast] = useState('adding readmes')
	const [madLibPrimary, setMadLibPrimary] = useState('intro emails')
	const [darkMode, setDarkMode] = useState(0)

	const handleChangePro = (event) => {
		setMadLibProcrast(event.target.value)
	}
	const handleChangePri = (event) => {
		setMadLibPrimary(event.target.value)
	}

	const toggleDarkMode = () => {
		if (darkMode >= 4) {
			setDarkMode(0)
		}
		else {
			setDarkMode(darkMode + 1)
		}
	}

	useEffect(() => {
		console.log("You checked the console, well done!");
	}, [])

	console.log("Hal component did something");

	return (
		<div className={`hal`}>
			<div className={`wrapper ` + (darkMode === 0 ? 'dark' : (darkMode === 1 ? 'mid' : (darkMode === 2 ? 'mid2' : (darkMode === 3 ? 'mid3' : 'light'))))}>
				<h2>Hal's crypt room</h2>
				<h1>Important work being done</h1>
				<div className="madLibWrapper">
					<form onSubmit={() => { }}>
						<label htmlFor="madLibPrimary">Work activity</label>
						<input type="text" name="madLibPrimary" id="madLibPrimary" value={madLibPrimary} onChange={handleChangePri} />
						<label htmlFor="madLibProcrast">Procrastination activity</label>
						<input type="text" name="madLibProcrast" id="madLibProcrast" value={madLibProcrast} onChange={handleChangePro} />
					</form>
					<p>I've become obsessed with {madLibProcrast} instead of working on my {madLibPrimary}.  My {madLibPrimary} is/are very far from being done, which was not at all the plan.  That said, I've gotten really good at {madLibProcrast}.</p>
				</div>
				<a href='https://www.halcodes.ca' target="_blank" rel="noopener noreferrer">halcodes.ca</a>
				<a href='https://three-react.netlify.app/' target="_blank" rel="noopener noreferrer">Multi user sphere flying game using react, firebase, and threeJS 🔴🟠🟡🟢🔵🟣🟤⚫⚪🟥🟧🟨🟩🟦🟪🟫⬛⬜</a>
				<p>{(darkMode === 0 ? 'Dark' : (darkMode === 1 ? 'Colorful' : (darkMode === 2 ? 'Halloween' : (darkMode === 3 ? 'Winter Holidays' : 'Light'))))} mode is the best mode</p>
				<button onClick={toggleDarkMode}> </button>
				<h1>Always end with an h1</h1>
			</div>
		</div>
	)
}
export default Hal