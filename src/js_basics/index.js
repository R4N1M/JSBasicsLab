
export const isNumberEven = (i) => {
if(i%2 === 0)
  {
    return true;
  }
  else {
    return false;
  }
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
};

export const getFileExtension = (str) => {
var arraystr=str.split('.');
  if(arraystr.length === 1)
  {
    return false;
  }else
  {
    return arraystr[arraystr.length-1];
  }
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
};

export const longestString = (arr) => {
var somme=0;
  var index=0;
  var compteur=0; //le nombre des numeros trouvés dans le tableau
  for(let i=0;i<arr.length;i++)
  {
    if(typeof arr[i] === 'string')
    {
      if(somme < arr[i].length)
      {
        somme = arr[i].length;
        index=i;
      }
    }
    else{
      compteur++;
    }
  }
  if(compteur !== arr.length)
  {
    return arr[index];
  }else {
    return '';
  }
  // arr will be an array.
  // Return the longest string in the array
};

export const reverseString = (str) => {
 var i;
  let revstr='';
  for(i=str.length-1;i>=0;i--)
  {
    revstr += str[i];
  }
  return revstr ;
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
};

export const isPalindrome = (str) => {
 var i;
  str = str.toLowerCase();
  var revstr=reverseString(str);
  for(i=0;i<str.length;i++)
  {
    if(str[i] !== revstr[i])
    {
      return false;
    }
  }
  return true;
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
};

export const nestedSum = (arr) => {
 var somme=0;
  var i=0;
  while(i<arr.length)
  {
    if(Array.isArray(arr[i]))
    {
      somme += nestedSum(arr[i]);
    }else if(typeof arr[i] === 'number') {
      somme+=arr[i];
    }
    i++;
  }

  return somme ;
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
