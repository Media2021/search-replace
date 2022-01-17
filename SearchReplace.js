function myReplace(str, before , after) {
    var strWords = str.split(" ");
    for (let i=0; i<strWords.length; i++){
        if (strWords[i] === before) {
            strWords[i] = after;
            
        }
    }
    let newStr = strWords.join(" ");
    console.log(newStr)
}

myReplace("A quick brown fox jumped over the lazy dog ", "jumped", "leaped");