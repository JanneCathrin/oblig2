
        // CONTROLLER

        function borderBar(barNo) {
            if (barNo == barNumber) {
                barNumber = 'No bar chosen';
                anotherbutton = 'Disabled';
        } 
            else {
                barNumber = barNo;
                anotherbutton = '';     
        }
        show();
        }

        function addBar() {
            if (inputValue < 1 || inputValue > 10) {
                alert ('invalid value on add bar');
                return inputValue;
        }
            numbers.push(inputValue); //push adde meire men rett bak

        show();
        }
       
        function changeBar(){
            if (inputValue < 1 || inputValue > 10) {
                alert('invalid value on change bar');
                return inputValue;
        }
            numbers.splice(barNumber -1, 1, inputValue);  
        show();   
        }

        function takeawayBar(){
            numbers.splice(barNumber - 1, 1,);
        show();

        }
    
    
