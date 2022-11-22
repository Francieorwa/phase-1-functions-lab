// Code your solution in this file!
const hq =42;
function distanceFromHqInBlocks(block){

    if(block<42){
        return hq-block;

   }
    if (block>42){
        return block -hq;
    }
}

let feet=264;
function distanceFromHqInFeet(block){
    if(block<42){
        return (hq-block)*feet;
    }
    if (block>42){
        return (block-hq)*feet;
    }
}

function distanceTravelledInFeet(block1,block2){
    if(block2>block1){
        return (block2-block1)*feet;
    }
    if (block1>block2){
        return(block1-block2)*feet;
    }
}

function calculatesFarePrice(start,destination){
    if(destination>start){
        let distance=(destination-start)*feet;
        if(distance<=400){
            return 0;
        }
    }
    if(start>destination){
        let distance=(start-destination)*feet;
        if(distance<=2000){
            return((distance-400)*0.02)
        }
    }
    if(destination>start){
        let distance=(destination-start)*feet;
        if(distance<=2500){
            return 25;
        }

    }else{
        return 'cannot travel that far'
    }
    
}