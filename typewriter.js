const sentence = "hello there from lighthouse labs";

  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);  
    }, i*50)
  }
  setTimeout(() => {
    console.log('\n');
  }, sentence.length*50)

//Paired Programming with Daniel L.
/*
const sentence = "hello there from lighthouse labs";
 for(let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
   if (i < sentence.length - 1) {
    process.stdout.write(sentence[i]);
   } else if (i === sentence.length - 1) {
    process.stdout.write(sentence[i] + '\n');
   } 
  }, i * 50)
 }
*/
