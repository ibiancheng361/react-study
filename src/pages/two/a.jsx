
import { useParams,useSearchParams } from 'react-router-dom';
function A(){
    const [searchParams,setSearchParams]= useSearchParams ();
    const id = searchParams.get('id');
    console.log(id);
    return (
        <>
            <div>two-a</div>
        </>
    );
}
export default A;