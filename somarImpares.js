
function somarImpares(n){
var soma=0,i=0,controle=0;
  if (typeof n ==="number") 
   {
       for(i=1;controle<n;i++)
       {
           if(i%2 !==0)  
           {   

            soma+=i;  
            controle=controle+1;
           
           }
         
         
         
       }  
     return soma;

   }
 
     return "undefined";
} 

console.log(somarImpares(3));