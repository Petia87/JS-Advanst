/*let input = ["20"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets()




let result1 =  a+b
let result2 =  a-b
let result3 = a*b
let result4 = a%b
let result5 = Math.pow(a,b)
print(result1)
print(result2)
print(result3)
print(result4)
print(result5)
*/
/* ********************* 
let input = ["20"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets()

let result1 =(4.54*100)/(1.6*a)

print(`${result1} litres per 100 km`)
/Нина/
let mpg = +gets()

let km = mpg * 1.6

let gallonsFor100km = 100 / km

let liters = gallonsFor100km * 4.54

print(${Math.floor(liters)} litres per 100 km)
*/
///////////////
/*let input = ["4","3","11","40"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let d = +gets()
let h = +gets()
let m = +gets()
let s = +gets()

//1 den=24*60*60*d
//1h=60*60*h
//1m=60*m
let sum=(24*60*60*d)+(60*60*h)+(60*m)+s


print(sum)*/

/*let input = ["2346"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a= +gets()
let b=parseInt(a/1000)
let c=parseInt((a%1000)/100)
let d=parseInt((a%100)/10)
let e=parseInt(a%10)


let sum = b+c+d+e

print(sum)*/
//////////////////////////////

/*let input = ["John"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a= gets()


print(`Hello, ${a}!`)*/

////////////////////Conditional Statements Coding Tasks
/*let input = ["4"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let hy= +gets()

let dy=0
if (hy<=2) {
    dy=hy*10
} else if (hy>2){
    let hy1=hy-2
      let dy1=hy1*4
      dy=(dy1+2*10)
}

print(parseInt(dy))*/

///////////////////////////
/*let input = ["April", "6"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month= gets()
let date= +gets()

let dy=0
if ((month=="March" && date>=20)
    ||(month=="April")|| (month=="May")||(month=="June" && date<21)) {
        print("Spring")
} else if ((month=="June" && date>=21)
||(month=="July")|| (month=="August")||(month=="September" &&date<22) ) {
    print("Summer")
} else if ((month=="September" && date>=22)
||(month=="October")|| (month=="November")||(month=="December" &&date<21) ) {
    print("Autumn")
}else if ((month=="December" && date>=21)
||(month=="January")|| (month=="February")||(month=="March" &&date<20) ) {
    print("Winter")


}*/
/*
let input = ["0.76", "1"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let price = +gets()
let lv = +gets()

let result = (lv - price) * 100

let stEd = parseInt(result % 10)
let stDes = parseInt((result / 10) % 100)
let lvv = parseInt((result / 100) % 100)
//print(stEd)
//print(stDes)
//print(lvv)
if (lvv == 9) {
    print(`1 x 5 leva`)
    print(`2 x 2 leva`)
        
} else if (lvv == 8) {
    print(`1 x 5 leva`),
    print(`1 x 2 leva`)
        print(`1 x 1 lev`)
} else if (lvv == 7) {
    print(`1 x 5 leva `)
    print(`1 x 2 leva`)
        
} else if (lvv == 6) {
    print(`1 x 5 leva`)
    print(`1 x 1 leva`)
       
} else if (lvv == 5) {
    print(`1 x 5 leva`)
} else if (lvv == 4) {
    print(`2 x 2 leva`)
} else if (lvv == 3) {
    print(`3 x 1 lev`)

} else if (lvv == 2) {
    print(`1 x 2 leva`)
} else if (lvv == 1) {
    print(`1 x 1 lev`)
} 

if (stDes == 9) {
    print(`1 x 50 stotinki`)
    print(`2 x 20 stotinki`)

} else if (stDes == 8) {
    print(`1 x 50 stotinki`),
        print(`1 x 20 stotinki`),
        print(`1 x 10 stotinki`)
} else if (stDes == 7) {
    print(`1 x 50 stotinki`)
    print(`1 x 20 stotinki`)
       
} else if (stDes == 6) {
    print(`1 x 50 stotinki`)
    print(`1 x 10 stotinki`)
     
} else if (stDes == 5) {
    print(`1 x 50 stotinki`)
} else if (stDes == 4) {
    print(`2 x 20 stotinki`)
} else if (stDes == 3) {
    print(`3 x 10 stotinki`)
} else if (stDes == 2) {
    print(`1 x 20 stotinki`)
} else if (stDes == 1) {
    print(`1 x 10 stotinki`)
}



if (stEd == 9) {
    print(`1 x 5 stotinki`)
    print(`2 x 2 stotinki`)

} else if (stEd == 8) {
    print(`1 x 5 stotinki`),
        print(`1 x 2 stotinki`),
        print(`1 x 1 stotinka`)
} else if (stEd == 7) {
    print(`1 x 5 stotinki`)
    print(`1 x 2 stotinki`)

} else if (stEd == 6) {
    print(`1 x 5 stotinki`)
    print(`1 x 1 stotinka`)

} else if (stEd == 5) {
    print(`1 x 5 stotinki`)
} else if (stEd == 4) {
    print(`2 x 2 stotinki`)
} else if (stEd == 3) {
    print(`3 x 1 stotinka`)
} else if (stEd == 2) {
    print(`1 x 2 stotinki`)
} else if (stEd == 1) {
    print(`1 x 1 stotinka`)
}
*/
/*
let input = ["0", "0"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let textSum = +gets()
let callsMinSum = +gets()

let sum = 12
let textfrNum = 20
let callsfrNum = 60
let textAddDDS = 0.06 + 0.06 * 0.02
let callsAddDDS = 0.10 - 0.10 * 0.08
let textAddNum = 0
let callsAddNum = 0

if (textfrNum > textSum && callsfrNum < callsMinSum) {
    textAddNum = 0
    callsAddNum = callsMinSum - callsfrNum
} else if ((textfrNum < textSum && callsfrNum < callsMinSum)) {
    textAddNum = textSum - textfrNum
    callsAddNum = callsMinSum - callsfrNum
} else if ((textfrNum > textSum && callsfrNum > callsMinSum)) {
    textAddNum = 0
    callsAddNum = 0
} if (textfrNum < textSum && callsfrNum > callsMinSum) {
    textAddNum = textSum - textfrNum
    callsAddNum = 0
}



let textAddNumlv = Number((textAddNum * 0.06).toFixed(2))
let callsAddNumlv = Number((callsAddNum * 0.10).toFixed(2))
let sumDDS = Number(((textAddNumlv + callsAddNumlv) * 0.2).toFixed(2))
let final = 12 + sumDDS + textAddNumlv + callsAddNumlv
print(`${textAddNum} additional messages for ${textAddNumlv.toFixed(2)} levas`)
print(`${callsAddNum} additional minutes for ${callsAddNumlv.toFixed(2)} levas`)
print(`${sumDDS.toFixed(2)} additional taxes`)
print(`${final.toFixed(2)} total bill`)


*/
/*let input = ["-3", "-4", "3"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets()
let b = +gets()
let c = +gets()
//print(a,b,c)

if (a>-200&& a<200 && b>-200 && b <200 && c >-200 && c<200) {
    if (a > b && b > c) {
        print(a)
    } else if (a > c && c> b) {
        print(a)
    } else if (b > a && a > c) {
        print(c)
    } else if (b > c && c > a) {
        print(b)
    } else if (c > a && a> b) {
        print(c)
    } else if (c > b && b> a) {
        print(c)
    } else if (c === b && b === a) {
        print(c)
    } else if (a === b && a > c) {
        print(a)
    } else if (b === c && b > a) {
        print(b)
    } else if (c === a && c > b) {
        print(c)
    } else if (a === b && a < c) {
        print(c)
    } else if (b === c && b < a) {
        print(a)
    } else if (c === a && c < b) {
        print(b)
    }
    
    
} else {
    
}*/
/*
let input = ["4", "4","4","4","4",]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets()
let b = +gets()
let c = +gets()
let d = +gets()
let e = +gets()
print(Math.max (a,b,c,d,e))
*/

