import React from "react";


function ComponentWithSlots(Component){
    return ({children,...props})=>{
        const slots = {};
        const defaultSlots = [];
        if(children){
            React.Children.forEach(children,child=>{
                console.log(child.type.name)
                if(React.isValidElement(child) && child.type.name=='Slot'){
                    const { name, children: slotContent } = child.props;
                    if (name) {
                        slots[name] = slotContent;
                    } else {
                        defaultSlots.push(slotContent);
                    }
                } else {
                    defaultSlots.push(child);
                }
            })
            console.log('utils',slots)
        }

        return (
            <Component {...props} slots={slots} defaultSlot={defaultSlots}/>
        );
    }
}


function Slot({children}){
    return children;
}



export {Slot,ComponentWithSlots}