import { correos } from "./datos.js";

let DOM = document.querySelector('#root');

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

        <input type="text" class="entrada_de_texto_1" placeholder="Correo">
        <input type="password" class="entrada_de_texto_2" placeholder="Contraseña">

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

    <section class="filtro-container">
        <label for="estado-tarea" class="filtro-label">Estado de la Tarea:</label>
        <select id="estado-tarea" class="filtro-select">
            <option value="En Progreso">En Progreso</option>
            <option value="Sin entregar">Sin entregar</option>
            <option value="Completado">Completado</option>
            <option value="entrega tarde">Entrega tarde</option>
        </select>
    </section>

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
    </div>
    <footer>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADYCAMAAADS+I/aAAAA7VBMVEX////1fiUAXaz1fCD2jEP0cwD0cgAAVqkATqb0dQAAWqsAUqgAS6UAWKr1ehn+7+gAUKf1eRT4p3cAW7H+9O34q3797OLu8/j6/P77zLP2iDz3om72lFU+d7j6w6X++PX3nGP949b71cD1hDL5tpPj6/SNqdCtwd3E0+ZUhL5ijcLAz+RMf7v3mFz5u5iku9lyl8f5sYmVbnXpfDDS3eyWr9OCoswvb7QeZ7BBebn83czWzs4sUpbQlHgQVqD/za3Uby7kcBo6XplyZYdWZJWwcGJ/XnPCdVeEa3/dej7QeEoqYKJhZpGicG6MbHxRcRMFAAAH80lEQVR4nO2caWPaOBCGYxsfso1AnCFcCSkJkDSENkeb3e3upun22u3//zmLwSG2NfKR4iN0nn5EdvV6pNHMSMreHoIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCPJSGJ+eXJ6cjvPuRvpMbm1L13XL7l/l3ZWUmdmmvMa0L/PuTKr0dfkJa5p3d1Jk5lW61HqTd4dSY2LLfuyddU63ZkCqvqvTdRw0qiwbefcpJU4tXuqOrjgnOifVOs27U+lw8+tIvQaknuXdqXQ4+3Xmapv3wFbefUqLaTm4ru5suMQtrEY77y6lxnXVp9TeUf+74tLwKj3JuzupMrcfVxzd2GWbOrRvLMOyLEM/2d15+sTV2dnZzmZvSOFpjDqdUSvvXmTAqKQRxogqDfLuScoMe6oirVCItNOWbTAqbVC0o+e+Z39/f5vdSgNJkTwoZJj0BfuT69lt2aoul1b5/KbAuxk1Jvmg3USPt+fvjapedsuGpqlbhnxZzIS1pUkBtEr8p6+mth5M4mS5XJWvCziYX7GgVBbbDU/6Bq9zbV3dOCmc2AMlKJUexnuyPTWC1W5fhq4XLfLnxq+kHMd6cG4LLPqUo/cLFfwPVU6qJMV4bv+8GiHUGcZGoWqHz7PqWOZrohCFStSPubmqvI586KoaNku9VGcZaIjJgvfAF1HPXPEFUSFWcbQC62pUGDw2ohUWUush9SuNXGvaetzR647hwszXIfPPVtKIeIDbO47CLowfbhGPVkW7i2h+w2/SRGEVZn2tHGzEMhqVwyVxSY+U32eiIxadY5UwxtRo57v3LunwdagWKUZsdS4uOjGy8nny4eugp69g68QLknip13l3PDHPNOpL3HOVxTPVLJdN8a/WnHvX/nhcGM/MMxHFSaZl9GeXU9kWWd1853/T/vWtbRi2WdDazN7eDE5RTWM6WTdoz0Upj/+AxNxwQy7dnhWuWrECtllZ9sq4gS2ve8PDmaeNLmc7jFuDbq9XG0QU0CZgOq7f+u1yCgYZ3hF86ftkppyhXYeHGqOKQpnWC81qgJNn/CxcagXtam+Mdxb4Fnp2uc8R2SQ3VAsrF55DU9XgS9zglLYmjz9zbjyzY7VHvoxVC4kNIaPqQIrWhsy6iSJ4N57V8Z8hCWTmwvAQVFCFJtol8FE2x4T5U4mmnI60IK8Dqbm4igZVH+BzzleA/zLP3R/f84GGnYljOuIKLqooY/0NWGsERyehsOl3N+cHcqNsTnU1aVAqbQqa/lHn+w84JYcZoPXDn+vfgCpGNlIVvjgqGsF/AVIFYTxwdFb+4H7CKTCAU5EWYMiXvCUV3mGt/M1L5RfVNcDRWfnerS/zn8Hsp6TORwPYyCCwD74jgFTBBSLAg5kfS+5vXDQFpD0pUAGksg7YtEMeuKEn6uSQH8D1Twfuj9yxWnDB2jqQVWkNbLognziz2gJ/0viH+yp16lqVW5+NTIwKbU8tzQq2lBTGdf+j4K0Nbl7X37BHqYEgOLPyP7dl40zWEdDwTpXo56CAnuCtDe2Lv6l5z5SN1GVsuBngGd6N7HGLzXK5KQkakh8+AeZX0RGRisruvU1N+a3ifWt7Zutl0zR1491E8Irtw+/EOWblHVNnFSqTN/XNJKzLX4koD6qoCn140lr//lYJfMDxfNbvT0+yrLeMCCBVIsG8teW6L/btvu5Uy8x6/YuiEFEM6Th28unDpilVBGMlSyAXvOwW9RckWps9LIV8+/Hw/fu//71dDgdV9NbVGkbZ5x8P9/frpgWQulcCJqujyOuaOqp3B4sxQphjJyrcX3eXa6cpWzUthNQBNFmdMVxyxQ47B+AgB6e0CxSZ5C+1Aa2sa8OSUq1WK6kEtLsjVXgcsVVIqdy2ubd3lFKRzpBsL9KqjcHhMVFpaRG1mbtljkDHFIOQQxOhUhtdbT1/FaZKULSSHrBjiiTs0ESY1JHqPX+shrxl+/A1l1iEnYQJkToI/G/sQPya7dMVz1YxTDxTw6Tecd+VRR8J2x7B+mgcFDj9cRFL5Qs8kipcs1JglHwIh5+EEUodQF819Kttm6YgjhBCFqHvE0rljx9LYaFIGvSSTVcqSlRdRFLheCXhdYGf5TiJVhp1jhZKIhypd7BXyHQE7w2l+FqpFHVBRSS1A08ULfGFl59iGNuu9DiyZyKpgtxCjTrXuG168dYcEjFPHURSLwoidW+hRYeIivYqxptEUvmrLmup2Q5ghzsategwJVYyIpK6gCeJlrYwiIUWNmOpFr6cboAuejhS+X2/1S/xrrtsm0pXKJZp3dh3yID105FaA9+d8br6RKtJCN8jSkgzwWU5ICoSS41/NW37jA5V8lj9kpxTPkTtJsuhAU1iqWq+94OPBrWepGrLf1KpOUh8fxeIFYRSc5qqQZ67CgBBsCMVzIzzHL/bgJ+sQqsmvwddLPgQUCSVxYlJigxf2RBKzburPw0XAwqkqtmWR1OBk9qDpDL4NMLLIliwcqRyMTDNtDSaGk0SKVWhL9z7PtJjEVIVliDWLDY+rSupPvFU2hmly+hI9Uv1uWV2sCOjd83gqbDhbGd5paq74Hu9HB0/OidnO/ZJKmM7sJ4GGbB1+uvcGHWlKoREXx99kYy6VFNVrbOU6vyxLqK+znTnImOGlYrjg0bNRaxrsgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIMj2+R9+TYZWjEAomwAAAABJRU5ErkJggg==" width="50px"  class="logo">
        <h4 class="Ncolegio">Colegio Santa Catalina Laboure</h4>
        <h4 class="CorreoP">Correo: Jdaceituno@scl.edu.gt</h4>
    </footer>
