//Get Data With Ajax , Api-------------

var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();
  //step 2:
   
  var url="/Assets/Js/products.json";
  xhttp.open("GET", url);
  //step 3:
  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      var data =JSON.parse(xhttp.responseText);
      createMainBox(data);
    }
  
  };
  xhttp.send();
});


function createMainBox(data) {

  myData=data;

 var mainBox=document.querySelector("#container-filter");

  for (const item in myData.products) {
    var mainBoxElem = createGroupBox(
      myData.products[item].id,
      myData.products[item].name,
      myData.products[item].Price,
      myData.products[item].ImageUrl,
      myData.products[item].sale,
      myData.products[item].Satisfaction
    );

    mainBox.appendChild(mainBoxElem);
  }


function createGroupBox(id,name,Price,ImageUrl,Satisfaction,sale) {
  
  let productList=document.getElementById('product-list');

  let filterItem=document.createElement('div')
  filterItem.classList.add('filter-item')


  let rating=document.createElement('div')
  rating.classList.add('rating')

  let spanHeart=document.createElement('span')
  let heartLink=document.createElement('a')
  heartLink.classList.add('fa-heart')
  heartLink.innerHTML="hert"

  let spanEye=document.createElement('span')
  let eyeLink=document.createElement('a')
  eyeLink.classList.add('fa-eye')

  rating.append( spanHeart , spanEye)



  let filterItemimg =document.createElement('div')//
  filterItemimg.classList.add('filter-item_img')

  let img=document.createElement('img')
  img.setAttribute('src',ImageUrl)

  filterItemimg.append(img)


  let H6Name=document.createElement('h6');
  H6Name.innerText= name;

  let spanPrice=document.createElement('span');
  let priceText=document.createTextNode("تومان");
  spanPrice.innerText=Price;

  spanPrice.append(priceText);


  let SatisfactionDiv=document.createElement('div');//
 SatisfactionDiv.classList.add('SatisfactionDiv');

 let saleSpan=document.createElement('span');
let saleText=document.createTextNode('فروش')
 saleSpan.innerText=sale;
  saleSpan.append(saleText)

 let SatisfactionSpan=document.createElement('span');
 SatisfactionSpan.classList.add('SatisfactionSpan')
 let SatisfactionText=document.createTextNode("رضایت")
 SatisfactionSpan.innerText=Satisfaction;

 SatisfactionSpan.append(SatisfactionText)

 SatisfactionDiv.append(saleSpan,SatisfactionSpan);

 let addCart=document.createElement('div');
 addCart.classList.add('add-cart');

 let basketBtn=document.createElement('a');
 basketBtn.setAttribute('href',"basket.html")
 let basketBtnText=document.createTextNode('افزودن به سبد')
 basketBtn.classList.add('basket-btn');

 basketBtn.append(basketBtnText)

 addCart.append(basketBtn);

 filterItem.append(rating,filterItemimg,H6Name, spanPrice,SatisfactionDiv,addCart)

productList.append(filterItem)

console.log(productList);

return productList;

}
}
