import {Slot,SlotProvider} from "@/components/utils";
import Hello from "@/components/demo";


function A(params){
    console.log(params)
    return (
        <>
            <div>one-a</div>
            <SlotProvider component={Hello} msg="hello world"/>

            <SlotProvider component={Hello} msg='ok~ok'>
                <Slot name='header'>
                    <div>header1-row1</div>
                    <div>header1-row2</div>
                </Slot>
            </SlotProvider>


            <SlotProvider component={Hello}>
                <Slot name='header'>
                    <div>header2-row1</div>
                    <div>header2-row2</div>
                </Slot>

                <Slot name='footer'>
                    <div>footer2-row1</div>
                    <div>footer2-row2</div>
                    <div>footer2-row3</div>
                </Slot>
            </SlotProvider>



        </>
    );
}

/*


            <Hello>
            <div>header-row1</div>
                <Slot name='header'>
                    <div>header-row1</div>
                    <div>header-row2</div>
                </Slot>
            </Hello>
            <Hello>
                <Slot name='header'>
                    <div>header-row1</div>
                    <div>header-row2</div>
                </Slot>
                <Slot name='footer'>
                    <div>footer-row1</div>
                    <div>footer-row2</div>
                    <div>footer-row3</div>
                </Slot>
            </Hello>
*/
export default A;