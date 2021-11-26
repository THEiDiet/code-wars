function abbrevName(name){
  name =name.split(' ')
  let n = name[0][0]
  let s = name[1][0]
  return n.toUpperCase() +
    '.' + s.toUpperCase()
    }