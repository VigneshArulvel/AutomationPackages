function main (){
    
}
function showTextBox(){
    var ipBox = document.getElementById("ipBox");
    var checkBoxIp2 = document.getElementById("checkBoxIp2");
    var checkBoxIp1 = document.getElementById("checkBoxIp1");
    if (checkBoxIp2.checked == true && checkBoxIp1.checked == true){
        ipBox.style.display = "block";
    }
    else{
        ipBox.style.display = "none";    
    }
}