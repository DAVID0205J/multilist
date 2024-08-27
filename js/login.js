let DOM = document.querySelector('#root');

// Lista de usuarios
const users = [
    // Datos de usuarios
];

// HTML de la página de inicio de sesión
DOM.innerHTML = `
<div class="login">
<a class="btnGIT" href="">Github</a>
<div class="ventana">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2j_SKgOLm9nz6-2REBbq8f6-ycRGHYL21Ew&s" alt="" class="img">
    <div class="log">
        <div class="hola">Hola</div>
        <div class="bienvenido"> Bienvenido al MultiTasking</div>
        <div class="titulo">iniciar sesion</div>

        <input type="text" class="entrada_de_texto_1" placeholder="Contraseña">
        <input type="text" class="entrada_de_texto_2" placeholder="Correo">

        <button class="beta">Probar Beta</button>
        <button class="iniciar">Iniciar</button>

        <div class="crear">Crear Cuenta</div>
    </div>
</div>
</div>
`;

// HTML de la página principal
let Principal_page = `
<div class="padre">
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black">
            <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </svg>
    </div>
    <div class="title">MULTITASKING</div>

    <input class="Search" type="text" placeholder="Search">
    <button class="more" id='more'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black">
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    </button>
    <button class="person">🥸</button>

    <div class="list">
        <div class="contenedor">
            <div class="header">
                <span class="nombreTarea">Nombre de la Tarea</span>
                <span class="asignado">Asignado</span>
                <span class="fecha">Fecha de entrega</span>
                <span class="estado">Estado</span>
            </div>
        </div>
        <div class="listT">Nueva Tarea</div>
        <div class="listA">🥸👽</div>
        <div class="listF">15 de agosto</div>
        <div class="listE">En Progreso</div>
    </div>
</div>
`;

// Manejar el clic en el botón "Probar Beta"
let btnPRUEBA = document.querySelector(".beta");
btnPRUEBA.addEventListener('click', () => {
    DOM.innerHTML = Principal_page;
    // Esperar a que se cargue la página principal para añadir el listener al botón "more"
    setTimeout(() => {
        let btnAGREGAR_TAREA = document.querySelector(".more");
        if (btnAGREGAR_TAREA) {
            btnAGREGAR_TAREA.addEventListener('click', mostrarVentanaAgregarTarea);
        }
    }, 0); // Puede ser necesario ajustar el retraso si es necesario
});

// Función para mostrar la ventana de agregar tarea
function mostrarVentanaAgregarTarea() {
    let ventana = document.createElement('div');
    ventana.className = 'ventana-agregar-tarea';
    ventana.innerHTML = `
        <h2>Agregar Nueva Tarea</h2>
        <label for="fecha-tarea">Fecha de la Tarea:</label>
        <input type="text" id="fecha-tarea" placeholder="Fecha">
        <label for="usuario-tarea">Usuario:</label>
        <input type="text" id="usuario-tarea" placeholder="Usuario">
        <label for="estado-tarea">Estado:</label>
        <select id="estado-tarea">
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
            <option value="Pendiente">Pendiente</option>
        </select>
        <button id="guardar-tarea">Guardar</button>
        <button id="cerrar-ventana">Cerrar</button>
    `;
    document.body.appendChild(ventana);

    document.querySelector('#guardar-tarea').addEventListener('click', () => {
        let fecha = document.querySelector('#fecha-tarea').value;
        let usuario = document.querySelector('#usuario-tarea').value;
        let estado = document.querySelector('#estado-tarea').value;

        // Aquí deberías agregar la tarea al localStorage o a la lista de tareas del usuario
        console.log(`Fecha: ${fecha}, Usuario: ${usuario}, Estado: ${estado}`);

                // Aquí se actualiza la lista con la nueva tarea
                document.querySelector('.listT').textContent = usuario; // Asigna la tarea al nombre de la tarea
                document.querySelector('.listA').textContent = usuario; // Asigna la persona encargada
                document.querySelector('.listF').textContent = fecha; // Asigna la fecha
                document.querySelector('.listE').textContent = estado; // Asigna el estado

                document.querySelector('.tareas').innerHTML += tareaHTML;

                document.querySelectorAll('.eliminar-tarea').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.target.parentElement.remove();
                    });
                });
        document.body.removeChild(ventana);
    });

    document.querySelector('#cerrar-ventana').addEventListener('click', () => {
        document.body.removeChild(ventana);
    });
}
