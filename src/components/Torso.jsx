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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [textToCopy, setTextToCopy ]= useState("This is the text to copy!")

    const openModal = () => {
        const textInProgress = `flex-direction: ${direction};\njustify-content: ${justifyContent};\nalign-items: ${alignItems};\ngap: ${gap};`;
        setTextToCopy(textInProgress)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Text copied to clipboard!");
        }, (err) => {
        console.error("Failed to copy text: ", err);
        });
    };

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
            setJustifyContent((prev) => {
              const index = justifyContentOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % justifyContentOptions.length
                : (index - 1 + justifyContentOptions.length) % justifyContentOptions.length;
              return justifyContentOptions[newIndex];
            });
            break;
          case 2:
            setAlignItems((prev) => {
              const index = alignItemOptions.indexOf(prev);
              const newIndex = direction === 'down' 
                ? (index + 1) % alignItemOptions.length
                : (index - 1 + alignItemOptions.length) % alignItemOptions.length;
              return alignItemOptions[newIndex];
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
                Use arrow keys (up/down/left/right) or click the buttons below to change the orientation of the green shapes and make them fit inside the blue outlines. Click Randomize or press R for a new challenge.
            </div>
            <div className='controls'>
                <button onClick={() => setButtonClicked(true)}>Randomize</button>
                <button onClick={openModal}>Copy Code</button>
                {isModalOpen && (
                    <div className="modal">
                    <div className="modal-content">
                        <pre>{textToCopy}</pre>
                        <button onClick={copyToClipboard}>Copy text to clipboard</button>
                        <button onClick={closeModal}>Close</button>
                    </div>
                    </div>
                )}
                <a href="https://github.com/kingwilldabeast/flex-tutorial" target="_blank" rel="noopener noreferrer"
                    className='github-logo'
                    >
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    </div>
                </a>
            </div>
            <div className="button-container">

                <div  
                    className = 'button-column'
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

                <div  
                    className = 'button-column'
                    key={1}
                    >
                        justify-content:
                        {justifyContentOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 1 && justifyContent === option
                            ? 'buttonActive'
                            : justifyContent === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setJustifyContent(option);
                            setActiveButton(1);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}
                    
                </div>

                <div 
                    className = 'button-column'
                    key={2}
                    >
                        align-items:
                        {alignItemOptions.map((option) => (
                        <div
                        key={option} // Use a unique key for each element
                        className={
                            activeButton === 2 && alignItems === option
                            ? 'buttonActive'
                            : alignItems === option
                            ? 'buttonSelected'
                            : 'buttonUnselected'
                        }
                        onClick={() => {
                            setAlignItems(option);
                            setActiveButton(2);
                        }}
                        >
                        {option + ";"}
                        </div>
                    ))}

                </div>


                <div  
                    className = 'button-column'
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