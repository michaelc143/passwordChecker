var upperCase = document.getElementById('upCaseReq');
var reqNum = document.getElementById('numReq');
var specCharReq = document.getElementById('specCharReq');
var passInput = document.getElementById('passInput');

function checkPass() {
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var hasNumber = /\d/;
    const checkedUC = upperCase.checked;
    const checkedNum = reqNum.checked;
    const checkedSC = specCharReq.checked; //^^^ all bool vals

    const checkedPI =  passInput.value;//getting checked vals of all inputs

    var upperChecker = 0;
    var numberChecker = 0;
    var specialCharChecker = 0;

    if(checkedPI.length == 0) 
        return alert("No password inputted");

    for(var i=0; i<checkedPI.length; i ++) {
        if(hasNumber.test(checkedPI.charAt(i)))
            numberChecker++;
        if(checkedPI.charAt(i).toUpperCase() == checkedPI.charAt(i))
            upperChecker++;
        if(spChars.test(checkedPI))
            specialCharChecker++;
        
    }

    if(checkedUC && (upperChecker == 0))
        return alert("Password requires an uppercase letter as per specifications");

    if(checkedNum && (numberChecker == 0))
        return alert("Password requires a number as per specification");

    if(checkedSC && (specialCharChecker == 0))
        return alert("Password requires a special character as per specification");

    return alert("Password has passed all selected requirements")

}