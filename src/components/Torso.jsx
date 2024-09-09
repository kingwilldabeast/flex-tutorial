import { useState, useEffect } from 'react';


export default function Torso (props) {
    // console.log(props)
    // const thing = ""


    const directionOptions = ['row', 'column']
    const [direction, setDirection] = useState(directionOptions[0]);

    const alignItemOptions = ['flex-start', 'center', 'flex-end']
    const [alignItems, setAlignItems] = useState(alignItemOptions[0]);
    
    const justifyContentOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
    const [justifyContent, setJustifyContent] = useState(justifyContentOptions[0]);

    const gapOptions = ['0px', '10px']
    const [gap, setGap] = useState(gapOptions[0])

    const [targetDirection, setTargetDirection] = useState(directionOptions[0]);

    const [targetAlignItems, setTargetAlignItems] = useState(alignItemOptions[0]);
    
    const [targetJustifyContent, setTargetJustifyContent] = useState(justifyContentOptions[0]);

    const [targetGap, setTargetGap] = useState(gapOptions[0])

    const [activeButton, setActiveButton] = useState(0);  

    const [buttonClicked, setButtonClicked] = useState(false);


    const containerStyle = {
        display: 'flex',
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: gap
    };

    const targetContainerStyle = {
        display: 'flex',
        flexDirection: targetDirection,
        alignItems: targetAlignItems,
        justifyContent: targetJustifyContent,
        gap: targetGap
    }

    const randomizeTarget = () => {
        setTargetDirection(directionOptions[getRandomInt(0,directionOptions.length-1)])
        setTargetAlignItems(alignItemOptions[getRandomInt(0,alignItemOptions.length-1)])
        setTargetJustifyContent(justifyContentOptions[getRandomInt(0,justifyContentOptions.length-1)])
        setTargetGap(gapOptions[getRandomInt(0,gapOptions.length-1)])
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const buttonSelected = {
        border: '1px solid orange'
    }

    const xAxisColor = direction === 'column' ? 'pink' : 'green';
    const yAxisColor = direction === 'column' ? 'green' : 'pink';


    // Handler function for arrow key presses
    const handleKeyDown = (event) => {
        switch (event.key) {
          case 'ArrowRight':
            setActiveButton((prev) => (prev + 1) % 4);
            break;
          case 'ArrowLeft':
            setActiveButton((prev) => (prev - 1 + 4) % 4);
            break;
          case 'ArrowDown':
            updateOption('down');
            break;
          case 'ArrowUp':
            updateOption('up');
            break;
          default:
            break;
        }
      };
    
      const updateOption = (direction) => {
        switch (activeButton) {
          case 0:
            setDirection((prev) => {
              const index = directionOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % directionOptions.length
                : (index - 1 + directionOptions.length) % directionOptions.length;
              return directionOptions[newIndex];
            });
            break;
          case 1:
            setAlignItems((prev) => {
              const index = alignItemOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % alignItemOptions.length
                : (index - 1 + alignItemOptions.length) % alignItemOptions.length;
              return alignItemOptions[newIndex];
            });
            break;
          case 2:
            setJustifyContent((prev) => {
              const index = justifyContentOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % justifyContentOptions.length
                : (index - 1 + justifyContentOptions.length) % justifyContentOptions.length;
              return justifyContentOptions[newIndex];
            });
            break;
          case 3:
            setGap((prev) => {
              const index = gapOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % gapOptions.length
                : (index - 1 + gapOptions.length) % gapOptions.length;
              return gapOptions[newIndex];
            });
            break;
          default:
            break;
        }
      };

    // Attach and clean up the event listener
        useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
            return () => {
            window.removeEventListener('keydown', handleKeyDown);
            };
        }, [activeButton]);

        useEffect(() => {
            if (buttonClicked) {
              randomizeTarget();
              setButtonClicked(false); // Reset buttonClicked to prevent continuous updates
            }
          }, [buttonClicked]);

    return (
      
      <div className="torso">
        <div className='left-side'>
            <div className='controls'>
            <button onClick={() => setButtonClicked(true)}>Randomize</button>
            <button >Copy Code</button>

            </div>
            <div className="button-container">

                <div className='button-column'>
                <div 
                className = {activeButton === 0 ? 'labelActive' : 'label'}
                key={0}
                >
                        flex-direction:
                    </div>
                    <div 
                    className={activeButton === 0 && direction === directionOptions[0] ? 'buttonActive' : (direction === directionOptions[0] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setDirection(directionOptions[0])}
                    >
                        row;
                    </div>
                    <div 
                    className={activeButton === 0 && direction === directionOptions[1] ? 'buttonActive' : (direction === directionOptions[1] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setDirection(directionOptions[1])}>
                        column;
                    </div>
                </div>

                <div className='button-column'>
                    <div 
                    className = {activeButton === 1 ? 'labelActive' : 'label'}
                    key={1}
                    >
                        align-items:
                    </div>
                    <div
                    className={activeButton === 1 && alignItems === alignItemOptions[0] ? 'buttonActive' : (alignItems === alignItemOptions[0] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setAlignItems(alignItemOptions[0])}
                    >
                        flex-start;
                    </div>
                    <div 
                    className={activeButton === 1 && alignItems === alignItemOptions[1] ? 'buttonActive' : (alignItems === alignItemOptions[1] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setAlignItems(alignItemOptions[1])}
                    >
                        center;
                    </div>
                    <div 
                    className={activeButton === 1 && alignItems === alignItemOptions[2] ? 'buttonActive' : (alignItems === alignItemOptions[2] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setAlignItems(alignItemOptions[2])}
                    >
                        flex-end;
                    </div>
                </div>

                <div className='button-column'>
                    <div 
                    className = {activeButton === 2 ? 'labelActive' : 'label'}
                    key={2}
                    >
                        justify-content:
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[0] ? 'buttonActive' : (justifyContent === justifyContentOptions[0] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[0])}
                    >
                        flex-start;
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[1] ? 'buttonActive' : (justifyContent === justifyContentOptions[1] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[1])}
                    >
                        center;
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[2] ? 'buttonActive' : (justifyContent === justifyContentOptions[2] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[2])}
                    >
                        flex-end;
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[3] ? 'buttonActive' : (justifyContent === justifyContentOptions[3] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[3])}
                    >
                        space-between;
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[4] ? 'buttonActive' : (justifyContent === justifyContentOptions[4] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[4])}
                    >
                        space-around;
                    </div>
                    <div 
                    className={activeButton === 2 && justifyContent === justifyContentOptions[5] ? 'buttonActive' : (justifyContent === justifyContentOptions[5] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setJustifyContent(justifyContentOptions[5])}
                    >
                        space-evenly;
                    </div>
                </div>

                <div className='button-column'>

                    <div 
                    className = {activeButton === 3 ? 'labelActive' : 'label'}
                    key = {3}
                    >
                        gap:
                    </div>
                    <div
                    className={activeButton === 3 && gap === gapOptions[0] ? 'buttonActive' : (gap === gapOptions[0] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setGap(gapOptions[0])}
                    >
                        0;
                    </div>
                    <div 
                    className={activeButton === 3 && gap === gapOptions[1] ? 'buttonActive' : (gap === gapOptions[1] ? 'buttonSelected' : 'buttonUnselected')} 
                    onClick={() => setGap(gapOptions[1])}
                    >
                        10px;
                    </div>


                </div>

            </div>  
        </div>
   
 
        <div className='chart-container'>


            <div className='chart'>

                <div className='overlap-container'>
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

                    <div className="target-container" style={targetContainerStyle}>
                        <div className="target">

                        </div>
                        <div className="target">

                        </div>
                        <div className="target">

                        </div>
                        <div className="target">

                        </div>
                        <div className="target">

                        </div>

                    </div>
                </div>

                <div className='x-axis-label' style={{ color: xAxisColor}} >
                    {direction == 'column' ? 'align-items' : 'justify-content'}
                </div>

            </div>

            <div className='y-axis-label' style={{ color: yAxisColor}}>
                {direction == 'row' ? 'align-items' : 'justify-content'}
            </div>  
        </div>

      </div>
    )
  }