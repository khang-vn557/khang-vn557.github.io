function myfunction(){
    var email=document.getElementById("exampleInputEmail1").value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email==""){
        document.getElementById("error").innerHTML="vui lòng nhập email";
    } else if(!regex.test(email)) {
        console.log('email', email);
        console.log('regex', regex);
        document.getElementById("error").innerHTML="sai định dạng email";
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("hidden").style.display="block";
        document.getElementById("mb-3").style.display="none";
    }
}
function hiddenfunction1(){ document.getElementById("hi1").style.display="block";}
function hiddenfunction2(){ document.getElementById("hi2").style.display="block";}
function hiddenfunction3(){ document.getElementById("hi3").style.display="block";}
function hiddenfunction4(){ document.getElementById("hi4").style.display="block";}
function hiddenfunction5(){ document.getElementById("hi5").style.display="block";}
function hiddenfunction6(){ document.getElementById("hi6").style.display="block";}

function showfunction1(){ document.getElementById("hi1").style.display="none";}
function showfunction2(){ document.getElementById("hi2").style.display="none";}
function showfunction3(){ document.getElementById("hi3").style.display="none";}
function showfunction4(){ document.getElementById("hi4").style.display="none";}
function showfunction5(){ document.getElementById("hi5").style.display="none";}
function showfunction6(){ document.getElementById("hi6").style.display="none";}

