let notas = [
    { id: 1, titulo: 'Sacar la basura', texto: 'mi mama me va a retar si no lo hago', realizada: false },
    { id: 2, titulo: 'Comer', texto: 'quedo comida de ayer', realizada: true },
    { id: 3, titulo: 'Estudiar eventos', texto: 'estoy flojo de papeles y no voy a aprobar la task 3', realizada: false },
    { id: 4, titulo: 'Tomar agua', texto: 'Debo hidratarme bien para no desmayarme', realizada: true }
];

let idGlobal = 4;

document.getElementById('add-note-btn').addEventListener('click', agregarNota);
document.getElementById('clear-fields-btn').addEventListener('click', limpiarCampos);
document.getElementById('search-text').addEventListener('input', pintarNotas);
document.getElementById('filter-completed').addEventListener('change', pintarNotas);

function agregarNota() {
    const titulo = document.getElementById('note-title').value.trim();
    const texto = document.getElementById('note-text').value.trim();
    
    if (titulo && texto) {
        idGlobal++;
        notas.push({ id: idGlobal, titulo, texto, realizada: false });
        limpiarCampos();
        pintarNotas();
    }
}

function limpiarCampos() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
}

function pintarNotas() {
    const contenedor = document.getElementById('notes-container');
    const filtroTexto = document.getElementById('search-text').value.toLowerCase();
    const filtroRealizadas = document.getElementById('filter-completed').checked;
    
    let notasFiltradas = notas.filter(nota => nota.titulo.toLowerCase().includes(filtroTexto) || nota.texto.toLowerCase().includes(filtroTexto));
    
    if (filtroRealizadas) {
        notasFiltradas = notasFiltradas.filter(nota => nota.realizada);
    }
    
    contenedor.innerHTML = '';
    
    if (notasFiltradas.length === 0) {
        contenedor.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
    } else {
        notasFiltradas.forEach(nota => {
            const notaCard = document.createElement('div');
            notaCard.className = 'note-card';
            
            notaCard.innerHTML = `
                <h3>${nota.titulo}</h3>
                <p class="${nota.realizada ? 'note-completed' : ''}">${nota.texto}</p>
                <button onClick="borrarNota(${nota.id})">Borrar nota</button>
                <input type="checkbox" onClick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
            `;
            
            contenedor.appendChild(notaCard);
        });
    }
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    pintarNotas();
}

pintarNotas();

