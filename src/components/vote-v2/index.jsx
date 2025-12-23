import {createContext,useCallback,useContext, useState,useMemo,useEffect} from 'react'
import {removeEmojis} from '@/common/utils'

import { Button } from '@mui/material';

const VoteContext = createContext(null);

function useVoteContext(){
    const context = useContext(VoteContext);
    if (!context) {
      throw new Error('useVote must be used within a <VoteV6> component');
    }
    return context;
}

function VoteV2({title,children}){
    const [votes,setVotes] = useState(0);
    const registerVote = useCallback((key,text)=>{
        setVotes(prev => {
            // 如果已经存在，比较文本是否相同
            if (prev[key]) {
                // 文本相同则不更新，避免不必要的渲染
                if (prev[key].text === text) return prev;
                // 文本不同则更新文本
                return {...prev, [key]: {...prev[key], text}};
            }
            // 不存在则创建
            return {...prev, [key]: {vote: 0, text}};
        });
    },[]);

    const addVote = useCallback((option, text) => {
        setVotes(prev=>({...prev,[option]:{vote:(prev[option]?.vote||0)+1,text}}));
    }, []); // 空依赖，函数不会变


    const contextValue = useMemo(() => ({
        votes,
        registerVote,
        addVote
    }), [votes, registerVote, addVote]);

    return (
       <VoteContext.Provider value={contextValue}>
        <div className='vote-section'>
            <div className='vote-title'>{title}</div>
            {children}
        </div>
       </VoteContext.Provider>
    );
}

function VoteV2Result(){
    const {votes} = useVoteContext();
    const total = Object.values(votes).reduce((prev,current)=>prev+current.vote,0);

    return (
        <div className='vote-body'>
            <div className='row'><h3>投票结果</h3></div>
            <div className='row'>
                <ul>
                    {Object.entries(votes).map(([key,vote])=><li key={key}>{removeEmojis(vote.text)}:{vote.vote}票</li>)}
                    <li>总计:{total}票</li>
                </ul>
            </div>
        </div>
    );
}


function VoteV2Button({text,name,onClick}){
    const {addVote,registerVote} = useVoteContext();
    useEffect(() => {
        registerVote(name,text);
    }, [name, text, registerVote]);


    const handleClick = ()=>{
        addVote(name,text);
    }

    return (
        <Button variant="contained" size='small' onClick={handleClick}>{text}</Button>
    );
}

export {VoteV2,VoteV2Button,VoteV2Result}