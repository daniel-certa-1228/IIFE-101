console.log( "iife2.js" );

var hello = (function(taco) {

	let students = [];
	// console.log( "taco ", taco )
	taco.addStudent = function(secret) {
		secrets.push(secret);
	}

	taco.getStudents = function(){
		return secrets;
	}
	// console.log( "taco 2", taco );
	return taco

})(hello || {});