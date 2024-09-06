import { useState } from 'react';


export default function Torso (props) {
    // console.log(props)
    // const thing = ""


    const [direction, setDirection] = useState('row');
    
    const [alignItems, setAlignItems] = useState('center');
    
    const [justifyContent, setJustifyContent] = useState('center');

    const [gap, setGap] = useState('0px')

      // Handler function to toggle flex-direction
    const setRow = () => {
        setDirection('row');
        setSelectedDirectionButton('row')
    };

    const setColumn = () => {
        setDirection('column');
        setSelectedDirectionButton('column')
    };

    const AItoStart = () => {
        setAlignItems('flex-start');
    };

    const AItoCenter = () => {
        setAlignItems('center');
    };

    const AItoEnd = () => {
        setAlignItems('flex-end');
    };

    const JCtoStart = () => {
        setJustifyContent('flex-start');
    };

    const JCtoCenter = () => {
        setJustifyContent('center');
    };

    const JCtoEnd = () => {
        setJustifyContent('flex-end');
    };

    const JCtoSpaceEvenly = () => {
        setJustifyContent('space-evenly');
    };   

    const JCtoSpaceAround = () => {
        setJustifyContent('space-around');
    };   

    const JCtoSpaceBetween = () => {
        setJustifyContent('space-between');
    };   

    const gapTo0px = () => {
        setGap('0px')
    }

    const gapTo10px = () => {
        setGap('10px')
    }

    const gapTo20px = () => {
        setGap('20px')
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: gap
      };

    const buttonSelected = {
        border: '1px solid orange'
    }


    return (
      
      <div className="torso">
        <div className="box-container" style={containerStyle}>
            <div className="item">

            </div>
            <div className="item">

            </div>
            <div className="item">

            </div>
            <div className="item">

            </div>
            <div className="item">

            </div>

        </div>

        <div className="button-container">

            <div className='button-column'>
                <div 
                className={direction === 'row' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={setRow}>
                    flex-direction: row;
                </div>
                <div 
                className={direction === 'column' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={setColumn}>
                    flex-direction: column;
                </div>
            </div>

            <div className='button-column'>

                <div
                className={alignItems === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoStart}
                >
                    align-items: flex-start;
                </div>
                <div 
                className={alignItems === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoCenter}>
                    align-items: center;
                </div>
                <div 
                className={alignItems === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoEnd}>
                    align-items: flex-end;
                </div>
            </div>

            <div className='button-column'>
                <div 
                className={justifyContent === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoStart}>
                    justify-content: flex-start;
                </div>
                <div 
                className={justifyContent === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoCenter}>
                    justify-content: center;
                </div>
                <div 
                className={justifyContent === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoEnd}>
                    justify-content: flex-end;
                </div>
                <div 
                className={justifyContent === 'space-between' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceBetween}>
                    justify-content: space-between;
                </div>
                <div 
                className={justifyContent === 'space-around' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceAround}>
                    justify-content: space-around;
                </div>
                <div 
                className={justifyContent === 'space-evenly' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceEvenly}>
                    justify-content: space-evenly;
                </div>
            </div>

            <div className='button-column'>

                <div
                className={gap === '0px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo0px}>
                    gap: 0;
                </div>
                <div 
                className={gap === '10px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo10px}>
                    gap: 10px;
                </div>
                <div 
                className={gap === '20px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo20px}>
                    gap: 20px;
                </div>

            </div>

        </div>

      </div>
    )
  }