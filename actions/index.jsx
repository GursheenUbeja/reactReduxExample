  const selectUser_NOtWorking = (user) =>{
     console.log(user.first);
     return({
         type : "USER_SELECTED",
         payload :user
     })
}



 export default function selectUser(user){
    console.log(user.first);
    return({
        type : "USER_SELECTED",
        payload :user
    })
}
