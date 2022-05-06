import React,{Component} from 'react'
import "./Progressbar.styles.scss";


class ProgressBar extends Component{
    render(){
        const {steps, selectedStep} = this.props
        const stepsArr = Object.keys(steps).map((key) => [(key), steps[key]]);
        const selectedStepInArray = stepsArr.filter(step=>step[0]==selectedStep)[0];
        const indexofCurrentStep = stepsArr.indexOf(selectedStepInArray);

        
        return(
            <div className='Progressbar-wrapper Progressbar'>
                {
                    stepsArr.map(step=>{
                        let isFilled = stepsArr.indexOf(step) <= indexofCurrentStep;
                        let isCompleted =  stepsArr.indexOf(step) < indexofCurrentStep;
                        let isLastStep = stepsArr.indexOf(step) == stepsArr.length-1;
                        
                        return(
                        <>
                            <div  key={step[1]["title"]["value"]} className='Progressbar-container'>
                                <div className={ isFilled?"Progressbar-filled":''}></div>
                            </div>

                            <div className={isLastStep?"Step-container-last":'Step-container'}>
                                <span className={isFilled?"Step-number Step-number-selected":'Step-number'}>{isCompleted ? <span className='Step-check-mark'>L</span> :stepsArr.indexOf(step)+1}</span>
                                <p className='Step-title'>{step[1]["title"]["value"]}</p>
                            </div>
                            
                         </>
                                
                        )

                        
                    })
                }
            </div>
        )
    }
}

export default ProgressBar;