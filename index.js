

let tablou = []
counter = 1;
function test(){
    for (let i = 0; i < 20; i++){
        tablou[i]=counter
        counter++
    }
}



function check_par_impar(y){
    j = 0;
    while(j < y){
        let x = 2     
        if(y % x == 0){
            console.log("Numar par   = " + y)
            j++
        }
        else if(y % x != 0){
            console.log("Numar impar = " + y)
            j++
        }
    }
    console.log(j)
}




test()
console.log(tablou)
check_par_impar(tablou[j])