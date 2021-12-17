
let users = [{name:"nurhan", pass: 12345678},{name:"muhamed", pass:1111222},{name:"omar",pass: 1111}]
localStorage.setItem('user', JSON.stringify(users) )
function getFocus(e)
{
   var x = document.getElementById("username").focus();
  
    e.style.border="solid 4px red";
    
}



function checkValidation()
{
    document.getElementById("username").blur();
    //e.style.border="solid 1px black";
    var x= document.getElementById("username").value;
    var y = +document.getElementById("password").value;
    console.log(x, y)
    const userss =  JSON.parse(localStorage.getItem('user'))
console.log(userss)
const checking = userss.find(el => el.name === x && el.pass === y);
console.log(checking)
if(!checking){
        //document.getElementById("validation").innerHTML="Invalid name!";
     document.getElementById("validation").style.color="red";
     document.getElementById("invalidpass").innerHTML= "incorrect name or passwrod!"
            document.getElementById("invalidpass").style.color = "red";
     //document.getElementById("username").style.backgroundColor="gray";

     //e.select();
     return false;
}else{
    document.getElementById("validation").innerHTML="Valid username.";
    document.getElementById("validation").style.color="green";
    document.getElementById("name").style.backgroundColor="white";

    return true;
}
     
     
     
    

    
   
    

   

}



// function pass(){

//     var x = document.getElementById("password").value;
    

//     for(password in localStorage)
//     {

//         if(x==localStorage[password])

//          return true;

//          else
//          {
            


//          return false;
//          }
//     }


// }




/*for(user in localStorage)
{
    console.log(user);
}*/

