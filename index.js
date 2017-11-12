function theBeatlesPlay(musicians,instruments){
  var newArr = [];
  var counter = 0
  for(var i = 0; i < musicians.length;i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}

function johnLennonFacts(facts){
  var newArr = []
  var j = facts.length
  while(j > 0){
    newArr.push(`${facts[i]}!!!`)
    j--
  }
  return newArr
}

function iLoveTheBeatles(n){
  var newArr = []
  do{
    newArr.push("I love the Beatles!")
    n++
  } while(n<15);
  return newArr
}
