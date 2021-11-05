import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             len : 5,
             nums:[],

        }
        this.state.nums = [445,65,54,56,546]
    }
    
    
    
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log('Callback value', this.state.count)})
        console.log(this.state.count)
    }

    render() {
        for(let i=0; i<4;i++){
            for(let j=0;j<this.state.len-1;j++){
                
                if(this.state.nums[j]>this.state.nums[j+1]){
                    let temp = this.state.nums[j]
                    this.state.nums[j] = this.state.nums[j+1]
                    this.state.nums[j+1] = temp
                    
                    this.setState({//adding a new element to the array for testing
                        nums: [ ...this.state.nums,1000]    
                    })
                    
                }
            }
            this.state.len=this.state.len-1
        }
        // return (
        //     <div>
        //         Count - {this.state.count}
        //         <button onClick={()=>this.increment()}>Click to increment</button>
        //     </div>
            
        // )
        return (<h1>Hey<br/>

            {this.state.nums.map(num=><h1>{num}</h1>)}
    
    
        </h1>)
    }
}

export default Counter
