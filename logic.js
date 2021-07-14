

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

  
   try { 
     
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
      // console.log(response.data)
      // if(response!=null)
      //   {
      //       foreach(user in response.data.results{
               if(user.userName === user.)
      }

      //   }

         
      
   } 
 
   catch (error) {

      console.error(error.message);
       
   } 

   await getData();
   userName.value=" ";
   userImage.value=" ";
   batchNum.value=" ";
   
};



const getData=async()=>{

    const response = await axios.request({
        method:"get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr",
        headers : {
                  "X-Parse-Application-Id": "MVV6avFp",
                  "Content-Type": "application/json",
                },
        data:{} ,
      });
      

      console.log(response.data)
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



enterBtn.addEventListener('click',hide);

//  enterBtn.addEventListener("click",()=>{

//   postData();
    //  hide();

//   //  postData().then (()=>hide());
   

//  });
 