'use strict';

var toogle = void 0;

// const onClickButton = () => {
// 	if (toogle) {
// 		toogle = false;
// 	} else {
// 		toogle = true;
// 	}
// 	renderVisibityToggle();
// };

var onClickButton = function onClickButton() {
	toogle = !toogle;
	renderVisibityToggle();
};

var appRoot = document.getElementById('app');

// Meu codigo original abaixo
// {
// 	toogle ? 
// 	<button onClick={onClickButton}>Hide Details</button> 
// 	: <button onClick={onClickButton}>Show Details</button>
// }

var renderVisibityToggle = function renderVisibityToggle() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toogle'
		),
		React.createElement(
			'button',
			{ onClick: onClickButton },
			toogle ? 'Hide Details' : 'Show Details'
		),
		toogle && React.createElement(
			'p',
			null,
			'Hey. These are some details in can now see'
		)
	);

	ReactDOM.render(template, appRoot);
};

renderVisibityToggle();
