/////Declaring variables///
var bestProduct=document.getElementById("bestProduct");
var saleProduct = document.getElementById("saleProduct");
var lastProduct=document.getElementById("lastProduct");
var searchInput=document.getElementById("searchInput");
var bstSction=document.getElementById("BstProduct");
/////////handling buttons event/////
 bestProduct.addEventListener("click",getBstProduct);
 lastProduct.addEventListener("click", getlastProduct);
  saleProduct.addEventListener("click", getSaleProduct);
//////////
  /*Best product function*/ 
 var BstProduct=["images/image4.jpg","images/image7.jpg","images/image9.jpg","images/image10.jpg","images/image11.jpg","images/image12.jpg"];
 function getBstProduct(){
    
     var col="";      
      for(var i=0;i<BstProduct.length;i++){
         col+=
       `
      <div class="col-md-4 py-4 ">
           <div class="card rounded birthday">
               <img src="${BstProduct[i]}" class="card-img-top w-100 "alt="BstProductGifts">
             <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                  <h6>rev</h4>
             </div>
            </div>
      </div>
          `
 }
       document.getElementById("rowData").innerHTML=col;
      
 }
//////////////
/*sale product function */
  var saleProduct=["images/imge1.jpg","images/image5.jpg","images/image8.jpg","images/image21.jpg","images/25.jpg","images/27.jpg"];
  function getSaleProduct(){
         var col="";
      for(var i=0;i<saleProduct.length;i++){
         
          col+=

          `
            <div class="col-md-4 py-4 ">
           <div class="card rounded " >              
            <img src="${saleProduct[i]}" class="card-img-top w-100"alt="SaleProductgifts">
              <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                 <h6>rev</h4>
              
             </div>
             </div> 
     </div>           `
 
 
          
}
      document.getElementById("rowData").innerHTML=col;
     
  
 }
//last product function//
 var lastProduct=["images/33.jpg","images/image3.jpg","images/image14.jpg","images/image13.jpg","images/image16.jpg","images/image17.jpg"];
 function getlastProduct(){
     
    var col="";
      for(var i=0;i<lastProduct.length;i++){
         
          col+=`

          <div class="col-md-4 py-4 ">
          <div class="card rounded ">
              <img src="${lastProduct[i]}" class="card-img-top w-100"alt="lastProductGifts">
              <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                  <h6>rev</h4>
              
              </div>
            </div> 
      </div>
          ` 
        }
      document.getElementById("rowData").innerHTML=col;
      
    
 }

 getSaleProduct();
 getBstProduct();
 getlastProduct();
 
 //array of objects of gifts to handle search based on type ocassion///
 var gifts=
 [
   {
     type:"wedding",
     name:"nickles",
     price:"55$",
     path:"images/image23.jpg",

   },
   
    {
      type:"wedding",
      name:"houseware",
      price:"90$",
      path:"images/40.jpg",
 
    }
    ,
    {
      type:"wedding",
      name:"kitchenware",
      price:"100$",
      path:"images/75.jpg",
 
    }
    ,
    {
      type:"wedding",
      name:"brideBox",
      price:"150$",
      path:"images/85.jpg",
 
    },
    {
      type:"wedding",
      name:"ring",
      price:"55$",
      path:"images/105.jpg",
 
    }
    ,
    {
      type:"wedding",
      name:"showerGift",
      price:"80$",
      path:"images/63.jpg",
 
    }
    ,
    {
      type:"birthday",
      name:"mug",
      price:"30$",
      path:"images/image21 (5).jpg",
 
    },
    {
      type:"birthday",
      name:"throat",
      price:"20$",
      path:"images/image21 (1).jpg",
 
    }
   ,
   {
    type:"birthday",
    name:"glass",
    price:"40$",
    path:"images/34.jpg",

  }
 ,
 {
  type:"birthday",
  name:"choclatebox",
  price:"70$",
  path:"images/46.jpg",

}
,
{
  type:"birthday",
  name:"bandolewatch",
  price:"60$",
  path:"images/101.jpg",

}

,
{
  type:"birthday",
  name:"funnygift",
  price:"65$",
  path:"images/100.jpg",

}
,

{
  type:"graduation",
  name:"graduate mug",
  price:"70$",
  path:"images/grad16.jpg",

}
,

{
  type:"graduation",
  name:"graduationframe",
  price:"66$",
  path:"images/grad3.jpg",

}
,

{
  type:"graduation",
  name:"Plush Teddy Bear",
  price:"35$",
  path:"images/grad19.jpg",

}
,

{
  type:"graduation",
  name:"graduateBox",
  price:"55$",
  path:"images/39.jpg",

}
,

{
  type:"graduation",
  name:"Graduate Ornament",
  
  price:"50$",
  path:"images/grad8.jpg",

}
,

{
  type:"graduation",
  name:"mugsGraduation",
  price:"45$",
  path:"images/116.jpg",

}

   
  ];
 ///search fuction///
  function search(val){
      var col="";
      for(var i=0;i<gifts.length;i++){
        
      if(gifts[i].type.includes(val)){
        col+=`

        <div class="col-md-4 py-4 ">
        <div class="card rounded ">
            <img src="${gifts[i].path}" class="card-img-top w-100"alt="...">
            <div class="card-body ">
                <h6>name</h4>
                <h6>price</h4>
                <h6>rev</h4>
            
            </div>
          </div> 
    </div>`
   
    
    }
   
     document.getElementById("occassionRow").innerHTML=col;
    $("#Main-images").hide();
     $("#BstProduct").hide();
    
      
    }
  }
//subImage section//
$(".sub-images").click(function(){
  let currentSrc=  $(this).attr("src");
  $(".main-image").attr("src",currentSrc);
})