</div>
`;
// Función para manejar el clic en el botón de inicio de sesión
function manejarClick() {
    const correo = document.querySelector(".entrada_de_texto_1").value.trim();
    const contra = document.querySelector(".entrada_de_texto_2").value.trim();

    if (correo === "" || contra === "") {
        alert('Por favor, complete ambos campos.');
        return;
    }

    // Buscar en la base de datos si el correo y la contraseña coinciden
    const usuarioValido = correos.some(usuario => usuario.correo === correo && usuario.contra === contra);

    if (usuarioValido) {
        DOM.innerHTML = Principal_page;  // Cambia al contenido de la página principal
    } else {
        alert('Correo o contraseña incorrectos.');
    }
}

// Añadir el evento click al botón de iniciar sesión
document.querySelector(".iniciar").addEventListener('click', manejarClick);

// Manejar el clic en el botón "Probar Beta"
let btnPRUEBA = document.querySelector(".beta");
btnPRUEBA.addEventListener('click', () => {
    DOM.innerHTML = Principal_page;
    setTimeout(() => {
        let btnAGREGAR_TAREA = document.querySelector(".more");
        if (btnAGREGAR_TAREA) {
            btnAGREGAR_TAREA.addEventListener('click', mostrarVentanaAgregarTarea);
        }
    }, 0); 
});

        // Función para mostrar la ventana de crear cuenta
        function mostrarVentanaCrearCuenta() {
            let ventana = document.createElement('div');
            ventana.className = 'ventana-crear-cuenta';
            ventana.innerHTML = `
                <h2>Crear Cuenta</h2>
                <label for="correo-creacion">Correo:</label>
                <input type="email" id="correo-creacion" placeholder="Correo">
                <label for="contraseña-creacion">Contraseña:</label>
                <input type="password" id="contraseña-creacion" placeholder="Contraseña">
                <button id="guardar-cuenta">Guardar</button>
                <button id="cerrar-ventana-cuenta">Cerrar</button>
            `;
            document.body.appendChild(ventana);
        
            document.querySelector('#guardar-cuenta').addEventListener('click', () => {
                let correo = document.querySelector('#correo-creacion').value;
                let contraseña = document.querySelector('#contraseña-creacion').value;
        
                console.log(`Correo: ${correo}, Contraseña: ${contraseña}`);
        
                document.body.removeChild(ventana);
            });
        
            document.querySelector('#cerrar-ventana-cuenta').addEventListener('click', () => {
                document.body.removeChild(ventana);
            });}

// Manejar el clic en el botón "Crear Cuenta"
let btnCrearCuenta = document.querySelector(".crear");
btnCrearCuenta.addEventListener('click', () => {
    mostrarVentanaCrearCuenta();
});

function mostrarVentanaAgregarTarea() {
    let ventana = document.createElement('div');
    ventana.className = 'ventana-agregar-tarea';
    ventana.innerHTML = `
        <h2>Agregar Nueva Tarea</h2>
        <label for="nombre-tarea">Nombre de la Tarea:</label>
        <input type="text" id="nombre-tarea" placeholder="Nombre de la tarea">
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
        let nombre = document.querySelector('#nombre-tarea').value;
        let fecha = document.querySelector('#fecha-tarea').value;
        let usuario = document.querySelector('#usuario-tarea').value;
        let estado = document.querySelector('#estado-tarea').value;

        let tareaHTML = `
            <div class="tarea">
                <p class="listT">${nombre}</p> <!-- Nombre de la tarea -->
                <p class="listA">${usuario}</p> <!-- Usuario encargado -->
                <p class="listF">${fecha}</p> <!-- Fecha -->
                <p class="listE">${estado}</p> <!-- Estado -->
                <button class="eliminar-tarea">Eliminar</button>
            </div>
        `;

        let contenedorTareas = document.querySelector('.contenedor');

        if (contenedorTareas) {
            let tareaDiv = document.createElement('div');
            tareaDiv.className = 'tarea';
            tareaDiv.innerHTML = tareaHTML;

            contenedorTareas.appendChild(tareaDiv);

            tareaDiv.querySelector('.eliminar-tarea').addEventListener('click', (e) => {
                e.target.parentElement.remove();
            });
        } else {
            console.error('Contenedor de tareas no encontrado');
        }

        document.body.removeChild(ventana);
    });

    document.querySelector('#cerrar-ventana').addEventListener('click', () => {
        document.body.removeChild(ventana);
    });
}


