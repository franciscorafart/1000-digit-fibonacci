console.log(sumStr('3039','234'));

//function to sum strings numbers
function sumStr(str, str2){
  let extra = 0;
  let length;
  let res = ''

  if (str.length > str2.length){
    length = str.length
  } else {
    length = str2.length
  }

  for (let idxa = str.length-1, idxb= str2.length-1; idxa>=0 || idxb>=0; idxa--, idxb--){
    let digit1, digit2 = 0;
    //control
    if (str.charAt(idxa)){
      digit1 = Number(str.charAt(idxa));
    }
    if (str2.charAt(idxb)){
      digit2 = Number(str2.charAt(idxb));
    }

    localRes = digit1 + digit2 + extra;

    if(localRes >= 10){
      res+=Number(localRes-10)
      extra = 1;
    } else {
      res += String(localRes);
      extra = 0;
    }
  }
  res = reverse(res)
  return res
}

function reverse(str){
  let res = ''
  for (let i=str.length;i>=0;i--){
    res+=str.charAt(i)
  }
  return res
}
