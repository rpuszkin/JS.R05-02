function sentenceToUpperCase(sentence) {
  const words = sentence.split(" ");

  words.forEach((word, i) => {
    //powiększone będą parzyste słowa i ewentualnie jedno bo będzie mieć indeks 0
    if (!(i % 2)) {
      words[i] = word.toUpperCase();
    }
  });

  return words.join(" ");
}

//przykładowy input:
const result1 = sentenceToUpperCase("test");
const result2 = sentenceToUpperCase("Ala ma kota");
const result3 = sentenceToUpperCase("Raz dwa trzy cztery");
console.log(`${result1} ${result1}, ${result2}, ${result3}`);
