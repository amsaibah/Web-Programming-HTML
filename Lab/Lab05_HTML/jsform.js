
function progressFun(){

    // Name function
    const fname = document.getElementById("fnameinp").value;
    const lname = document.getElementById("lnameinp").value;
    if(fname === "" || lname === ""){
        alert("Please fill in both First Name and Last Name.");
        return false;
    }
    else{
        const fullName = fname + ", " + lname;
        document.getElementById("fullName").value = fullName;
    }

    // -----------------------------------------------------------

    // Salary function

    weekList = [
        parseFloat(document.getElementById("valueOfMon").value) ,
        parseFloat(document.getElementById("valueOfTue").value) ,
        parseFloat(document.getElementById("valueOfWed").value) ,
        parseFloat(document.getElementById("valueOfThu").value) ,
        parseFloat(document.getElementById("valueOfFri").value) ,
        parseFloat(document.getElementById("valueOfSat").value) ,
        parseFloat(document.getElementById("valueOfSun").value) 
    ]

    let sumHourPerWeek = 0;
    let salaryPerDay = parseFloat(document.getElementById("hourlySalary").value);
    let salaryPerWeek = 1;
    for (let i = 0; i<7; i++){
        if (weekList[i] > 8){
            alert("You can't work more than 8 hours.")
            return false;
        }
        else{
            sumHourPerWeek += weekList[i];
        }
    }
    salaryPerWeek = salaryPerDay * sumHourPerWeek;
    document.getElementById("weekEarn").value = salaryPerWeek;

}