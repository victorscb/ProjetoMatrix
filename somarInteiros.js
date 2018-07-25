function somarInteiro(n){
  var soma=0,i=0;

  if ( typeof n==='number')
    {
   
     for(i = 1;i <= n;i++)
       
     soma=soma+i;       
     return soma;
     
    }  
 
     return "undefined";

} 



console.log(somarInteiro(5));