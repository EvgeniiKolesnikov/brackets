module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map((arr) => arr.join(''));
  
  let tempStr = str;
  let newStr = '';

  // console.log('brackets = ', brackets);
  // console.log('str = ', str);
  // let iteraion = 0;

  while (newStr !== tempStr) {
    // console.log('iteraion = ', ++iteraion);
    newStr = tempStr;
    brackets.map((bracket) => {
      // console.log('bracket = ', bracket);
      while (tempStr.indexOf(bracket) !== -1) {
        tempStr = tempStr.replace(bracket, '');
        // console.log('tempStr = ', tempStr);
      }
    });
  }

  // console.log('newStr = ', newStr);
  return newStr === '' ? true : false;
};
