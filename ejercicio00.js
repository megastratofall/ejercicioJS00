const b = {};

/* dentro de un objeto a las variables se le van a llamar atributos
y a las funciones se les llama métodos. */
const jon = {
  nombre: "Jon",
  apellido: "Salchichón",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicios", "daar clases"],
  soltero: false,
  contacto: {
    email: "salchichon@gmail.com",
    twitter: "@salchichon",
    movil: "123456123321",
  },
  saludar: function () {
    console.log("Hola :)");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};

console.log(jon);
console.log(jon.apellido);
console.log(jon.nombre);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.email);

jon.saludar();
jon.decirMiNombre();
