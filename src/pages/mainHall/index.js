import React, { memo, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'antd-mobile';
import { MODE_TYPE_LIST_ENUM } from './consts';
import './index.css';

export const MainHall = () => {
  let history = useHistory();
  const [mode, setMode] = useState(1);

  const gameStart = () => {
    history.push('/table')
  }
  const handleTableChange = (mode) => {
    mode && setMode(mode);
  }
  return (
    <div>
      <div>
        <ModeList mode={mode} setMode={handleTableChange} />
      </div>

      <div className={'startBtn'}>
        {mode === 1 &&
          <Button block color='primary' size='large' onClick={gameStart}>
            开始游戏
          </Button>
        }
        {
          mode !== 1 &&
          <div className='pleaseWait'>
            <span>敬请期待~</span>
          </div>
        }
      </div>
    </div>
  )
}

const ModeList = memo((props) => {
  const { mode, setMode } = props;
  return <>
    <div className='ModeListContainer'>
      {
        MODE_TYPE_LIST_ENUM.map((ite) => {
          const modeSelected = mode === ite.key;
          return (
            <div key={ite.key}
              className={`ModeText ${modeSelected ? 'ModeTextSelected' : ''}`}
              onClick={() => setMode && setMode(ite.key)}
            >
              <p>
                {ite.label}
              </p>
            </div>
          )
        })
      }
    </div>
  </>
})