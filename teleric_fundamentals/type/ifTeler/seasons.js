let month= gets()
let date= +gets()


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


}