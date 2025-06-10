let calculation = '';

        function updateCalculation(val){
            calculation += val;
            document.getElementById("screen").innerText = calculation;
        }

        function equals(){
            try{
                calculation = eval(calculation);
                document.getElementById("screen").innerText = calculation;
            }
            catch{
                document.getElementById("screen").innerText = "ERROR";
            }
        }

        function clearSc(){
            calculation = '';
            document.getElementById("screen").innerText = '0';
        }