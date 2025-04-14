function generateTable() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);

  if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  let tableHTML = "<table><tr><th>*</th>";
  for (let i = start; i <= end; i++) {
    tableHTML += `<th>${i}</th>`;
  }
  tableHTML += "</tr>";

  for (let i = start; i <= end; i++) {
    tableHTML += `<tr><th>${i}</th>`;
    for (let j = start; j <= end; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  document.getElementById('tableContainer').innerHTML = tableHTML;
}
