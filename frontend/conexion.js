const form = document.getElementById('formulario-cliente');
const lista = document.getElementById('lista-clientes');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const datos = Object.fromEntries(new FormData(form));

    datos.cedula = parseInt(datos.cedula, 10);
    datos.telefono = parseInt(datos.telefono, 10);

    if (isNaN(datos.cedula) || isNaN(datos.telefono)) {
        alert('Por favor, ingrese valores válidos en cédula y teléfono');
        return;
    }

    const respuesta = await fetch('http://localhost:4000/api/clientes', { 
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
        });
    
    const resultado = await respuesta.json();

    if (respuesta.ok) {
        alert('✅🍃 Cliente registrado')
        form.reset();

        setTimeout(() => {
            MostrarClientes();
        }, 150);

    } else {
        alert('❌ Error al cargar el usuario: ' + resultado.mensaje)
    }
});

async function MostrarClientes() {
    const respuesta = await fetch('http://localhost:4000/api/clientes');

    const clientes = await respuesta.json();
    lista.innerHTML = '';
    clientes.forEach(c => {
        const li = document.createElement("li")

        li.textContent = `${c.nombre} (${c.cedula.toString()}) - ${c.direccion}, Tel: ${c.telefono.toString()}`;
        lista.appendChild(li);
    });
}

MostrarClientes();