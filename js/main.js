function addTable(This) {
  const element = document.getElementById("myTable");
  const cloneX = element.cloneNode(true);
  This.closest('div').appendChild(cloneX);
}

function addLittle(This) {
  const e = document.getElementById("myOtherDiv");
  const cloneY = e.cloneNode(true);
  This.closest('td').appendChild(cloneY);
}

function removeTable(This) {
  if(document.getElementById("tableDiv").getElementsByTagName('table').length == 1)
  {
      alert("Trust me, you wouldn't want to delete this.");
  }else{
      This.closest('table').remove();
  }
}

function removeLittle(This) {
  if(document.getElementById("myTd").getElementsByTagName('div').length == 1)
  {
      alert("Trust me, you wouldn't want to delete this.");
  }else{
      This.closest('div').remove();
  }
}

//miktarı hesapla
function add_count(This) {
  const full = This.closest('td').getElementsByClassName('count');
  const arr = [...full].map(input => input.value);
  var x = This.closest('table').rows[1].cells;
  x[3].innerHTML = arr.reduce((a,b) => +a + +b);
  return x[3].innerHTML;
}

//toplam miktarı hesapla
//problem miktar * fiyat => fiyata eriş, miktara eriş
function calculate_price(This) {
  var rowCells = This.closest('table').rows[1].cells;
  //rowCells[7].innerHTML = +rowCells[3].innerHTML; => miktar tamam
  //rowCells[7].innerHTML = rowCells[5].namedItem("price").value; fiyatı getirmek başarısız
  //rowCells[7].innerHTML = rowCells[5].innerHTML.value; => fiyatı getirmek başarısız
}
