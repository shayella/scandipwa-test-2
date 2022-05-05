import React,{Component} from 'react'


class ProgressBar extends Component{
    render(){
        const {steps, selectedStep} = this.props
        const stepsArr = Object.keys(steps).map((key) => [(key), steps[key]]);
        const selectedStepInArray = stepsArr.filter(step=>step[0]==selectedStep)[0];
        const indexofCurrentStep = stepsArr.indexOf(selectedStepInArray);

        
        return(
            <div className='Checkout-ProgressBar'>
                {
                    stepsArr.map(step=>{
                        let isFilled = stepsArr.indexOf(step) <= indexofCurrentStep;
                        let isLastStep = stepsArr.indexOf(step) == stepsArr.length-1;
                        
                        return(
                            <div key={step[1]["title"]["value"]} className='Step-wrapper'>
                               <div className={ isFilled?"Step-line Step-line-selected":'Step-line'}></div>
                                <div className={isLastStep?"Step-container-last":'Step-container'}>
                                    <span className={isFilled?"Step-number Step-number-selected":'Step-number'}>{stepsArr.indexOf(step)+1}</span>
                                     <p className='Step-title'>{step[1]["title"]["value"]}</p></div>
                            </div>
                        )

                        
                    })
                }
            </div>
        )
    }
}

export default ProgressBar;