import {VoteV1} from '@/components/vote-v1'
import {VoteV3} from '@/components/vote-v3'
import {VoteV5} from '@/components/vote-v5'
function C(){
    return (
        <>
            <VoteV1/>
            <hr />
            <VoteV3/>
            <hr />
            <VoteV5/>
            <hr />
        </>
    );
}
export default C;