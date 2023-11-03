import { Component } from "react";

class C1 extends Component {
    render()
    {
        function ageCalculator(){
             var userinput = document.getElementById("DOB").value;
             if(userinput==null || userinput=='') {      
                return document.getElementById("result").innerHTML = "Choose a date please!!";;   
            }
            else {
                var dob = new Date(userinput);
                var month_diff = Date.now() - dob.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                var age = Math.abs(year - 1970);
                return document.getElementById("result").innerHTML = "You are " + age + " years old.";
            }
           
            
        }
        return(
            <div className="App">
                <h1 className="App-header">Age Calculator</h1>
                <h3 className="content">Enter your date of birth</h3>
                <input type="date" id="DOB"></input>
                <br />
                <button type="submit" className="button" onClick={ageCalculator}>Calculate Age</button>
                <h2 id="result" style={{color:"black", textAlign:"center" }}></h2>
            </div>
        )
    }
}

export default C1;
