import '../styles/steven.scss';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

const Steven = () => {

	const collatzArray = [];
	const options = {
		scales: {
			x: {
				title: {
					display: true,
					text: 'Number in Series',
					font: {
						size: 20
					}
				}
			},
			y: {
				title: {
					display: true,
					text: 'Term Value',
					font: {
						size: 20
					}
				}
			},
		}
	}
	const [number, setNumber] = useState('');
	const [data, setData] = useState({});

	// ===========================================
	// Setting the chart data
	// ===========================================
	const setConfig = () => {

		const labelArray = [];

		for (let i = 1; i <= collatzArray.length; i++) {
			labelArray.push(i);
		}

		const newData = {
			labels: labelArray,
			datasets: [{
				label: 'Value',
				data: [...collatzArray],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			}]
		};

		setData(newData);

	};

	// ===========================================
	// Recursively getting to the end of the series of numbers
	// ===========================================
	const submitHandler = (e) => {
		e.preventDefault();
		collatzArray.length = 0;
		const firstNum = parseInt(number);
		collatzArray.push(firstNum);
		nextNum(firstNum);
	}


	// Recursive function to grab the next number until it loops indefinitely 
	const nextNum = (previousNumber) => {
		let nextNumber = 0;

		if (previousNumber % 2 === 0) {
			nextNumber = previousNumber / 2;
		} else {
			nextNumber = previousNumber * 3 + 1;
		}

		if (collatzArray.length > 6) {
			if (collatzCatch(collatzArray.length - 1) === false) {
				collatzArray.push(nextNumber);
				nextNum(nextNumber);
			} else {
				setConfig();
			}
		} else {
			collatzArray.push(nextNumber);
			nextNum(nextNumber);
		}
	}

	// Catch statement if the last 6 numbers have looped. It will only loop at 4 2 1 and then it will loop indefinitely.
	const collatzCatch = (lastNum) => {
		if (collatzArray[lastNum] === collatzArray[lastNum - 3] &&
			collatzArray[lastNum - 1] === collatzArray[lastNum - 4] &&
			collatzArray[lastNum - 2] === collatzArray[lastNum - 5]
		) {
			return true;
		} else {
			return false;
		}
	};



	return (
		<div className="steven" >


			<header>
				<h2>Steven's crypt room</h2>
				<p>Check out my portfolio at <a href="https://stevenchen.ca" rel="noopener noreferrer">stevenchen.ca</a></p>
				<h1>Fun with Collatz</h1>
			</header>
			<main>
				<h2>What is the Collatz Conjecture?</h2>
				<p>I'm glad you asked.</p>
				<p>The Collatz Conjecture refers to a mathematical proposition, widely believed to be true, that follows these
					rules:</p>
				<ul>
					<li>
						<p>Start with a positive integer (n)</p>
					</li>
					<li>
						<p>If the term is even, divide by 2 to get the next term (i.e. n/2)</p>
					</li>
					<li>
						<p>If the term is odd, multiply by 3 and add 1 (i.e. 3n + 1)</p>
					</li>
				</ul>

				<p>Each sequence may vary widely but will always end in an infinite loop of the numbers 4, 2, 1</p>
				<p>This becomes and infinite loop as 4 / 2 = 2 then 2 / 2 = 1 then 1 * 3 + 1 = 4 then 4 / 2 = 2 and so on and so
					on....</p>

				<form className="input-form" onSubmit={submitHandler}>
					<label for="user-number" class="user-input-label">Go on try and break math...I dare you</label>
					<input type="number" name="user-number" id="user-number" min="0" placeholder="Enter a positive integer" onChange={(e) => setNumber(e.target.value)} value={number}></input>
					<button type="submit" className="submit-collatz">Try it out!</button>
				</form>

				{
					Object.keys(data).length !== 0 ?
						<div className="collatz-chart-container">
							<Line
								data={data}
								options={options} />
						</div>
						: null
				}



			</main>
		</div >
	)
}
export default Steven