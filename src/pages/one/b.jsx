import { useParams,useSearchParams  } from 'react-router-dom';
function B(){
    const params = useSearchParams ();
    console.log(params);
    return (
        <>
            <div>two-b</div>
        </>
    );
}
export default B;
