



// function Hello({msg='',className='row'}){
function Hello(params){
    const {msg,className} = params;
    // let className=Object.hasOwn(params,'className')?params.className:"row";
    console.log(params,className)

    return (
        <div className={className}>{msg && '条件渲染--有传参msg'}~{msg}</div>
    )
}

export default Hello;