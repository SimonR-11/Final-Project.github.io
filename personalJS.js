function calc(){
    let output = document.getElementById("output");
    let output3 = document.getElementById("output3");
    let output4 = document.getElementById("output4");
    let mail = document.getElementById("mailAddress").value;
    let creditInfo = document.getElementById("creditInfo").value;
    mail.requred = true;
    creditInfo.requred = true;

    if(mail.trim()==="" && creditInfo.trim()===""){
        document.getElementById("output5").innerHTML = "Please input you mailing and banking information, otherwise we can not ship this item to you."
    }
    else if(mail.trim()==="" || creditInfo.trim()===""){
        document.getElementById("output5").innerHTML = "Please input you mailing and banking information, otherwise we can not ship this item to you."
    }
    else if(creditInfo>99999999 || creditInfo<10000000){
        document.getElementById("output5").innerHTML = "Your credit card number is not possible. Please try again."
    }
    else{

        let output3 = 5 + 5 * 0.1;
        const box = document.querySelector(".subtotal");
        box.classList.add("subtotalActive");    
        box.classList.remove("subtotalActive"); 
        box.classList.toggle("subtotalActive");
        document.getElementById("output").innerHTML = "$5.00";
        const box2 = document.querySelector(".total");
        box2.classList.add("subtotalActive2");    
        box2.classList.remove("subtotalActive2"); 
        box2.classList.toggle("subtotalActive2");
        document.getElementById("output3").innerHTML = "$"+output3+"0";
        const box3 = document.querySelector(".finalRemark");
        box3.classList.add(".remarked");    
        box3.classList.remove(".remarked"); 
        box3.classList.toggle(".remarked");
        document.getElementById("output4").innerHTML = "Your Card is on it's way. It will make it to "+mail+" within 2-4 days.";
    }
    
   

}
function add(){
    let amountOfMoneyPlaced = document.getElementById("moneyInput").value;
    let cardNumber = document.getElementById("card_Number").value;
    let inputed = document.getElementById("moneyInput").value;
    if(cardNumber>9999999 || cardNumber<1000000){
        document.getElementById("N/A").innerHTML = "Your inputed number is too long/short. Try Agian.";
    }
    else{
        document.getElementById("N/A").textContent = "";
        document.getElementById("currentAmount").innerHTML = "$"+inputed;
    }
}