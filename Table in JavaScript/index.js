document.addEventListener('DOMContentLoaded', function () {
    
    //stores data corresponding to tables
    const names = [
        'Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E',
        'Produto F', 'Produto G', 'Produto H', 'Produto I', 'Produto J',
        'Produto K', 'Produto L', 'Produto M', 'Produto N', 'Produto O',
        'Produto P', 'Produto Q', 'Produto R', 'Produto S', 'Produto T',
        'Produto U', 'Produto V', 'Produto W', 'Produto X', 'Produto Y',
        'Produto Z', 'Produto AA', 'Produto BB', 'Produto CC', 'Produto DD',
        'Produto EE', 'Produto FF', 'Produto GG', 'Produto HH', 'Produto II',
        'Produto JJ', 'Produto KK', 'Produto LL', 'Produto MM', 'Produto NN'
      ];
      
      const prices = [
        '10.00', '20.50', '15.99', '8.75', '25.49',
        '18.00', '12.30', '30.75', '22.99', '17.50',
        '14.25', '28.50', '19.99', '11.80', '24.95',
        '16.50', '31.25', '23.99', '13.45', '26.75',
        '21.50', '15.75', '29.99', '20.25', '12.99',
        '9.50', '27.80', '18.75', '10.99', '24.50',
        '17.00', '32.25', '23.50', '14.99', '28.75',
        '19.80', '11.25', '26.50', '15.99', '30.25'
      ];
      
      const descriptions = [
        'Descrição do Produto A', 'Descrição do Produto B', 'Descrição do Produto C',
        'Descrição do Produto D', 'Descrição do Produto E', 'Descrição do Produto F',
        'Descrição do Produto G', 'Descrição do Produto H', 'Descrição do Produto I',
        'Descrição do Produto J', 'Descrição do Produto K', 'Descrição do Produto L',
        'Descrição do Produto M', 'Descrição do Produto N', 'Descrição do Produto O',
        'Descrição do Produto P', 'Descrição do Produto Q', 'Descrição do Produto R',
        'Descrição do Produto S', 'Descrição do Produto T', 'Descrição do Produto U',
        'Descrição do Produto V', 'Descrição do Produto W', 'Descrição do Produto X',
        'Descrição do Produto Y', 'Descrição do Produto Z', 'Descrição do Produto AA',
        'Descrição do Produto BB', 'Descrição do Produto CC', 'Descrição do Produto DD',
        'Descrição do Produto EE', 'Descrição do Produto FF', 'Descrição do Produto GG',
        'Descrição do Produto HH', 'Descrição do Produto II', 'Descrição do Produto JJ',
        'Descrição do Produto KK', 'Descrição do Produto LL', 'Descrição do Produto MM',
        'Descrição do Produto NN'
      ];
      

    //fill in the value of the product
    const tableBody = document.querySelector('#productTable tbody');

    //fill in the table with the data
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
