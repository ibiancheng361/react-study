import { useParams,useSearchParams  } from 'react-router-dom';
function C(){
    const [searchParams,setSearchParams]= useSearchParams ();
    const id = searchParams.get('id');
    console.log(id);
    const parmas = useParams();
    console.log(parmas);
    return (
        <>
            <div>two-c</div>
        </>
    );
}
export default C;