

let string = "";
for (let i = 0; i < document.querySelectorAll(".buttons").length; i++) {
    document.querySelectorAll(".buttons")[i].addEventListener("click", () => {
        let button = document.querySelectorAll(".buttons")[i].innerHTML;
        let input = document.querySelector("input");
    
        if (button == "=") {
            if(string==="")
            {
                input.value="0";
            }
            else{
                string = eval(string);
                input.value = string;
            }
           
        }
        else if (button === "CE") {
            string = "";
            input.value = "0";
        }
        else if (button === "DE") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += button;
            input.value = string;
        }
    });
}
