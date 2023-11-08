
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
}



function createGroupBox(id,name,Price,ImageUrl,Satisfaction,sale) {
  
  let productList=document.getElementById('product-list');
  productList.style.marginTop="50px"

  let filterItem=document.createElement('div')
  filterItem.classList.add('filter-item')


  let rating=document.createElement('div')
  rating.classList.add('rating')

  let spanHeart=document.createElement('span')
  let heartLink=document.createElement('i')
  heartLink.setAttribute('class','far fa-heart')

  spanHeart.append(heartLink)

  let spanEye=document.createElement('span')
  let eyeLink=document.createElement('i')
  eyeLink.setAttribute('class','far fa-eye')

  spanEye.append(eyeLink)

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
  spanPrice.style.color="green"

  spanPrice.append(priceText);


  let SatisfactionDiv=document.createElement('div');//
 SatisfactionDiv.classList.add('SatisfactionDiv');

 let saleSpan=document.createElement('span');
let saleText=document.createTextNode('رضایت')
 saleSpan.innerText=sale;
 saleSpan.style.color="goldenrod";
  saleSpan.append(saleText)

 let SatisfactionSpan=document.createElement('span');
 SatisfactionSpan.classList.add('SatisfactionSpan')
 let SatisfactionText=document.createTextNode("فروش")
 SatisfactionSpan.innerText=Satisfaction;
 SatisfactionSpan.style.color="red";
 

 //Creating the parents of the stars

let starsContainer=document.createElement('div');
starsContainer.setAttribute('class','stars-container');

//  The number of stars
const starCount = 5;

//Create Stars

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('i');
  star.setAttribute('class','far fa-star');
  star.setAttribute('dataset',i + 1);
  starsContainer.append(star);
}


 SatisfactionSpan.append(SatisfactionText)

 SatisfactionDiv.append(saleSpan,SatisfactionSpan);

 

 let addCart=document.createElement('div');
 addCart.classList.add('add-cart');

 let detailBtn=document.createElement('a');
 detailBtn.setAttribute('href',"details.html?group="+ id)
 let detailBtnText=document.createTextNode(' جزئیات ')
 detailBtn.classList.add('basket-btn');

 detailBtn.append(detailBtnText)

 addCart.append(detailBtn);

 filterItem.append(rating,filterItemimg,H6Name, spanPrice,SatisfactionDiv,starsContainer,addCart)

productList.append(filterItem)

return productList;

}

// Star Rating

