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
            print("not a digit")
            
                     break;
    }

}else if (a < 0 && typeof(a)==="number"){
    print("not a digit")
}else if (typeof(a)!="number"|| Number.isNaN(a) ){
    print("not a digit")
}