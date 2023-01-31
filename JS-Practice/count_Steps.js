 processData=(num)=> {
    //Enter your code here
    var counter = 0 ;
var numList = [ ] ;

while ( num!= 1 ) {
  if ( num % 2 == 0 ) 
    num/=2 ;
    
  else {
 
    num = ( 3 * num ) + 1 ;}
  numList [ counter ] = num ;
  counter ++ ;
}
  // print 
  console.log(counter);
} 

processData(3);