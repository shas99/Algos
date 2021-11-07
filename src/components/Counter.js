import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             
             nums:[2,3,5,6,8]

        }
        
    }
    
    
    
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log('Callback value', this.state.count)})
        console.log(this.state.count)
    }

    numrender(nums1){
        this.setState({
            nums : nums1
        })
        
            console.log(nums1)
            this.state.nums.map(nums=>console.log(nums))

        

    }
    sleep(milliseconds){
        const date = Date.now()
        let currentDate = null
        do{
            currentDate = Date.now()
            
        }while(currentDate - date < milliseconds)
    }

    componentDidMount(){
        const nums1=[99,54,34,21,12]
       
        
        this.state.nums=nums1
    
    let len = 5
    {<h1>Hello bfjdi</h1>}
    for(let i=0; i<4;i++){
        for(let j=0;j<len-1;j++){
            
            if(nums1[j]>nums1[j+1]){
                let temp = nums1[j]
                nums1[j] = nums1[j+1]
                nums1[j+1] = temp
                
                this.sleep(1000)
                    {this.numrender(nums1)}
                    
                
                // this.setState({//adding a new element to the array for testing
                //     nums: [ ...this.state.nums,1000]    
                // })
                
            }
        }
        len=len-1
    }
    }

    render() {
        
        // return (
        //     <div>
        //         Count - {this.state.count}
        //         <button onClick={()=>this.increment()}>Click to increment</button>
        //     </div>
            
        // )
        return (<h1>Hey<br/>

            {/* {this.state.nums.map(num=><h1>{console.log(num)}{num}</h1>)} */}
    
            {this.state.nums.map(num=><h1>{num}</h1>)}
        </h1>)
    }
}

export default Counter
