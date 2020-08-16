

function CommentFunction(){
    var Value1=document.querySelector("#inp1").value;

    var Value2 = document.querySelector("#pass").value;

    if( Value1 == ""){
        alert("Username is empty Please Add the username");
    }else if( Value2 == ""){
        alert("Password is empty Please Add the Passwoed");
    }


    const element1=document.createElement("div");

    element1.textContent= "username = "+document.querySelector("#inp1").value + "  & PassWord = "+document.querySelector("#pass").value;

    const commentBox=document.querySelector("#userCmt");

    commentBox.appendChild(element1);



    document.querySelector("#inp1").value="";
    document.querySelector("#pass").value="";

    

}