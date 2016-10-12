// tu codigo va aca
function callbackPromedio (a, b, c,callback){ /*funcion que muestra promedio y que lo devuelve con un callback*/
			var suma = a + b + c;
			var promedio = suma / 3;
			return callback(promedio);
}

/*ejercicio segundero */
function segundero () {
	var segundos = 1;
	setInterval(function(){ document.getElementById("titulo").innerHTML = segundos++;}, 1000);
	
}
 segundero ();
