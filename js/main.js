var products = document.querySelectorAll('.container_products .row .col .card')
var items = document.querySelector('.items')
var count = document.getElementById('count')
var total_price= 0

var container_products= document.querySelector('.container_products')
var side_bar = document.querySelector('.side_bar')

var btn = document.querySelector('.btn')
var show = document.querySelector('.show')



products.forEach(function(product){
    product.addEventListener('click', function(){
        // أولا اظهار المربع السعر مع 
        side_bar.classList.remove('d-none')
        // ثانيًا جميع السعر المنتجات التي تم الضغط عليها
        total_price += Number(product.querySelector('p').getAttribute('price'))
        var name = product.querySelector('h5').innerText 
        var price= product.querySelector('p').innerText
        var image = product.querySelector('img').src
        var item = `<div class="item mt-2 d-flex justify-content-between px-3 py-2 align-items-center border-bottom">
        <img src="${image}" class="rounded-circle" width="50" height="50" alt="">
        <p class="text-muted">${name}</p>
        <span class="text-success"> ${price}</span>
      </div>`
      items.innerHTML += item
        count.innerText ++
    })
})

// اظهار اجمالي السعر على المتصفح
btn.addEventListener('click', function(){
    btn.classList.remove('w-75')
    btn.classList.remove('mx-auto')
    btn.classList.add('w-25')
    show.classList.remove('d-none')
    show.innerText = total_price
})

