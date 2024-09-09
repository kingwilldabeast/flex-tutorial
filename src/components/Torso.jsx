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
        <button onClick={() => setButtonClicked(true)}>Randomize</button>
        <div className="button-container">

            <div className='button-column'>
            <div 
            className = {activeButton === 0 ? 'labelActive' : 'label'}
            key={0}
            >
                    flex-direction:
                </div>
                <div 
                className={direction === directionOptions[0] ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setDirection(directionOptions[0])}
                >
                    row;
                </div>
                <div 
                className={direction === directionOptions[1] ? 'buttonSelected' : 'buttonUnselected'}
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
                className={alignItems === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setAlignItems(alignItemOptions[0])}
                >
                    flex-start;
                </div>
                <div 
                className={alignItems === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setAlignItems(alignItemOptions[1])}
                >
                    center;
                </div>
                <div 
                className={alignItems === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
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
                className={justifyContent === 'flex-start' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setJustifyContent(justifyContentOptions[0])}
                >
                    flex-start;
                </div>
                <div 
                className={justifyContent === 'center' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setJustifyContent(justifyContentOptions[1])}
                >
                    center;
                </div>
                <div 
                className={justifyContent === 'flex-end' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setJustifyContent(justifyContentOptions[2])}
                >
                    flex-end;
                </div>
                <div 
                className={justifyContent === 'space-between' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setJustifyContent(justifyContentOptions[3])}
                >
                    space-between;
                </div>
                <div 
                className={justifyContent === 'space-around' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setJustifyContent(justifyContentOptions[4])}
                >
                    space-around;
                </div>
                <div 
                className={justifyContent === 'space-evenly' ? 'buttonSelected' : 'buttonUnselected'}
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
                className={gap === '0px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setGap(gapOptions[0])}
                >
                    0;
                </div>
                <div 
                className={gap === '10px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setGap(gapOptions[1])}
                >
                    10px;
                </div>


            </div>

        </div>     
 
        <div className='y-axis-container'>


            <div className='x-axis-container'>

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

            <div className='x-axis'>
                    {direction == 'column' ? 'align-items' : 'justify-content'}
                </div>  
            </div>

            <div className='y-axis'>
                    {direction == 'row' ? 'align-items' : 'justify-content'}
            </div>  
        </div>

      </div>
    )
  }