import {createContext,useContext,useRef,useMemo} from "react";


//创建slot上下文
const SlotContent = createContext({});


//插槽容器组件
function SlotProvider({children,component:Component,...props}){
    const slotsRef = useRef({})
    console.log(children)
    return (
        <SlotContent.Provider value={slotsRef.current}>
            {children}
            <Component {...props} slots={slotsRef.current}/>
        </SlotContent.Provider>

    );
}



//slot组件
function Slot({name,children}){
    const slots = useContext(SlotContent);

    //注册插槽内容
    useMemo(()=>{
        if(name){
            // console.log('slot',children)
            slots[name] = children;
        }else{
            slots.default = children
        }
    },[name,children,slots]);

    return null;
}


export {Slot,SlotProvider}