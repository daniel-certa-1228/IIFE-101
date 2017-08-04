console.log( "iife1.js" );

var hello = (function(taco) {

	taco.getJson = () => {

		let xhr = new XMLHttpRequest();
		xhr.addEventListener("load", display);
		xhr.addEventListener("error", oops);

		xhr.open('GET', '../students.json');
		xhr.send();

		function display() {
			let data = JSON.parse(this.responseText);
			console.log( "data", data );
		}

		function oops(error) {
			console.log( "there was an error", error );
		}
	}

	return taco

})(hello || {});


////////////////////////////////////////////////



// var hello = (function(taco) {

// 	let secrets = [];

// 	taco.addSecrets = function(secret) {
// 		secrets.push(secret);
// 	}

// 	taco.getSecrets = function(){
// 		return secrets;
// 	}
// 	console.log( "taco 2", taco );
// 	return taco

// })(hello || {});

// let firstTry = hello.getSecrets();
// console.log( "secrets", firstTry );

// hello.addSecrets('test');
// let secretsExposed = hello.getSecrets();
// console.log( "secretsExposed", secretsExposed );