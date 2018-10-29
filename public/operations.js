function calculate(){
    let n1=$("#num1").val();
    let n2=$("#num2").val();
    let oper=$("#operators").val();
   
    if(oper === '+'){
       
    $("#result").val(parseInt(n1)+parseInt(n2));
    return parseInt(n1)+parseInt(n2);
        
    }
    if(oper === '-'){
       
        $("#result").val(parseInt(n1)-parseInt(n2));
        return parseInt(n1)-parseInt(n2);
            
        }
        if(oper === '*'){
       
           $("#result").val(parseInt(n1)*parseInt(n2));
           return parseInt(n1)*parseInt(n2);
            
                
            }
            if(oper === '/'){
       
                $("#result").val(parseInt(n1)/parseInt(n2));
                
                return parseInt(n1)/parseInt(n2);
                }
}