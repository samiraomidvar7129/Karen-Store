

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
      myData=data
      createItems(myData)
    }
  };
  xhttp.send();
});

    const createItems =(myData) =>{

        const urlParams=new URLSearchParams(window.location.search);
    
        const group =urlParams.get('group')  //return query string


        for(const index in myData.products){

         if(group === myData.products[index].id){

          let productInfoImg= document.querySelector('.product-info-img');
           productInfoImg.setAttribute('src',myData.products[index].ImageUrl);
         

           document.querySelector('.product-info-name').innerHTML=myData.products[index].name;

           document.querySelector('.product-info-price').innerHTML=myData.products[index].Price;
          
            // Show Product Types------

           const sizes = myData.products[index].size;
           var sizesList=document.querySelector('.product-types');
           for (let i = 0; i < sizes.length; i++) {
            const size =sizes[i].name;
            const li = document.createElement('li');
            li.textContent = size;
            sizesList.append(li);
            console.log(sizesList);
           }

          //btn plus------------------
          document.getElementById('plus').addEventListener('click',()=>{
            var number=Number(document.getElementById('numbers').value);
            number++;
            document.getElementById('numbers').value=number;
          });
           //btn minus----------------
           document.getElementById('minus').addEventListener('click',()=>{
            var number=Number(document.getElementById('numbers').value);
            if(number > 1)
            number--;
            document.getElementById('numbers').value=number
          });
       
         }
        }}




     // Progress Bar-------------------------------------

 var flag=true;

 document.addEventListener('DOMContentLoaded',()=>{
  if(flag){
    var elements=document.getElementsByClassName('progress-bar');
    var elements_value=document.getElementsByClassName('progress-value');
    for(let i =0; i <elements.length;i++){
      const elem=elements[i];
      const value_elems=elements_value[i];

      var data_to=Number(value_elems.getAttribute('data-to'));

      console.log(data_to);

      changeProgress(elem,value_elems,data_to)
    }
    flag=false;
  };
  });

 const changeProgress=(elem,value_elems,value)=>{
  var i=0;
  var interval=setInterval(function(){
    if(i >=Number(value)){
      clearInterval(interval)
    }

    elem.style.width=i + "%";
    value_elems.innerHTML=i + "%";
    i++
  },10)

   }

