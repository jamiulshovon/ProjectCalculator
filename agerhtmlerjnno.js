const numBtnNodeList= document.querySelectorAll('input[type="submit"]');
const nodeListToArray=Array.prototype.slice.call(numBtnNodeList);

       for (let i = 0; i < nodeListToArray.length; i++) {
           const element = nodeListToArray[i];

            element.addEventListener("click",function(){
            const btnValue = element.value;
            const parseBtnValue =btnValue.toString();
            const displayText =document.getElementById('display').value;
            const parseDisplayText =displayText.toString();
            const totalShow = parseDisplayText+parseBtnValue;
            document.getElementById('display').value=totalShow;
            
            if(btnValue=="+"){
             const convertInt = parseFloat(totalShow);
             const findIndex = totalShow.indexOf("+");
             const fibo =convertInt;
             let i =findIndex;
             fibo[i] = fibo[i -1] + fibo[i + 1]; 
            console.log(fibo)
            };   

           });
           };

           

