let fib=['1','1']
let i = 0;
while(true){
  let fibo = sumStr(fib[i],fib[i+1]);
  fib.push(fibo)

  if (fib[i+2].length>=1000){
    console.log('F'+(i+3)+' = '+fibo) // i+3 is the index starting from 1
    break
  }
  i++
}

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
    let digit1 = 0;
    let digit2 = 0;

    if (str.charAt(idxa)){
      digit1 = Number(str.charAt(idxa));
    }
    if (str2.charAt(idxb)){
      digit2 = Number(str2.charAt(idxb));
    }

    localRes = digit1 + digit2 + extra;

    if(localRes >= 10){
      res += String(localRes-10)
      extra = 1;
    } else {
      res += String(localRes);
      extra = 0;
    }
  }
  //add '1' if there's extra remaining on last round
  if(extra !== 0){
    res+='1'
  }

  res = reverse(res)
  return res
}

function reverse(str){
  let res = ''
  for (let i=str.length-1;i>=0;i--){
    res+=str.charAt(i)
  }
  return res
}
