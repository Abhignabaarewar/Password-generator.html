var password = document.querySelector(".outputBox");
$(".genButton").click(
    function(){
        var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var password = "";
        passLen = $(".passLength").val();
        for(i=0; i<passLen; i++){
            tempNumber = Math.floor(Math.random() * char.length);
            password += char.substring(tempNumber, tempNumber +1);
        }
        document.querySelector(".outputBox").value = password;
    }
)
$(".copyButton").click(
    function(){
        var copyText = $(".outputBox");
        copyText.select();
        document.execCommand("copy");
    }
)
function displayToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }