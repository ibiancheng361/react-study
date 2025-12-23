import {useState,createContext, useContext, useEffect,useCallback,useMemo } from 'react'

import { Button } from '@mui/material';

const VoteContext = createContext(null);

function useVoteContent() {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error('useVote must be used within a <VoteV6> component');
  }
  return context;
}

function VoteV6({children,defaultvalue={}}){
    const [votes,setVotes] = useState(defaultvalue);

    // ✅ 修复1：使用 useCallback 稳定函数
    const registerVote = useCallback((option, text) => {
        setVotes(prev => {
            // 如果已经存在，比较文本是否相同
            if (prev[option]) {
                // 文本相同则不更新，避免不必要的渲染
                if (prev[option].text === text) return prev;
                // 文本不同则更新文本
                return {...prev, [option]: {...prev[option], text}};
            }
            // 不存在则创建
            return {...prev, [option]: {vote: 0, text}};
        });
    }, []); // 空依赖，函数不会变


    //同理,修复addVote
    const addVote = useCallback((option, text) => {
       setVotes(prev=>({...prev,[option]:{vote:(prev[option]?.vote||0)+1,text}}));
    }, []); // 空依赖，函数不会变

    // ✅ 修复3：使用 useMemo 稳定 contextValue
    const contextValue = useMemo(() => ({
        votes,
        registerVote,
        addVote
    }), [votes, registerVote, addVote]);

    return (
        <div className='vote-section'>
            <VoteContext.Provider value={contextValue}>
                <div className='vote-title'>v6:复合组件通讯</div>
                {children}
            </VoteContext.Provider>
        </div>
    );
}


VoteV6.FlexRow = function FlexRow({children}){
    return <div className='flex'>{children}</div>
}
VoteV6.Result = function VoteResult(){
    const {votes} = useVoteContent();
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

VoteV6.Submit = function VoteSubmit({name,text}){
    const {addVote,registerVote} = useVoteContent();

    // 关键：组件挂载时自动注册1
    useEffect(() => {
        registerVote(name,text);
    }, [name, text, registerVote]);

    return (
        <Button variant="contained" size='small' onClick={()=>addVote(name,text)}>{text}</Button>
    );
}


function removeEmojis(str) {
    // 这个正则匹配大部分 emoji
    return str.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
  }


export {VoteV6}