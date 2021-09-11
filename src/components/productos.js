

const productos = [
{id: 0, name: "Funcional", dias: "lunes, miercoles y vienres", precio: 2500, vacantes: 10 },
{id: 1, name: "Fitboxing", dias: "martes y jueves", precio: 2000, vacantes: 10 },
{id: 2, name: "Fuerza/resistencia", dias: "lunes y jueves", precio: 2200, vacantes: 10 },
{id: 3, name: "Pilates", dias: "lunes, jueves y viernes", precio: 2500, vacantes: 10 }

]

function getList(){

return new Promise((resolve, reject) => {
setTimeout(() => resolve(productos), 3000)

}

)

}