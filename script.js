function createTable() {
    //Write your code here
  let tableSelect=document.querySelector("#myTable")
  let inputBox=document.querySelector("input")
	let rowNumber = parseInt(prompt("Input number of rows"));
    let columnNumber = parseInt(prompt("Input number of columns"));

	if(rowNumber<=0 && columnNumber!<=0){
		for(let i=0;i<rowNumber;i++){
		let row=document.createElement("tr")
		table.append(tr)
			for(let j=0;j<columnNumber;j++){
			let column=document.createElement("td")
			tr.append(td)
			}
		}
	}

}
