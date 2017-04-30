function insertRow(id) {
   
    var table = document.getElementById(id);
  
    var row = table.insertRow(-1);
   
    var cell1 = row.insertCell(-1);
	cell1.setAttribute("align", "left");
    var cell2 = row.insertCell(-1);
	cell2.setAttribute("align", "left");
    var cell3 = row.insertCell(-1);
	cell3.setAttribute("align", "center");
	var cell4 = row.insertCell(-1);
	cell4.setAttribute("align", "center");
	
	
    var TodoForm = document.getElementById('Todo').value;
	
	var DateForm = document.getElementById('Date').value;
	
	
	
	
    var checkbox = '<input type="checkbox"/>';
	var delbutton = '<input type="button" value="削除" onclick="deleteRow(this)" />';
	
        
    cell1.innerHTML = TodoForm;
    cell2.innerHTML = DateForm;
	cell3.innerHTML = checkbox;
	cell4.innerHTML = delbutton;
	
	TodoForm = document.getElementById('Todo').value="";
	DateForm = document.getElementById('Date').value="";
	
}
 

function deleteRow(obj) {
   
    tr = obj.parentNode.parentNode;

    tr.parentNode.deleteRow(tr.sectionRowIndex);
}
