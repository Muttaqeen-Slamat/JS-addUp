let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addUp(){
    let add = 0
    for( let i=0; i < numbers.length ; i++){
        add += numbers[i]
    }
    console.log(add);
}
addUp()