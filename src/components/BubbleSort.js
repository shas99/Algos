import React from "react";


const Bubble = (props) => {

    const nums = [485,65,4845,4454,47]
    let len = 5
    for(let i=0; i<4;i++){
        for(let j=0;j<len-1;j++){
            
            if(nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
        len=len-1
    }

    return (<h1>Hey<br/>

        {nums.map(num=><h1>{num}</h1>)}


    </h1>)

}



export default Bubble