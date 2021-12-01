function ensureQuestion(s) {
    // Code here
    if (s[s.length - 1] == '?') {
      return s
    } else {
      return s + '?'
    }
}
