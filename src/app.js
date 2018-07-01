console.log('App is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'This is some Info'
};

var template = (
<div>	
	<h1>{app.title}</h1>
	<p>{app.subtitle}</p>
	<ol>
		<li>Item one</li>
		<li>Item two</li>
	</ol>
</div>
);

var user = {
	name: 'Gabriel Balog',
	age: 21,
	location: 'São Paulo'
};

var templateTwo = (
<div>
	<h1>{user.name}</h1>
	<p>Age: {user.age}</p>
	<p>Location: {user.location}</p>
</div>

);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);