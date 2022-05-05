import React,{Component} from 'react'


class ProgressBar extends Component{
    render(){
        const {steps, selectedStep} = this.props
        const allSteps = Object.keys(steps)
        
        return(
            <div className='Checkout-ProgressBar'>
                {allSteps.map((step,i)=>{return(
                    <div className='Step-wrapper'>

                        <div className={selectedStep == step?"Step-line Step-line-selected":'Step-line'}></div>
                        <div className={i+1==allSteps.length?"Step-container-last":'Step-container'}><span className={selectedStep==step?"Step-number Step-number-selected":'Step-number'} key={i}>{i+1}</span> <p className='Step-title'>{steps[step]["title"]["value"]}</p></div>
                    </div>
                )})}
            </div>
        )
    }
}

export default ProgressBar;