let userName = document.getElementById("username");
let userImage = document.getElementById("userimage");
let batchNum = document.getElementById("batchno");
let enterBtn =document.querySelector(".btn1_Enter");



const postData = async(e) => {
     e.preventDefault();
     const name = userName.value.trim();
     const image= userImage.value.trim();
     const batch= batchNum.value.trim();

    if ((name.length === 0) && (image.length === 0) && (batch.length === 0 )) {
        alert("Please give valid data");
        return ;
    }

    var userData = {username: name, batchNo: batch};
    var userdetail  = GetUserDetails(userData);
    console.log(userdetail);
    if(userdetail ==null || userdetail == undefined ){
      // call post menthod to insert the data since the user don't exists
      console.log('User does not Exists');
    
    }
    else{
      //chekc the statis of isLogin and call the put method to update the data.
      console.log('user exists');
    }
  
   try { 
     /*
        const response = await axios.request({
        method:"post",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr",
        headers : {
                  "X-Parse-Application-Id": "MVV6avFp",
                  "Content-Type": "application/json",
                },
        data:{
            "username": name,
            "isLogin": true,
            "img": image,
            "batchNo": Number(batch),
        },
      
        
      });
      // console.log("hi");

      console.log(response.data)

      // if(response!=null)
      //   {
      //       if(response.status==200)
      //       {

      //       }

      //   }

         */
      
   } 
 
   catch (error) {

      console.error(error.message);
       
   } 

  
   userName.value=" ";
   userImage.value=" ";
   batchNum.value=" ";
   
};



async function GetUserDetails(userdata)
{
  
  const response = await axios.request({
    method:"get",
    url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr?where="+Json.stringify(userdata)+Json.stringify(batchNo),
    headers : {
              "X-Parse-Application-Id": "MVV6avFp",
              "Content-Type": "application/json",
            },
    data:{} ,
  });
  
  console.log(response.data);
  return response.data;
}

 function hide(e) {
  e.preventDefault();

  const targetDiv = document.getElementById("page1");
  targetDiv.style.display = "none";
};




//  const putData = async() => {


//    try { 
     
//         const response = await axios.request({
//         method:"put",
//         url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr/NwKORk1KaZ",
//         headers : {
//                   "X-Parse-Application-Id": "MVV6avFp",
//                   "Content-Type": "application/json",
//                 },
//         data:{

//             "isLogin": false
//         },
      
       
//       });
    
//       console.log(response.data);
      
//    } catch (error) {

//       console.error(error.message);
       
//    } 

// };

// getData().then(()=>putData());



enterBtn.addEventListener('click',postData);

//  enterBtn.addEventListener("click",()=>{

//   postData();
    //  hide();

//   //  postData().then (()=>hide());
   

//  });
 