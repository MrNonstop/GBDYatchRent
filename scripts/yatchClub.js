function updateProductDetails() {
    var productSelect = document.getElementById('productSelect');
    var selectedProduct = parseInt(productSelect.value);

    var products = [
      { 
        processor: 0, 
        ram: 0, 
        storage: 0,
      
      },
      { 
        processor: 500, 
        ram: 300, 
        storage: 200,
        price:150000,
        image: "/img/yatch1.jpg"
      },
      { 
        processor: 1000, 
        ram: 600, 
        storage: 400,
        price:200000,
        image: "/img/yatch2.jpg"
      },
      { 
        processor: 500, 
        ram: 600, 
        storage: 200,
        price:270000,
        image: "/img/yatch3.jpg"
      },
      { 
        processor: 1000, 
        ram: 300, 
        storage: 400,
        price:230000,
        image: "/img/yatch4.jpg"
      },
      { 
        processor: 500, 
        ram: 300, 
        storage: 800,
        price:300000,
        image: "/img/yatch5.jpg"
      }
    ];

    // Ürün özelliklerini güncelle
    document.getElementById('processor').value = products[selectedProduct].processor;
    document.getElementById('ram').value = products[selectedProduct].ram;
    document.getElementById('storage').value = products[selectedProduct].storage;
    document.getElementById('price').value = products[selectedProduct].price;

  
    // Ürün görselini güncelle
    document.getElementById('productImage').style.backgroundImage = "url('" + products[selectedProduct].image + "')";

    // Toplam fiyatı güncelle
    updateTotalPrice();
  }

  function updateTotalPrice() {
    var processorPrice = parseInt(document.getElementById('processor').value);
    var ramPrice = parseInt(document.getElementById('ram').value);
    var storagePrice = parseInt(document.getElementById('storage').value);
    var price = parseInt(document.getElementById('price').value);

    var totalPrice = processorPrice + ramPrice + storagePrice + price;

    document.getElementById('totalPrice').textContent = totalPrice + " $";
  }



  $(document).ready(function() {
    $('.navbar').click(function() {
        $('.navbar-menu').slideToggle();
    });

    $('.navbar-menu li a').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});