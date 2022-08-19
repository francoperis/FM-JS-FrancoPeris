// ******* index.js *******

// constructor = A special method for assigning properties.
//                          Automatically called when creating an object.

class Pokemon{

	constructor(nombre, tipo, ph, texto){
	  this.nombre = nombre;
	  this.tipo = tipo;
	  this.ph = ph;
	  this.texto = texto
	}
  }
  
let pokemon1 = new Pokemon("Pikachu", "Electrico", 5, /**/ );
let pokemon2 = new Pokemon("Chikorita", "Planta", 7, /**/ );

console.log(pokemon1.nombre);
console.log(pokemon1.tipo);
console.log(pokemon1.ph);
console.log(pokemon1.texto);
  
console.log(pokemon2.nombre);
console.log(pokemon2.tipo);
console.log(pokemon2.ph);
console.log(pokemon2.texto);