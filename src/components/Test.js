import React from 'react'



const Testprint = (props) => {
    console.log(props);

    const nums=[89,20,54,48,45]
    return (
        
    <p><h1>{props.heroname}{nums[0]} {props.name}:{props.children}</h1><h2>Website under construction, check back later</h2></p>
    
    
    )
}
    export default Testprint;