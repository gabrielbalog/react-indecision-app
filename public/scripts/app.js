'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.handleAddOne = _this.handleAddOne.bind(_this);
		_this.handleMinusOne = _this.handleMinusOne.bind(_this);
		_this.handleReset = _this.handleReset.bind(_this);
		_this.state = {
			count: 0
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('count');
				var count = JSON.parse(json);

				if (count) {
					this.setState(function () {
						return { count: count };
					});
				}
			} catch (e) {
				// statements
				console.log(e);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.count !== this.state.count) {
				var json = JSON.stringify(this.state.count);
				localStorage.setItem('count', json);
				console.log('x');
			}
		}
	}, {
		key: 'handleAddOne',
		value: function handleAddOne() {
			this.setState(function (prevState) {
				return {
					count: prevState.count + 1
				};
			});
		}
	}, {
		key: 'handleMinusOne',
		value: function handleMinusOne() {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: 'handleReset',
		value: function handleReset() {
			this.setState(function () {
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
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Counter: ',
					this.state.count
				),
				React.createElement(
					'button',
					{ onClick: this.handleAddOne },
					'+1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleMinusOne },
					'-1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleReset },
					'reset'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
