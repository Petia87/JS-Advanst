let n= +gets();
let x=+gets()
let result=1
let res=0

let sum=1

//S=1 + 1.1/x.1 + 1.2/x.2 + 1.2.3/x.3 + …+ 1.2.3…N/x.N
//sum +=Factoriel(i) /Math.Pow(x, I);
for (let i = 1; i <=n; i++) {
    result=result*i
    let del=Math.pow(x,i)
 res=result/del
    sum+=res
      
}
print(sum.toFixed(5))