console.log("MANZO OLGUIN ALEX YAZMIN");

const limnite=[50];
function fibo(numero){
let a=0,b=1,c,s=1;
console.log(a);
console.log(b);
for(let i=0; i<=numero;i++){
c=a+b;
console.log(c);
s=s+c;
a=b;
b=c;
}
}
limnite.forEach(fibo);


