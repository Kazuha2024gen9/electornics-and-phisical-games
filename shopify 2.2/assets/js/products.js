var addform = document.getElementById('addform');
var pname = document.getElementById('pname');
var price = document.getElementById('price');
var img = document.getElementById('img');
var des = document.getElementById('des');

addform.addEventListener("submit", (e)=>{
    e.preventDefault();
    var products = JSON.parse(localStorage.getItem("products"))
    var data = {pname:pname.value,price:price.value,des:des.value,img:img.files[0].name}
    if(products){
        products.push(data);
    }else{
        products = [data];
    }
    localStorage.setItem("products",JSON.stringify(products));

    alert("your product has been added");
    pname.value = "";
    price.value = "";
    img.value = "";
    des.value = "";
    view()
})

//!-------------------------------------------------
var tbody = document.getElementById("tbody") //?

function view(){
    var products = JSON.parse(localStorage.getItem("products")) //?
    tbody.innerHTML = ""
    products.forEach((elem,i)=>{
        console.log(elem);
        tbody.innerHTML += `                <tr>
                    <td>${1+i}</td>
                    <td>${elem.pname}</td>
                    <td>${elem.price} EGP</td>
                    <td>${elem.des}</td>
                    <td>
                        <img src="assets/img/${elem.img}" class="product-img" alt="">
                    </td>
                    <td>
                        <div class="btn-group">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="productDataUpdateModel(${i})" >edit</button>
                        <button class="btn btn-danger" onclick="del(${i})">delete</button>
                        </div>
                    </td>
                    </tr>`
    })
}

view()

// [
//     {id:1,name:kfbke},
//     {id:2,name:basma},
//     {id:3,name:jdbnlc}
// ]


function del(id){
    var products = JSON.parse(localStorage.getItem("products"))
    products.splice(id,1)
    localStorage.setItem("products",JSON.stringify(products));
    view()

}










var UpdateId = document.getElementById('updateId');

var UpdateName = document.getElementById('update_name');
var UpdateDesc = document.getElementById('update_Dec');
var Updateprice = document.getElementById('update_Price');


function productDataUpdateModel (id){


    var products = JSON.parse(localStorage.getItem("products"))
    UpdateName.value = products[id].pname
    UpdateDesc.value = products[id].des
    Updateprice.value = products[id].price 
    UpdateId.value = id
console.log(Updateprice.value,id,UpdateName.value)
    
}


var updateform = document.getElementById('updateform');
var updateImg = document.getElementById('updateimgg');
updateform.addEventListener("submit",(e)=>{
    e.preventDefault()
    var products = JSON.parse(localStorage.getItem("products"))
    var immmmgg; 
    if(updateImg.value){
        immmmgg = updateImg.files[0].name
        var data = {pname:UpdateName.value,price:Updateprice.value,des:UpdateDesc.value,img:immmmgg}
    products[UpdateId.value] = data


    localStorage.setItem("products", JSON.stringify(products))

    location.reload();
    }else{
        alert("photo not changed ")
    }
    

})










































































// var updateform = document.getElementById('updateform');

// updateform.addEventListener("submit",(e)=>{

//     e.preventDefault() // to protect from auto handling 
//     var products = JSON.parse(localStorage.getItem("products"))
//     var data = {pname:UpdateName.value,price:Updateprice.value,des:UpdateDesc.value,img:""}
//     console.log(UpdateId.value)
//     // if(updateimg.value){
//     //     data.img = updateimg.files[0].name
//     // }
//     products[UpdateId.value] = data

//     localStorage.setItem("products",JSON.stringify(products))
//     // updatename.value = ""
//     // updateprice.value = ""
//     // updatedes.value = ""
//     // updateID.value = ""
//     // updateimg.value = ""
//     view()
// })


























