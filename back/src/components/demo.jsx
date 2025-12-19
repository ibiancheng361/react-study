



function Hello(params){
    let className=Object.hasOwn(params,'className')?params.className:"row";
    return (
        <div className={className}>{params.msg}</div>
    )
}


export default Hello;