import {VoteV1} from '@/components/vote-v1'
import {VoteV2,VoteV2Result,VoteV2Button} from '@/components/vote-v2'
import {VoteV3} from '@/components/vote-v3'
import {VoteV4} from '@/components/vote-v4'
import {VoteV5} from '@/components/vote-v5'
import {VoteV6} from '@/components/vote-v6'
function C(){
    return (
        <>
            <VoteV1/>
            <hr />
            <VoteV2 title='v2. Context API - 跨层级通信'>

                <VoteV2Result/>
                <div className='flex'>
                    <VoteV2Button text='👍 支持' name='yes'/>
                    <div className="ds05"></div>
                    <VoteV2Button text='👎 反对' name='no'/>
                    <div className="ds05"></div>
                    <VoteV2Button text='🤷 弃权' name='abstain'/>
                </div>
            </VoteV2>
            <hr />
            <VoteV3/>
            <hr />
            <VoteV4/>
            <hr />
            <VoteV5/>
            <hr />
            <VoteV6>
                <VoteV6.Result />
                <div className='flex'>
                    <VoteV6.Submit text='👍 支持' name='yes'/>
                    <div className="ds05"></div>
                    <VoteV6.Submit text='👎 反对' name='no'/>
                    <div className="ds05"></div>
                    <VoteV6.Submit text='🤷 弃权' name='abstain'/>
                </div>
            </VoteV6>
        </>
    );
}

export default C;