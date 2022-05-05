import React,{Component} from 'react'


class ProgressBar extends Component{
    render(){
        const {steps} = this.props
        
        return(
            <div className='Checkout-ProgressBar'>
                {Object.keys(steps).map((step,i)=><p className='Step' key={i}>{i+1}</p>)}
            </div>
        )
    }
}

export default ProgressBar;