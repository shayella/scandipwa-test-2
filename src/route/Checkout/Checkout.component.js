import {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component"
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import "./Checkout.override.style.scss";
import ProgressBar from "src/Progressbar.component";

class Checkout extends SourceCheckout{

    renderProgressBar(){
        // const allSteps = Object.keys(this.stepMap)
        return (
            <ProgressBar steps={this.stepMap}/>
        )
    }
    
        render() {
            return (

                    <main block="Checkout">
                        {this.renderProgressBar()}

                        <ContentWrapper
                          wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                          label={ __('Checkout page') }
                        >
                            { this.renderSummary(true) }
                            <div block="Checkout" elem="Step">
                                { this.renderTitle() }
                                { this.renderGuestForm() }
                                { this.renderStep() }
                                { this.renderLoader() }
                            </div>
                            <div>
                                { this.renderSummary() }
                                { this.renderPromo() }
                                { this.renderCoupon() }
                            </div>
                        </ContentWrapper>
                    </main>
            )}
    }

export default Checkout;