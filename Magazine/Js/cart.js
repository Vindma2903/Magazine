
var cart={}; //корзина
$.getJSON('goods.json',function(data)
{
  var goods=data; //Все товары в массиве
  //console.log(goods);
  checkCart();
  //console.log(cart);
showCart(); //Вывожу товары на страницу
function showCart(){
  if ($.isEmptyObject(cart)) {
  //Корзина пуста
  var out ='Корзина пуста. Добавьте товар в корзину! <a href="index.html">Главная страница</a>';
  $('#my-cart').html(out);
  }
  else {
  var out='';
  for(var key in cart)
  {
    out +='<button class="delete" data-art="'+key+'">x</button>';
    out +='<img src="'+goods[key].image+'" width="100">';
    out += goods[key].name;
      out +='<button class="minus" data-art="'+key+'"">-</button>';
      out +=cart[key];
      out +='<button class="plus" data-art="'+key+'">+</button>';
      out+=cart[key]*goods[key].cost;
      out+='<br>';
  }
  $('#my-cart').html(out); //вывод на корзину страницы
  $('.plus').on('click',plusGoods);
  $('.minus').on('click',minusGoods);
    $('.delete').on('click',deleteGoods);
  }
}

function plusGoods()
{
  var articul=$(this).attr('data-art');
  //Увеличение кол во товара
  cart[articul]++;
  saveCartToLS();
  showCart();
}

//Уменьшение товара в корзине
function minusGoods()
{
  var articul=$(this).attr('data-art');
  //Увеличение кол во товара
  if(cart[articul]>1){
  cart[articul]--;
}
  else {
    delete cart[articul];
}
  saveCartToLS(); //Сохраняю корзину в localStorage
  showCart();
}

function deleteGoods()
{
  var articul=$(this).attr('data-art');
  delete cart[articul];
  saveCartToLS();//Сохраняю корзину в localStorage
  showCart();
}

});

function checkCart()
{
  //Проверяю наличие корзины в localStorage
  if(localStorage.getItem('cart')!=null){
    cart=JSON.parse(localStorage.getItem('cart'));
  }
}

function saveCartToLS()
{
    localStorage.setItem('cart', JSON.stringify(cart));
}
