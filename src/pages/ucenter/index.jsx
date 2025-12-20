
import { Navigate } from 'react-router-dom';
function Ucenter(){
    //路由重定向
    let uid = 0;

    if(uid ==0){
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <div>ucenter</div>
        </>
    );
}

export default Ucenter