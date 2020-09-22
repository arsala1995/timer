const args = process.argv;
args.slice(2);

for(let i = 2; i < args.length; i++){
if(args[i] === []){
  console.log("no numbers provided")
}
if(args[i] < 0){
  i++;
}
 if(args[i] === ""){
  console.log("Input is not a number");

}
else{
  const delay = args[i]*1000;


setTimeout(() => {
  process.stdout.write(args[i]);
  process.stdout.write('\x07');


  
 }, delay);

}
}
