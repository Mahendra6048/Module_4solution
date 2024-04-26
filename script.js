var names=new Array();
names[0]="Raju";
names[1]="Jhon";
names[2]="jegan";
names[3]="Jen";
names[4]="jaison";
names[5]="Kavin";
names[6]="Mahi";
names[7]="frank";
names[8]="papulu";
names[9]="jim";
for (var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("GoodBye"+" "+names[i])
    }else{
        console.log("Hello"+" "+names[i])
    }
}
 