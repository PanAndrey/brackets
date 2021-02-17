module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  let open = [];
  let close = [];
  let st = [];
  bracketsConfig.forEach(element => {
    open.push(element[0]);
    close.push(element[1]);
  });
  for (let i = 0; i < strArr.length; i++) {
    if (close.indexOf(strArr[i]) != -1) {
      let brkt = open[close.indexOf(strArr[i])];
      let lastSt = st[st.length - 1];
      if (lastSt == brkt) {
        st.pop();
      } else {
        st.push(strArr[i]);
      }
    } else {
      st.push(strArr[i]);
    }
  }
  return st.length == 0;
};