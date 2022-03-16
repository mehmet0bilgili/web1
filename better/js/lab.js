function appendProduct() {
  var prdct = "<div class='product'>\
  <div class='a'>\
  <ul>\
  <label>Seçimler</label>\
  <li><select><option>Marka Yok</option><option>Adidas</option><option>Nike</option><option>Puma</option></select></li>  \
  <li><select><option>Beden Yok</option><option>XL</option><option>L</option></select></li> \
  </ul>\
  </div>\
  <div class='a diger'> \
  <label>Diğer Seçimler</label>\
  <button class='appendOther'>EKLE</button>\
  <input type='number' class='totalAmount' readonly>\
  </div>\
  <div class='a'>\
  <ul>\
  <li class='li-b'><select><option>Ölçü birimi yok</option><option>Metrik</option><option>İnçlik</option></select></li>\
  <li class='li-b'><input type='number' class='price'></input></li>\
  <li class='li-b'><select><option>Para birimi yok</option><option>Türk Lirası</option><option>Euro</option><option>Dolar</option></select></li>\
  <li class='li-b'><input type='number' class='totalPrice' readonly></input></li>\
  <li class='li-b'><button onclick='removeProduct(this)'>ÜRÜNÜ SİL</button></li>\
  </ul>\
  </div>\
  </div>";

  $("body").append(prdct);
}

function removeProduct(This) {
  $(This.closest('.product')).remove();
}

function calculateSum($diger){
    //source => https://stackoverflow.com/questions/71489820/how-to-find-sum-of-multiple-inputs-inputs-can-increase-by-add-button-from-diff
    let numbers, sum;

    numbers = $diger.find('.amount'); // get all .amount inputs
    numbers = numbers.filter((i, el) => !!el.value); // filter out empty fields
    numbers = numbers.map((i, el) => el.value).get(); // get entered values
    sum     = numbers.reduce((sum, val) => sum + parseFloat(val), 0); // sum numbers

    $diger.find('.totalAmount').val(sum); // display sum
    //return sum;
}

function calculateTotalPrice($e){
  let $totalAmount = $e.find('.totalAmount').val();
  let $price = $e.find('.price').val();
  $e.find('.totalPrice').val(+$totalAmount * +$price);
}

$('body').on('click', '.appendOther', function(){
    $(this).parent().append(
        `<div>
          <ul><li class='li-a'><select><option>Grup Yok</option><option>A</option><option>B</option></select></li>\
          <li class='li-a'><select><option>Desen Yok</option><option>Kareli</option><option>Çizgili</option></select></li>\
          <li class='li-a'><select><option>Renk Yok</option><option>İrem</option><option>Kırmızı</option></select></li>\
          <li class='li-a amount'><input type='number' class='amount'></li>\
          <li class='li-a deleteOther'><button class='removeOther'>SİL</button></li>\
          </ul>
        </div>`
    )
}).on('click', '.removeOther', function(){
    let $diger = $(this).closest('.diger');
    let $temp = $(this).closest('.product');
    $(this).parent().parent().remove();
    calculateSum($diger);
    calculateTotalPrice($temp);
}).on('input', '.amount', function(){
    let $diger = $(this).closest('.diger');
    //console.log("asddsa");
    calculateSum($diger);
    calculateTotalPrice($(this).closest('.product'));
}).on('input', '.price', function(){
    /*let $totalAmount = $(this).parent().parent().parent().parent().find('.totalAmount').val();
    let $price = $(this).val();
    $(this).parent().parent().find('.totalPrice').val(+$price * +$totalAmount);*/
    calculateTotalPrice($(this).closest('.product'));
    //$(this).parent().parent().remove();
    //console.log($(this).parent().parent().parent().parent().find('.price').val());
    //$(this).parent().parent().parent().parent().remove();
});

/*
function removeOther(This) {
  $(This.closest('ul')).remove();
  //console.log("agdsfdgh");
}

function appendOther(This) {
  var e = "<ul><li class='li-a'><select><option>Grup Yok</option><option>A</option><option>B</option></select></li>\
  <li class='li-a'><select><option>Desen Yok</option><option>Kareli</option><option>Çizgili</option></select></li>\
  <li class='li-a'><select><option>Renk Yok</option><option>İrem</option><option>Kırmızı</option></select></li>\
  <li class='li-a amount'><input type='number' class='amount'></li>\
  <li class='li-a deleteOther'><button onclick='removeOther(this)'>SİL</button></li>\
  </ul>";
  $(This.closest('div')).append(e);
  //console.log("asdgsd");
}

*/
