const billAmount=document.querySelector("#billamount");
const btn = document.querySelector("#btn");
const cashGiven=document.querySelector("#cash-give");
const message=document.querySelector("#error-message");
const notes=document.querySelectorAll(".no-of-notes");

var availableNotes=[2000,500,100,50,20,10,5,1];
btn.addEventListener("click",function(){
    message.style.display="none";
    if(billAmount.value>0 &&cashGiven.value>0){
        var amountToReturned=cashGiven.value-billAmount.value;
        if(amountToReturned>0){
            calculateamount(amountToReturned);
        }
       else{
        console.log(billAmount.value);
        console.log(cashGiven.value);

        showmessage("Do you want to wash plates?")
       }
    }
    else if(billAmount.value<0){
     showmessage("Invalid bill amount")
     console.log(billAmount.value);
    }
    else if(typeof billAmount.value==="string"){
showmessage("Input any number not any character");
    }
});
function calculateamount(amountToReturned){
    for(let i=0;i<availableNotes.length;i++){
       var NoOfnotes=Math.trunc(amountToReturned/availableNotes[i]);
        amountToReturned=amountToReturned%availableNotes[i];
        notes[i].innerText=NoOfnotes;
    }
}

function showmessage(msg){
    console.log("here");
    message.innerText=msg;
    message.style.display="block";
}


// for(let i=0;i<typesofnotes.length;i++){
//     notes[i].innerText=Math.trunc(amountToReturned/typesofnotes[i].innerText);
//     amountToReturned=amountToReturned%typesofnotes[i].innerText;
// }