function createTable() {
  // Select the table element by ID
  const table = document.getElementById("myTable");

  // Ask user for number of rows and columns
  const rows = parseInt(prompt("Input number of rows"));
  const cols = parseInt(prompt("Input number of columns"));

  // Validate user input
  if (isNaN(rows) || isNaN(cols)) {
    alert("Invalid input: Please enter numeric values.");
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Invalid input: Rows and columns must be greater than 0.");
    return;
  }

  // Clear existing table content
  table.innerHTML = "";

  // Generate rows and columns dynamically
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}



// let form=document.querySelector("form");
//  let rowNumber = parseInt(prompt("Input number of rows"));
// let columnNumber = parseInt(prompt("Input number of columns"));
// function createTable() {
//     //Write your code here
//   let tableSelect=document.querySelector("#myTable")
//   let inputBox=document.querySelector("input")
// //   let rowNumber = parseInt(prompt("Input number of rows"));
// // let columnNumber = parseInt(prompt("Input number of columns"));

// 	if(rowNumber<=0 && columnNumber!<=0){
// 		for(let i=0;i<rowNumber;i++){
// 		let row=document.createElement("tr")
// 		table.append(tr)
// 			for(let j=0;j<columnNumber;j++){
// 			let column=document.createElement("td")
// 			tr.append(td)
// 			}
// 		}
// 	}

// }
