import Hello from "@/components/demo";


function A(params){
    console.log(params)
    return (
        <>
            <div>one-a</div>
            <Hello msg="hello world"/>
        </>
    );
}
export default A;