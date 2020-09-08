function noVowels(sentence) {

    let arraySentence = sentence.split(' ');
    let newSentence= [];
   // console.log(arraySentence);
    for (let i = 0; i < arraySentence.length; i++) {
       let subArray = arraySentence[i].split('');
    //    console.log(subArray);
      for (let index = 0; index < subArray.length; index++) {
          if ( subArray[index] == "a" || subArray[index] == "e" || subArray[index] == "i" || subArray[index] == "o" || subArray[index] == "u") {
              subArray[index].replace(subArray[index],'');
          }else{
                let assem = [];
                assem.push(subArray[index]);
                assem.join(' ')
                newSentence.push(assem);
          }   
      }

    }
    console.log(newSentence.join(''));
 }