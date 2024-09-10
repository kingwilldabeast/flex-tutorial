import { useState, useEffect } from 'react';


export default function Torso (props) {
    // console.log(props)
    // const thing = ""


    const directionOptions = ['row', 'row-reverse', 'column', 'column-reverse']
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

    const xAxisColor = direction === 'column' || direction === 'column-reverse' ? 'pink' : 'yellow';
    const yAxisColor = direction === 'column' || direction === 'column-reverse' ? 'yellow' : 'pink';


    // Handler function for arrow key presses
    const handleKeyDown = (event) => {
        switch (event.key) {
          case 'r':
            randomizeTarget();
            break;
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
            <div className='instructions'>
                Use the four arrow keys (up/down/left/right) to change the orientation of the green shapes. Try to make them fit inside the blue outlines. Click Randomize or press R for a new target layout.
            </div>
            <div className='controls'>
                <button onClick={() => setButtonClicked(true)}>Randomize</button>
                <button >Copy Code</button>

            </div>
            <div className="button-container">

                <div className='button-column'>
                    <div 
                    className = 'label'
                    key={0}
                    >
                        flex-direction:
                        {directionOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 0 && direction === option
                            ? 'buttonActive'
                            : direction === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setDirection(option);
                            setActiveButton(0);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}
                </div>
                </div>

                <div className='button-column'>
                    <div 
                    className = 'label'
                    key={1}
                    >
                        align-items:
                        {alignItemOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 1 && alignItems === option
                            ? 'buttonActive'
                            : alignItems === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setAlignItems(option);
                            setActiveButton(1);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}
                    </div>

                </div>

                <div className='button-column'>
                    <div 
                    className = 'label'
                    key={2}
                    >
                        justify-content:
                        {justifyContentOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 2 && justifyContent === option
                            ? 'buttonActive'
                            : justifyContent === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setJustifyContent(option);
                            setActiveButton(2);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}
                    </div>
                    
                </div>

                <div className='button-column'>

                    <div 
                    className = 'label'
                    key = {3}
                    >
                        gap:
                        {gapOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 3 && gap === option
                            ? 'buttonActive'
                            : gap === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setGap(option);
                            setActiveButton(3);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}
                    </div>
                    
                </div>

            </div>  
        </div>
   
 
        <div className='chart-container'>


            <div className='chart'>

                <div className='overlap-container'>
                    <div className="box-container" style={containerStyle}>
                        <div className="item1">
                            A
                        </div>
                        <div className="item2">
                            B
                        </div>
                        <div className="item3">
                            C
                        </div>
                        <div className="item4">
                            D
                        </div>
                        <div className="item5">
                            E
                        </div>

                    </div>    

                    <div className="target-container" style={targetContainerStyle}>
                        <div className="target1">

                        </div>
                        <div className="target2">

                        </div>
                        <div className="target3">

                        </div>
                        <div className="target4">

                        </div>
                        <div className="target5">

                        </div>

                    </div>
                </div>

                <div className='x-axis-label' style={{ color: xAxisColor}} >
                    {direction == 'column' || direction == 'column-reverse' ? 'align-items' : 'justify-content'}
                </div>

            </div>

            <div className='y-axis-label' style={{ color: yAxisColor}}>
                {direction == 'row' || direction == 'row-reverse' ? 'align-items' : 'justify-content'}
            </div>  
        </div>

      </div>
    )
  }