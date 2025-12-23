import {useState,useEffect} from 'react'
import { Button } from '@mui/material';

import ReactECharts from 'echarts-for-react';


//状态提升

function VoteV3({slots}){
    // const data 
    const [votes,setVotes] = useState({
        yes:0,
        no:0,
        abstain:0
    });


    const handleVote = type=>{
        setVotes(prev=>({...prev,[type]:prev[type]+1}));
    }

    return (
        <div className='vote-section'>
            <div className='vote-title'>v3:状态提升通讯</div>
            <VoteDisplay votes={votes}/>
            <VoteBtns votes={votes} onVote={handleVote}/>
            <VoteChart votes={votes}/>
        </div>
    );
}


function VoteDisplay({votes}){
    const total = Object.values(votes).reduce((prev,current)=>prev+current,0);
    return (
        <div className='vote-body'>
            <div className='row'><h3>投票结果</h3></div>

            <div className='row'>
                <ul>
                    <li>赞成:{votes.yes}票</li>
                    <li>反对:{votes.no}票</li>
                    <li>弃权:{votes.abstain}票</li>
                    <li>总计:{total}票</li>
                </ul>
            </div>
        </div>
    );
}


function VoteChart({votes}){
    const total = Object.values(votes).reduce((prev,current)=>prev+current,0);
    if(total==0){
        return null;
    }
    let data=[
        { value: votes.yes, name: 'yes' },
        { value:votes.no, name: 'no' },
        { value:votes.abstain, name: 'abstain' }
    ];
    //最适合展示“各部分占整体的比例”
    const option = {
        title: { text: '投票结果统计',top:'3%', },
        tooltip: {
            trigger: 'item'
          },
          legend: {
            bottom:'3%',
            left: 'center'
          },
        series: [{
            type: 'pie',
            data,
            radius: ['40%', '70%'], // 环形图
            label: {
                show: false,
                position: 'center'
            }
        }]
    };
    return (
        <div className='vote-body'>
            <div className='row'><h3>投票结果</h3></div>

            <div className='row'>
            <ReactECharts
                option={option}
                style={{ height: '300px' }}
                opts={{ renderer: 'svg' }} // ECharts 6 性能优化
            />
            </div>
        </div>
    );
}

function VoteBtns({votes,onVote}){
    return (
        <div className='vote-footer'>
            <Button variant="contained" size='small' onClick={()=>onVote('yes')}>👍 赞成</Button>
            <div className="ds05"></div>
            <Button variant="contained" size='small' onClick={()=>onVote('no')}>👎 反对</Button>
            <div className="ds05"></div>
            <Button variant="contained" size='small' onClick={()=>onVote('abstain')}>🤷 弃权</Button>
        </div>
    );
}


export {VoteV3}