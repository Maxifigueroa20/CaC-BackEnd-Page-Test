// Función para obtener los datos de la API
async function getJuegos() {
    try {
        let response = await fetch('http://localhost:8080/integrador_war_exploded/juegos');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:",error);
    }
}

// Función para actualizar la tabla
async function updateTable() {
    // Obtengo el array de juegos
    const juegos = await getJuegos();
    // Obtengo el body de la tabla
    const tablaJuegos = document.getElementById("tabla-de-juegos");
    // Limpio el body de la tabla
    tablaJuegos.innerHTML = '';
    // Para cada juego, añado una estructura en la tabla
    juegos.forEach(juego => {
        // Cargo toda la informacion del juego en una estructura de tabla 'tr'
        const tr = document.createElement('tr');
        const unJuego = `
            <th>${juego.id}</th>
            <td>${juego.nombre}</td>
            <td>${juego.desarrollador}</td>
            <td>${juego.descripcion}</td>
            <td>${juego.genero}</td>
            <td>${juego.plataforma}</td>
            <td><img src="./img/${juego.imagen}" class="rounded-3" width="200px" height="300px" alt="juego-del-listado"></td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-warning">Editar</button>
                    <button class="btn btn-danger ms-2">Borrar</button>
                </div>
            </td>
        `;
        tr.innerHTML = unJuego;
        tablaJuegos.appendChild(tr);
    });
}

updateTable();