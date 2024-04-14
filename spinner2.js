process.stdout.write('hello from spinner1.js... \rheyyy\n')

let spinner = ["|   ", "/   ", "-   ", "\\   ", "\n"];
let ms = 100;

for (const item of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, ms);
  ms += 200
};