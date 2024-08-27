const local_Storage='lista_ask';
function almacenar_Ask(asignaciones){
    localStorage.setItem(local_Storage,JSON.stringify(asignaciones))

}

function obtener_ask(){
    return JSON.parse(localStorage.getItem(local_Storage)) || [];
}

export {local_Storage, almacenar_Ask, obtener_ask}