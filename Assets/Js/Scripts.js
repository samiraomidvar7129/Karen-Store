//Get Data With Ajax , Api-------------

var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();
  //step 2:
   
//   var url="https://myjson.online/app/records/ec391043-f7d5-4bb2-9611-210ee58f4729";
  var url="/Assets/Js/products.json";
  xhttp.open("GET", url);
  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data =JSON.parse(xhttp.responseText);
    //   createMainBox(data);
    console.log(data);
    }else{
        alert('دیتا وجود ندارد ');
    }
  };
  xhttp.send();
});


// function createMainBox(data) {
//   myData=data;
//   var mainBox = document.querySelector("#container-filter");

//   for (const item in myData.products) {
//     var mainBoxElem = createGroupBox(
//       myData.products[item].Name,
//       myData.products[item].Code,
//       myData.products[item].Price,
//       myData.products[item].ImageUrl,
//       myData.products[item].Satisfaction,
//       myData.products[item].sale,
//     );
//     mainBox.appendChild(mainBoxElem);
//   }
}

// function createGroupBox(Name,Code,ImageUrl,Price,Satisfaction,sale) {

//   var boxItem = document.querySelector(".filter-item");

//   boxItem.insertAdjacentElement("afterbegin", `
//   <div class="filter-item all mens mt-2 mb-5 pt-3 pb-3 custom-shadow
//                         d-flex flex-column justify-content-around align-items-center">
//                            <div class="rating w-100 d-flex  justify-content-around align-items-center ">
//                             <span><a href="" class="far fa-heart bg-purple"></a></span>
//                             <span><a href="" class="far fa-eye bg-purple"></a></span>
//                            </div>
//                              <div class="filter-item_img mt-2">
//                                 <img src="${ImageUrl}" alt="">
//                                 <h6 class="mt-3 text-center"> ${Name}</h6>
//                                 <span>${Code}</span>
//                              </div>
//                              <div class="stars mt-5">
//                                 <a class="far fa-star"></a>
//                                 <a class="far fa-star"></a>
//                                 <a class="far fa-star"></a>
//                                 <a class="far fa-star"></a>
//                                 <a class="far fa-star-half-alt"></a>
//                              </div>
//                              <div class="product-price mt-4 d-flex flex-column justify-content-center align-items-center ">
//                                 <span class="text-success ">${Price}<span  class="text-danger px-2">تومان</span></span>
//                                 <div class="d-flex justify-content-between align-items-center mt-4">
//                                     <span class="font-12 mx-2 color-greenYellow">${Satisfaction}<span class="text-dark px-2 ">رضایت</span> </span>
//                                     <span class="font-12 color-gold">${sale}<span class="text-dark px-2 ">فروش</span> </span>
//                                 </div>
//                              </div>
//                              <div class="add-cart p-2 mt-4 w-75  text-center bg-blueSky">
//                                 <a href="" class="text-white" >افزودن به سبد</a>
//                              </div>
//                         </div>
//   `)
  
// //   return boxItem;
// }
