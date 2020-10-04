function main(){
   let i = 4,
     d = 4.0,
     s = "HackerRank ";

   let i_2 ,
    d_2,
    s_2 ;
   
    // Read and save an integer, double, and String to your variables.
    i_2 = 3;
    s_2 = "is the best place to learn and practice coding!";
    
    // Print the sum of both integer variables on a new line.
    console.log(i + i_2);
    
    // Print the sum of the double variables on a new line.
    console.log((d+d_2).toFixed(1));
    
    // Concatenate and print the String variables on a new line
    s_2 = "is the best place to learn and practice coding!";

    // Print the sum of both integer variables on a new line.
    console.log(i + i_2);
    
    // Print the sum of the double variables on a new line.
    console.log((d+d_2).toFixed(1))
    
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s.concat(s_2));
}
