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

        for(const index in myData.doctors){

         if(group === myData.doctors[index].id){
            document.getElementById('doctor-title').innerHTML=myData.doctors[index].Name;
            document.getElementById('doctor-Speciallity').innerHTML=myData.doctors[index].Speciallity;
            document.querySelector('.state').innerHTML=myData.doctors[index].state;
            document.querySelector('.doctor-address').innerHTML=myData.doctors[index].city;
            document.getElementById('nezamCode').innerHTML=myData.doctors[index].NezamCode;
            document.getElementById('doctor-image').setAttribute('src',myData.doctors[index].ImageUrl);
            document.querySelector('.gifts').innerHTML=myData.doctors[index].gifts;
            document.querySelector('.article').innerHTML=myData.doctors[index].articcles;
            document.querySelector('.comments').innerHTML=myData.doctors[index].comments;
            document.querySelector('.answers').innerHTML=myData.doctors[index].answers;
         }

        }
    }