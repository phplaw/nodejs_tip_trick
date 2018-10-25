// print process.argv
// node print.process.argv.js one two=three four
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


// EXAMPLE

//$ node print.process.argv.js foo=bar fizz=buzz
// bar
// buzz

const args = process.argv
    .slice(2) /* remove node & file_name from array */
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

console.log(args.foo)
console.log(args.fizz)
// https://docs.nodejitsu.com/articles/command-line/how-to-parse-command-line-arguments/



