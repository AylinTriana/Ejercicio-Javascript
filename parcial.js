function restarPares(valor1, valor2) {
  if (valor1 % 2 === 0 &&  valor2 % 2 === 0 ) {
    return valor1 - valor2;
  } else if (valor1 % 2 === 0 &&  valor2 % 2 === 1 ) { 
    return "Lo siento, uno o mas parámetros no son pares";
  }

};

let resulPares = restarPares (6,3);
console.log(resulPares);



function ejercicioNum2(edad, entrada) {
  if (edad >= 18 && entrada === true) {
    return true;
  } else if (edad <= 18 && entrada === true) {
    return "Sólo puedes acceder con un adulto acompañante";
  } else if (entrada === false) {
    return false;
  }
  
};

let resultado = ejercicioNum2(17, false)
console.log(resultado);


let productos = [
  {
      producto : "remera",
      tipo: "indumentaria",
      precio: 2100
  },
  {
      producto : "notebook",
      tipo: "tecnologia",
      precio: 200000
  },
  {
      producto : "celular",
      tipo: "tecnologia",
      precio: 27000
  },
  {
      producto : "protector solar",
      tipo: "cosmetica",
      precio: 2500
  },
  {
      producto : "pantalon",
      tipo: "indumentaria",
      precio: 7500
  },
  {
      producto : "tablet",
      tipo: "tecnologia",
      precio: 60000
  },
 
];

function nuevoArreglo(arreglo) {

  let arregloNuevo =[];
  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].tipo = "tecnologia" && arreglo[i].precio >= 50000) {
      arregloNuevo.push(arreglo[i]);
    }
  }

  return arregloNuevo
}; 

let resulProducto = nuevoArreglo(productos);
console.log(resulProducto);


