class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});

		// this.setState((prevState) => {
		// 	return {
		// 		count: prevState + 1
		// 	};
		// });

		// A chamada abaixo tambem pode ser utilizada
		// Mas ha uma limitacao de voce pegar um valor antigo
		// A forma como eh utilizada abaixo eh assincrona
		// Logo o resultado esperado era count: 1
		// Mas por conta da assincronia o valor antigo eh
		// o que estava no estagio anterior, ex.: o valor
		// era 15, com o codigo abaixo ao inves de setar para 1
		// ele seta pra 16
		// A funcoes acima em conjunto com a funcao anterior
		// faz o precisamos, define o valor como 1, pois e
		// assincrona a chamada
		// this.setState({
		// 	count: 0
		// })
		// this.setState({
		// 	count: this.state.count + 1
		// })
	}

	render() {
		return (
			<div>
				<h1>Counter: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />,document.getElementById('app'))


// // class -> className

// let count = 0;

// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };

// // Challenge
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };

// const reset = () => {
// 	count = 0; 
// 	renderCounterApp();
// };
// // -- Challenge

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 		<h1>Count: {count}</h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={minusOne}>-1</button>
// 		<button onClick={reset}>reset</button>
// 		</div>
// 		);
// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();