 function drawTree(a) {
     for (i = 1; i <= a; i++) {
         var star = '*';
         for (j = 2; j <= i; j++) {
             star += '**';
         }
         console.log(star);
     }
 }
 console.log(drawTree(6));
