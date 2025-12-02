/*    IGNORE LINE       */ function declare() {


// We start counting from 0
var total = 0;

// Each time we call add, we want to add x to our total
function add (x) {
 var total = total + x;
  
}

add(3);
add(4);
add(-1);

console.log(total); // This should log out 6






/*    IGNORE LINE       */ return add;} declare();