/*let input = ["-3", "-4", "3"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets()
let b = +gets()
let c = +gets()
//print(a,b,c)


    if (a >= b && b >= c) {
        print(a,b,c)
    } else if (a >= c && c>= b) {
        print(a,c,b)
    } else if (b >= a && a >= c) {
        print(b,a,c)
    } else if (b >= c && c >= a) {
        print(b,c,a)
    } else if (c >= a && a>= b) {
        print(c,a,b)
    } else if (c >= b && b>= a) {
        print(c,b,a)
    } 
    */


//Pe6oooooooooooo
/*let input = ["7"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let a = +gets()

if (a >= 0 && typeof(a)==="number" ) {
    switch (a) {
        case 1:
            print("one")
            break;
        case 2:
            print("two")
            break;
        case 3:
            print("three")
            break;
        case 4:
            print("four")
            break;
        case 5:
            print("five")
            break;
        case 6:
            print("six")
            break;
        case 7:
            print("seven")
            break;

        case 8:
            print("eight")
            break;
        case 9:
            print("nine")
            break;
        case 0:
            print("zero")
            break;

        default:
            
                     break;
    }

}else if (a < 0 && typeof(a)==="number"){
    print("not a digit")
}else if (typeof(a)!="number"|| Number.isNaN(a) ){
    print("not a digit")
}

////////////////////////////////////////////////
/*let input = [1975]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let year = +gets()


let a= year%12


if(a == 8) {
    print("Dragon")  
 }else if(a == 9) {
    print("Snake")  
}else if(a == 10) {
    print("Horse") 
}else if(a == 11) {
    print("Sheep") 
}else if(a == 0) {
    print("Monkey") 
}else if(a == 1) {
    print("Rooster") 
}else if(a == 2) {
    print("Dog") 
}else if(a == 3) {
    print("Pig") 
}else if(a == 4) {
    print("Rat") 
}else if(a == 5) {
    print("Ox") 
}else if(a == 6) {
    print("Tiger") 
}else if(a == 7) {
    print("Hare") 
}


           */

