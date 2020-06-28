class Plinko {
    constructor(x,y,r){

    }
display(){
    for (var j = 40;j<=width;j=j+40){
        plinkos.push(new Plinko(j,75));
    }
    for (var j = 15;j<=width;j=j+40){
        plinkos.push(new Plinko(j,175));
        
    }
}
}
