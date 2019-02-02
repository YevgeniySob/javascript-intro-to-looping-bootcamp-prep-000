function forLoop(arr){
  for(var i = 0; i < 25; i++){
    if (i === 1){
      arr.push('I am 1 strange loop.')
    } else {
      arr.push("I am 1 strange loop.")
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