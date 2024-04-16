const display = document.querySelector('.display');
const numberElements = document.querySelectorAll('.numbers div');
const operationElements = document.querySelectorAll('.operations div:not(:last-child)');
const clearButton = document.getElementById('apagar');
const tableContainer = document.getElementById('table-container');
document.getElementById('gerar-tabuada').addEventListener('click', generateTable);


let selectedNumber = 0;
let selectedOperation = '';


numberElements.forEach(element => {
  element.addEventListener('click', () => {
    selectedNumber = parseInt(element.textContent, 10);
    updateDisplay();
  });
});

operationElements.forEach(element => {
  element.addEventListener('click', () => {
    selectedOperation = element.textContent;
    updateDisplay();
  });
});


function updateDisplay() {
  display.textContent = `${selectedNumber} ${selectedOperation}`;
}


function generateTable() {
  let table = '<table border="1">';
  table += '<tr><th>Operação</th><th>Resultado</th></tr>';

  for (let i = 0; i <= 9; i++) {
    let calculationResult;
    switch (selectedOperation) {
      case '+':
        calculationResult = selectedNumber + i;
        break;
      case '-':
        calculationResult = selectedNumber - i;
        break;
      case '*':
        calculationResult = selectedNumber * i;
        break;
      case '/':
        calculationResult = i === 0 ? 'Indefinido' : (selectedNumber / i).toFixed(2);
        break;
      default:
        calculationResult = 'Selecione uma operação';
        break;
    }
    table += `<tr><td>${selectedNumber} ${selectedOperation} ${i}</td><td>${calculationResult}</td></tr>`;
  }
  table += '</table>';
  tableContainer.innerHTML = table;
}

clearButton.addEventListener('click', () => {
  selectedNumber = 0;
  selectedOperation = '';
  display.textContent = '0';
  tableContainer.innerHTML = '';
});
