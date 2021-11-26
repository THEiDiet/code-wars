function basicOp(o, v1, v2) {
  return o == '+' ? v1+v2 : o == '-' ? v1 -v2 
  : o == '/'? v1/v2 : o == '*' ? v1*v2 : 'unknown  operation'
}