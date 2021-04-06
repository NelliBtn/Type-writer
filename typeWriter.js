
const sentence = "hello there from lighthouse labs";
let n = 500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // use instead of console.log to avoid /n new line after each execution
  }, n)
  n += 200; // <= Increment delay for each char so they all have different delay time.
}
setTimeout(() => {
  // console.log() // gives back a newline automatically
  process.stdout.write('\n') //omit newline, so we can pass it in
}, n)

