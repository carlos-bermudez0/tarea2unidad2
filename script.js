document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const menuContent = document.getElementById('menuContent');
    const inicioButton = document.getElementById('inicioBtn');
    const formatoButton = document.getElementById('formatoBtn');
    const inicioContent = document.getElementById('inicioContent');
    const formContent = document.getElementById('formContent');
    const showMessageButton = document.getElementById('showMessageBtn');
    const messageContainer = document.getElementById('messageContainer');
    const dataForm = document.getElementById('dataForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    const dataGrid = document.getElementById('dataGrid');

    let dataArray = [];

    toggleMenuButton.addEventListener('click', () => {
        menuContent.classList.toggle('hidden');
    });

    inicioButton.addEventListener('click', () => {
        inicioContent.classList.remove('hidden');
        formContent.classList.add('hidden');
    });

    formatoButton.addEventListener('click', () => {
        inicioContent.classList.add('hidden');
        formContent.classList.remove('hidden');
    });

    showMessageButton.addEventListener('click', () => {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = '¡Bienvenido!';
        
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => {
            messageContainer.removeChild(message);
        });
        
        message.appendChild(closeButton);
        messageContainer.appendChild(message);
    });

    dataForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {
            nombre: nameInput.value,
            correo: emailInput.value,
            mensaje: messageInput.value,
        };

        dataArray.push(formData);
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        renderGrid();
    });

    function renderGrid() {
        dataGrid.innerHTML = '';
        dataArray.forEach((data, index) => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            
            gridItem.innerHTML = `
                <div>${data.nombre}</div>
                <div>${data.correo}</div>
                <div>${data.mensaje}</div>
            `;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                dataArray.splice(index, 1);
                renderGrid();
            });
            
            gridItem.appendChild(deleteButton);
            dataGrid.appendChild(gridItem);
        });
    }
});
