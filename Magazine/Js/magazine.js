var cart={}; //Моя корзина
//Происходит при загрузке страницы
$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('goods.json', function (data) {
      // проверка работает или нет console.log(data);
//Перебор массива и вывод информации
//Пустая строка
var out='';
for (var key in data)
{
  //Вывод имени товаров,стоимости,фото
  //Стили применяются к single-goods
   out+='<div class="single-goods">';
  out +='<p>'+data[key]['name']+'</p>';
    out +='<p>Цена:'+data[key]['cost']+'</p>';
    out+='<img src="'+data[key].image+'">';
    out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
    out+='</div>';
}
$('#goods').html(out);
$('button.add-to-cart').on('click', addToCart);
});
}

//Происходит при добавлении в корзину
function addToCart()
{
  //Добавляем товар в корзину
  var articul = $(this).attr('data-art');
  if(cart[articul]!=undefined)
  {
    cart[articul]++;
  }
  else{
    cart[articul]=1;
  }
  localStorage.setItem('cart',JSON.stringify(cart));
//  console.log(cart);
  showMiniCart();
}
function checkCart()
{
  //Проверяю наличие корзины в localStorage
  console.log(localStorage.getItem('dddd'));
  if(localStorage.getItem('cart')!=null)
  {
    cart=JSON.parse(localStorage.getItem('cart'));
  }
}

function showMiniCart()
{
  //Показываю содержимое корзины
  var out ='';
  for(var w in cart){
    out+=w+'---'+cart[w]+'<br>';
  }
  //Вывод
  out +='<br><a href="cart.html">Корзина</a>';
  $('#mini-cart').html(out);
}
