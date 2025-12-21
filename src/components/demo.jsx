import {SlotProvider} from '@/components/utils'
//组件v2版
const Hello = (({msg,slots})=>{
    console.log(slots.current)
    return (
        <div className='hello'>
            {slots.header && (
                <div className="header-slot">{slots.header}</div>
            )}
            {slots.default ? <div>{slots.default}</div> : <div>{msg}</div>}
            {slots.footer && (
                <div className="footer-slot">{slots.footer}</div>
            )}
        </div>
    );
});

//组件v1版
function Hello1(params){
    let header=null;
    let footer=null;
    let defaultContent = [];
    const {msg,className='row',children=null} = params;


    console.log(children)
    if(children!==null){
        if(Array.isArray(children)){
            children.forEach(item=>{
                console.log(item.props,Object.prototype.toString.call(item))
                if(Object.hasOwn(item.props,'name')){
                    switch(item.props.name.toLowerCase()){
                        case 'header':
                            header=item;
                            break;
                        case 'footer':
                            footer = item;
                            break;
                        default:
                            defaultContent.push(item);
                            break;
                    }
                }
            });
        }else if(Object.hasOwn(children.props,'name')){
            switch(children.props.name.toLowerCase()){
                case 'header':
                    header=children;
                    break;
                case 'footer':
                    footer = children;
                    break;
                default:
                    defaultContent.push(item);
                    break;
            }
        }
    }

    console.log(header,footer)
    return (
        <div className={`hello ${className}`}>
            {header && <div className="header-slot">{header}</div>}
            {msg && '条件渲染--有传参msg'}~{msg}
            {footer && <div className="footer-slot">{footer}</div>}
        </div>
    )
}

export default Hello;