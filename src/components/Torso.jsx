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
    };

    const setColumn = () => {
        setDirection('column');
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
        <div className="button-container">

            <div className='button-column'>
                <div className='label' >
                    flex-direction:
                </div>
                <div 
                className={direction === 'row' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={setRow}>
                    row;
                </div>
                <div 
                className={direction === 'column' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={setColumn}>
                    column;
                </div>
            </div>

            <div className='button-column'>
                <div className='label' >
                    align-items:
                </div>
                <div
                className={alignItems === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoStart}
                >
                    flex-start;
                </div>
                <div 
                className={alignItems === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoCenter}>
                    center;
                </div>
                <div 
                className={alignItems === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={AItoEnd}>
                    flex-end;
                </div>
            </div>

            <div className='button-column'>
                <div className='label' >
                    justify-content:
                </div>
                <div 
                className={justifyContent === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoStart}>
                    flex-start;
                </div>
                <div 
                className={justifyContent === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoCenter}>
                    center;
                </div>
                <div 
                className={justifyContent === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoEnd}>
                    flex-end;
                </div>
                <div 
                className={justifyContent === 'space-between' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceBetween}>
                    space-between;
                </div>
                <div 
                className={justifyContent === 'space-around' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceAround}>
                    space-around;
                </div>
                <div 
                className={justifyContent === 'space-evenly' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={JCtoSpaceEvenly}>
                    space-evenly;
                </div>
            </div>

            <div className='button-column'>

                <div className='label' >
                    gap:
                </div>
                <div
                className={gap === '0px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo0px}>
                    0;
                </div>
                <div 
                className={gap === '10px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo10px}>
                    10px;
                </div>
                <div 
                className={gap === '20px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={gapTo20px}>
                    20px;
                </div>

            </div>

        </div>     
 
        <div className='y-axis-container'>


            <div className='x-axis-container'>
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
                <div className='x-axis'>
                    x-axis
                </div>  
            </div>

            <div className='y-axis'>
                    y-axis
            </div>  
        </div>

      </div>
    )
  }