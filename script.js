function sentenceToUpperCase(sentence) {
  let words = sentence.split(" ");

  words.forEach((word, i) => {
    if (i % 2 === 0) {
      words[i] = word.toUpperCase();
    }
  });

  return words.join(" ");
}

//przykładowy input:
const result1 = sentenceToUpperCase("Ala ma kota");
const result2 = sentenceToUpperCase("Raz dwa trzy cztery");
console.log(result1, result2);
