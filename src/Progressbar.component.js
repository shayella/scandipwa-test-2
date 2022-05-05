import React,{Component} from 'react'


class ProgressBar extends Component{
    render(){
        const {steps} = this.props
        
        return(
            <div className='Checkout-ProgressBar'>
                {Object.keys(steps).map((step,i)=>{return(<div className='Step-container'><span className='Step-number' key={i}>{i+1}</span> <p className='Step-title'>{steps[step]["title"]["value"]}</p></div>)})}
            </div>
        )
    }
}

export default ProgressBar;