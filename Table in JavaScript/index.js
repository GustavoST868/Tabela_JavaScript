document.addEventListener('DOMContentLoaded', function () {
    
    const names = ['Produto A', 'Produto B', 'Produto C'];
    const prices = ['10.00', '20.50', '15.99'];
    const descriptions = ['Descrição do Produto A', 'Descrição do Produto B', 'Descrição do Produto C'];

    
    const tableBody = document.querySelector('#productTable tbody');

    
    for (let i = 0; i < names.length; i++) {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellPrice = row.insertCell(1);
        const cellDescription = row.insertCell(2);

        cellName.textContent = names[i];
        cellPrice.textContent = prices[i];
        cellDescription.textContent = descriptions[i];
    }
});
