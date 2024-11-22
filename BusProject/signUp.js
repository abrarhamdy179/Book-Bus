
function validation_SignUp() {
    var Full_Name = document.getElementById("Full_Name").value;
    var National_ID = document.getElementById("National_ID").value;
    var Age = document.getElementById("Age").value;
    var Phone = document.getElementById("Phone").value;

    if (Full_Name === "" || National_ID === "" || Age === "" || Phone === "") {
        alert("Fill The Data");
    }
    else 
    {
            let names = Full_Name.split (" "); // if length of array is 3 
            if(names.length == 3)
            {
            if (National_ID.length == 14) {
                if (Age > 16) {
                    if (Phone.length == 11) {
                        alert("SignUp Successfuly");
                    }
                    else {
                        alert("phone must be equal 11 ");
                    }
                }
                else {
                    alert("Age Must be  greater Than 16");
                }
            }
            else {
                alert("National ID Must be Equal  14 ");
            }
        }
        else {
            alert("Your Name Must be contain Three Names ");
        }
    }

}


