function prompt(){
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Input first number:', (x) => {
    rl.question('Input second number:',(y)=>{
      var intX = parseInt(x);
      var intY = parseInt(y);
      console.log('x+y=' + (intX+intY));
      rl.close();
    });
  });
}

module.exports.prompt = prompt
