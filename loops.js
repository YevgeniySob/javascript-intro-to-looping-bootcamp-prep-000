function forLoop(arr){
  for(var i = 0; i < 25; i++){
    if (i === 1){
        arr[1] = ('I am 1 strange loop.')
    } else {
        arr[i] = ("I am ${i} strange loops.")
    }
  }
  return arr
}

function whileLoop(n){
  while (n > 0){
    console.log(n)
    n--
  }
  return 'done'
}

var i = 0
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n){
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= n);
}