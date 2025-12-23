import {useState} from 'react'


import { Button } from '@mui/material';


function VoteV1(){
    const [yesVotes,setYesVotes] = useState(0);
    const [noVotes,setNoVotes] = useState(0);
    const [absVotes,setAbsVotes] = useState(0);
    const handleYesClick = ()=>{
        setYesVotes(prev=>prev+1)
    }

    const handleNoClick = ()=>{
        setNoVotes(prev=>prev+1)
    }

    const handleAbsClick = ()=>{
        setAbsVotes(prev=>prev+1)
    }

    return (
        <div className='vote-section'>
            <div className='vote-title'>v1. 父子组件以props通讯</div>
            <div className='vote-body'>
                <div className='row'><h3>投票结果</h3></div>
                <div className='row'>
                    <ul>
                        <li>赞成:{yesVotes}票</li>
                        <li>反对:{noVotes}票</li>
                        <li>弃权:{absVotes}票</li>
                        <li>总计:{noVotes+yesVotes+absVotes}票</li>
                    </ul>
                </div>
            </div>
            <div className='vote-footer'>
                <VoteButton text='👍 赞成' votes={yesVotes} onClick={handleYesClick} />
                <div className="ds05"></div>
                <VoteButton text='👎 反对' votes={noVotes} onClick={handleNoClick} />
                <div className="ds05"></div>
                <VoteButton text='🤷 弃权' votes={absVotes} onClick={handleAbsClick} />
            </div>
        </div>
    );
}
/*
<Button variant="contained" size='small' onClick={()=>onVote('yes')}>👍 赞成</Button>
            <div className="ds05"></div>
            <Button variant="contained" size='small' onClick={()=>onVote('no')}>👎 反对</Button>
            <div className="ds05"></div>
*/
function VoteButton({text,onClick}){
    const handleClick = ()=>{
        if(Object.prototype.toString.call(onClick)=='[object Function]'){
            console.log('votebtn-yes',console.log(onClick))
            onClick();
        }else{
            console.log('votebtn-no')
        }
    }
    return (
        <Button variant="contained" size='small' onClick={handleClick}>{text}</Button>
    );
}


export {VoteV1}