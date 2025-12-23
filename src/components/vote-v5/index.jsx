import {useRef,useEffect, useState} from 'react'


import { Button } from '@mui/material';

//事件总线
class VoteEventBus{
    constructor(){
        this.listeners = {};
    }

    //发布
    emit(e,data){
        if(Object.hasOwn(this.listeners,e)){
            const callbacks = this.listeners[e];
            callbacks.forEach(callback=>callback(data));
            console.log(data,this.listeners)
        }
    }

    //订阅
    on(e,callback){
        if(!Object.hasOwn(this.listeners,e)){
            this.listeners[e]=[];
        }else if(!Array.isArray(this.listeners[e])){
            this.listeners[e]=[];
        }
        this.listeners[e].push(callback);

        console.log('on-订阅',callback,this.listeners)
    }

    //取消
    off(e,callback){
        if(Object.hasOwn(this.listeners,e)){
            const callbacks = this.listeners[e];
            if(Array.isArray(callbacks)){
                this.listeners[e] = callbacks.filter(fn=>fn!=callback);
            }
        }
    }
}


const voteEventBus = new VoteEventBus();

/*
自定义事件--订阅发布实现组件通讯
*/
function VoteV5(){
    const [yesVotes,setYesVotes] = useState(0);
    const [noVotes,setNoVotes] = useState(0);

    useEffect(()=>{
        const handleVoteNo = ()=>{
            setNoVotes(prev=>++prev);
        }

        const handleVoteYes = ()=>{
            setYesVotes(prev=>++prev);
        }

        voteEventBus.on("vote-no",handleVoteNo);
        voteEventBus.on("vote-yes",handleVoteYes);


        /*
            一定要取消订阅,不取消会导致严重问题
            组件卸载后还在内存中.
        */
        return ()=>{
            voteEventBus.off('vote-no',handleVoteNo);
            voteEventBus.off('vote-yes',handleVoteYes);
        }
    },[]);


    return (
        <div className='vote-section'>
            <div className='vote-title'>v5:自定义事件-订阅与发布实现组件通讯</div>

            <div className='vote-body'>
                <div className='row'><h3>投票结果</h3></div>

                <div className='row'>
                    <ul>
                        <li>赞成:{yesVotes}票</li>
                        <li>反对:{noVotes}票</li>
                        <li>总计:{noVotes+yesVotes}票</li>
                    </ul>
                </div>
            </div>
            <div className='flex'>
                <VoteEmitter text='支持' type='yes' />
                <div className="ds05"></div>
                <VoteEmitter text='反对' type='no' />
            </div>
        </div>
    );
}

function VoteEmitter({text,type}){
    const handleClick = ()=>{
        voteEventBus.emit(`vote-${type}`,{
            timestamp: Date.now()
        });
    }
    return (
        <Button variant="contained" size='small' onClick={handleClick}>{text}</Button>
    );
}

export {VoteV5}