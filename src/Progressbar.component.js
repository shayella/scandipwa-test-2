import React,{Component} from 'react'


class ProgressBar extends Component{
    render(){
        const {steps} = this.props
        const allSteps = Object.keys(steps)
        
        return(
            <div className='Checkout-ProgressBar'>
                {allSteps.map((step,i)=>{return(
                    <div className='Step-wrapper'>
                        <div className='Step-line'></div>
                        <div className={i+1==allSteps.length?"Step-container-last":'Step-container'}><span className='Step-number' key={i}>{i+1}</span> <p className='Step-title'>{steps[step]["title"]["value"]}</p></div>
                    </div>
                )})}
            </div>
        )
    }
}

export default ProgressBar;