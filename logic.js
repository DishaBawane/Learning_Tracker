let userName = document.getElementById("username");
let userImage = document.getElementById("userimage");
let batchNo = document.getElementById("batchno");
let enterBtn =document.querySelector(".btn1_Enter");


const postData = async() => {


    // if ((userName.value.length === 0) && (userImage.value.length === 0) && (batchNo.value.length === 0 )) {
    //     alert("Please give valid data");
    //     return ;
    // }

  
   try { 
     
        const response = await axios.request({
        method:"post",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr",
        headers : {
                  "X-Parse-Application-Id": "MVV6avFp",
                  "Content-Type": "application/json",
                },
        data:{
            "username": userName.value,
            "isLogin": true,
            "img": userImage.value ,
            "batchNo": batchNo.value,
        },

        
      });


   
      
   } catch (error) {

      console.error(error.message);
       
   } 

   getData();
   userName.value=" ";
   userImage.value=" ";
   batchNo.value=" ";

   
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



//  const putData = async() => {


   
//    try { 
     
//         const response = await axios.request({
//         method:"put",
//         url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/pvbc_usr",
//         headers : {
//                   "X-Parse-Application-Id": "MVV6avFp",
//                   "Content-Type": "application/json",
//                 },
//         data:{

//             "isLogin": true
//         },
//         body:JSON.stringify(data)

               
//       });
   
      
//    } catch (error) {

//       console.error(error.message);
       
//    } 

// };


//  getData();
 enterBtn.addEventListener("click",postData)
 