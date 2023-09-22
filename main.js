let result = document.getElementById("result");

function output(anyButton) {
    let pressedButton = anyButton.innerHTML;
    let preButton = result.innerHTML.slice(-1);
    
    
    if (pressedButton == "AC" ) {
        
        result.innerHTML = "0";
        
    } else if (pressedButton == "=") {
        
        result.innerHTML = eval(result.innerHTML);
        
    }
    
    
    else if (result.innerHTML == "0" && pressedButton == "00") {
        
        result.innerHTML = "0";
        
    } else if (result.innerHTML == "0" && pressedButton == "+") {
        
        result.innerHTML = "0";
        
    } else if (result.innerHTML == "0" && pressedButton == "-") {
        
        result.innerHTML = "-";
        
    } else if (result.innerHTML == "0" && pressedButton == "*") {
        
        result.innerHTML = "0";
        
    } else if (result.innerHTML == "0" && pressedButton == "/") {
       
        result.innerHTML = "0";
        
    } else if (result.innerHTML == "0" && pressedButton == ".") {
        
        result.innerHTML = "0.";
        
    }  else {
        
        if (result.innerHTML == "0") {
            
            result.innerHTML = pressedButton;
            
        } else if (result.innerHTML == "0") {
           
           result.innerHTML = "0";
            
        } else {
            
            
            
           if (result.innerHTML != "0" && pressedButton == "+" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "-" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "*" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "/" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "0" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1) ;
               
           } else if (result.innerHTML != "0" && pressedButton == "00" && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-2);
               
           } else if (result.innerHTML != "0" && pressedButton == "." && preButton == "+") {
               
               result.innerHTML += pressedButton.slice(0,-1) + "0.";
               
           } 
           
           
           else if (result.innerHTML != "0" && pressedButton == "+" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "-" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "*" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "/" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "0" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "00" && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-2);
               
           } else if (result.innerHTML != "0" && pressedButton == "." && preButton == "-") {
               
               result.innerHTML += pressedButton.slice(0,-1) + "0."; 
           
           } 
           
           
           else if (result.innerHTML != "0" && pressedButton == "+" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "-" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "*" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "/" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "0" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "00" && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-2);
               
           } else if (result.innerHTML != "0" && pressedButton == "." && preButton == "*") {
               
               result.innerHTML += pressedButton.slice(0,-1) + "0."; 
           
           } 
           
           
           else if (result.innerHTML != "0" && pressedButton == "+" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "-" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "*" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "/" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "0" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "00" && preButton == "/") {
               
               result.innerHTML += pressedButton.slice(0,-2);
               
           }
           
           
           else if (result.innerHTML != "0" && pressedButton == "+" && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "-" && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "*" && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "/" && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1);
               
           } else if (result.innerHTML != "0" && pressedButton == "." && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1);
           
           } else if (result.innerHTML != "0" && pressedButton == "." && preButton == ".") {
               
               result.innerHTML += pressedButton.slice(0,-1) + "0."; 
               
           } else {
               
                   result.innerHTML += pressedButton;
                   
           }
        }
    }
}