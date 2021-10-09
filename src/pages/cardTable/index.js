import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import avatar from './logo192.png';
import './index.css';
import { DownFill } from 'antd-mobile-icons';
import { Card } from '../../component/card';

export const CardTable = () => {
    // let history = useHistory();
    const buffList = [
        { label: '虚弱', type: 'debuff' },
        { label: '流血', type: 'debuff' },
        { label: '精力旺盛', type: 'buff' },
    ]
    const buffList2 = [
        { label: '伤害', type: 'buff' },
        { label: '防御', type: 'debuff' },
    ]
    const cardList2 = [
        { id: 3000, name: '要你命三千', type: 'magic', cost: 10, visible: false },
        { id: 100, name: '还我漂漂拳', type: 'magic', cost: 2, visible: false },
    ]
    return (
        <div className='cardTable flexColumn'>
            <EnemyInfo buffList={buffList} />
            <div className='flex1 battleTable'>
                <BattleAnimate />
                <BattleInfo />
            </div>
            <PlayerCards cardList={cardList2} />
            <PlayerInfo buffList={buffList2} />
        </div>
    )
}

const EnemyInfo = (props) => {
    const { buffList = [] } = props;
    return (
        <div className='flex enemyInfoContainer'>
            <div className='flexColumn flexAlignCenter'>
                <img alt='avatar' src={avatar} style={{ width: '50px', height: '50px' }} />
                <p>敌人姓名</p>
            </div>
            <div className='enemyLifeInfo'>
                <div className='flexAlignCenter'>
                    <p>生命值：</p>
                    <p>20</p>
                </div>
                <div className='buffContainer flex'>
                    {
                        buffList.map((ite, i) => {
                            return <div className={`${ite.type} flexAlignCenter`} key={i}>
                                <p>{ite.label}</p>
                                <DownFill className={`${ite.type}Icon`} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const PlayerInfo = (props) => {
    const { buffList = [] } = props;
    return (
        <div className='flex flexJustifyEnd enemyInfoContainer'>
            <div className='enemyLifeInfo '>
                <div className='flexAlignCenter flexJustifyEnd'>
                    <p>生命值:</p>
                    <p>19</p>
                </div>
                <div className='buffContainer flex'>
                    {
                        buffList.map((ite, i) => {
                            return <div className={`${ite.type} flexAlignCenter`} key={i}>
                                <p>{ite.label}</p>
                                <DownFill className={`${ite.type}Icon`} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='flexColumn flexAlignCenter'>
                <img alt='avatar' src={avatar} style={{ width: '50px', height: '50px' }} />
                <p>快乐牌佬</p>
            </div>
        </div>
    )
}

const BattleAnimate = () => {
    return (
        <div className='battleAnimateContainer'>决斗动画区域</div>
    )
}

const BattleInfo = () => {
    return (
        <div className='battleInfoContainer'>决斗信息显示区域</div>
    )
}

const PlayerCards = (props) => {
    const { cardList = [] } = props;
    const [choose, setChoose] = useState(0);
    return (
        <div className='cardList flexAlignCenter'>
            {
                cardList.map((ite, i) => {
                    return <Card key={i} {...ite} choose={choose} setChoose={setChoose} />
                })
            }
        </div>
    )
}