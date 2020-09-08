// function noVowels(sentence) {

//     let arraySentence = sentence.split(' ');
//     let newSentence= [];
//    // console.log(arraySentence);
//     for (let i = 0; i < arraySentence.length; i++) {
//       for (let index = 0; index < arraySentence[i].length; index++) {
//           var vowel ;
//           if ( arraySentence[i][index] == "a" || arraySentence[i][index] == "e" || arraySentence[i][index] == "i" ||
//            arraySentence[i][index] == "o" || arraySentence[i][index] == "u") 
//            {

//               vowel = arraySentence[i][index];
//           }
             
//       }

//       let idx = arraySentence[i].lastIndexOf(vowel);
//       arraySentence[i] = arraySentence[i].replace(arraySentence[i][idx],'');
//       newSentence.push(arraySentence[i])

//     }
//     console.log(newSentence.join(' '));
//  }


function noVowels(sentence){
    let arraySentence = sentence.split(' ');

    let newSentence = arraySentence.map((word)=>{
       return  word.replace( /[aeiou]/g, '');
    })
    console.log(newSentence.join(' '));
}



noVowels("i am a living witness but out of memory issue");
// console.log(result);