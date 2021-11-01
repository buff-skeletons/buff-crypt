import { useEffect, useState } from "react"

const Hal = () => {
	const [madLibProcrast, setMadLibProcrast] = useState('adding a dark mode toggle')
	const [madLibPrimary, setMadLibPrimary] = useState('job application process')
	const [darkMode, setDarkMode] = useState(true)

	const handleChangePro = (event) => {
		setMadLibProcrast(event.target.value)
	}
	const handleChangePri = (event) => {
		setMadLibPrimary(event.target.value)
	}

	const toggleDarkMode = () => {
		if (darkMode) {
			setDarkMode(false)
		}
		else {
			setDarkMode(true)
		}
	}

	useEffect(() => {
		console.log("You checked the console, well done!");
	}, [])

	console.log("Hal component did something");

	return (
		<div className={`hal ` + (darkMode ? 'dark' : 'light')}>
			<h1>Important work being done</h1>
			<h2>Hal's crypt room</h2>
			<div className="madLibWrapper">
				<form onSubmit={() => { }}>
					<label htmlFor="madLibPrimary">Work activity</label>
					<input type="text" name="madLibPrimary" id="madLibPrimary" value={madLibPrimary} onChange={handleChangePri} />
					<label htmlFor="madLibProcrast">Procrastination activity</label>
					<input type="text" name="madLibProcrast" id="madLibProcrast" value={madLibProcrast} onChange={handleChangePro} />
				</form>
				<p>I've become obsessed with {madLibProcrast} instead of working on my {madLibPrimary}.  My {madLibPrimary} is very far from being done, which was not at all the plan.  That said, I've gotten really good at {madLibProcrast}.</p>
			</div>
			<a href='https://www.halcodes.ca' target="_blank" rel="noopener noreferrer">halcodes.ca</a>
			<p>{darkMode ? 'Dark' : 'Light'} mode is the best mode</p>
			<button onClick={toggleDarkMode}> </button>
			<h1>Always end with an h1</h1>
		</div>
	)
}
export default Hal