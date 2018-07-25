function numero(n){
       if ( typeof n==='number') 
         {
       return true;  
         }
       
       
} 



function multiplicarInteiro(n){
  var soma=1,i=0;
  if (n===0)
    {
     
      soma=0;
    }

  if (numero(n) ===true)
    {
   
     for(i = 1;i <= n;i++)
       
     soma=soma*i;       
     return soma;
     
    }  
  
 

} 



console.log(multiplicarInteiro(3));