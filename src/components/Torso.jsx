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

    const gapOptions = ['0px', '10px', '20px']
    const [gap, setGap] = useState(gapOptions[0])

    const [activeButton, setActiveButton] = useState(0);  

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

    // Handler function for arrow key presses
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
            setActiveButton((prev) => (prev + 1) % 4);
            } else if (event.key === 'ArrowLeft') {
            setActiveButton((prev) => (prev - 1 + 4) % 4);
            } else if (event.key === 'ArrowDown') {
                // Move to the next direction
                switch(activeButton) {
                    case 0:
                        setDirection((prevDirection) => {
                            const currentIndex = directionOptions.indexOf(prevDirection);
                            const nextIndex = (currentIndex + 1) % directionOptions.length;
                            return directionOptions[nextIndex];
                          });
                        break;
                    case 1:
                        setAlignItems((prevAlignItem) => {
                            const currentIndex = alignItemOptions.indexOf(prevAlignItem);
                            const nextIndex = (currentIndex + 1) % alignItemOptions.length;
                            return alignItemOptions[nextIndex];
                          });
                        break;
                    case 2:
                        setJustifyContent((prevJustifyContent) => {
                            const currentIndex = justifyContentOptions.indexOf(prevJustifyContent);
                            const nextIndex = (currentIndex + 1) % justifyContentOptions.length;
                            return justifyContentOptions[nextIndex];
                          });
                        break;
                    case 3:
                        setGap((prevGap) => {
                            const currentIndex = gapOptions.indexOf(prevGap);
                            const nextIndex = (currentIndex + 1) % gapOptions.length;
                            return gapOptions[nextIndex];
                          });
                        break;
                }
              } else if (event.key === 'ArrowUp') {
                // Move to the previous direction
                switch(activeButton) {
                    case 0:
                        setDirection((prevDirection) => {
                            const currentIndex = directionOptions.indexOf(prevDirection);
                            const prevIndex = (currentIndex - 1 + directionOptions.length) % directionOptions.length;
                            return directionOptions[prevIndex];
                          });
                        break;
                    case 1:
                        setAlignItems((prevAlignItem) => {
                            const currentIndex = alignItemOptions.indexOf(prevAlignItem);
                            const prevIndex = (currentIndex - 1 + alignItemOptions.length) % alignItemOptions.length;
                            return alignItemOptions[prevIndex];
                          });
                        break;
                    case 2:
                        setJustifyContent((prevJustifyContent) => {
                            const currentIndex = justifyContentOptions.indexOf(prevJustifyContent);
                            const prevIndex = (currentIndex - 1 + justifyContentOptions.length) % justifyContentOptions.length;
                            return justifyContentOptions[prevIndex];
                          });
                        break;
                    case 3:
                        setGap((prevGap) => {
                            const currentIndex = gapOptions.indexOf(prevGap);
                            const prevIndex = (currentIndex - 1 + gapOptions.length) % gapOptions.length;
                            return gapOptions[prevIndex];
                          });
                        break;
                }
            }
        };

    // Attach and clean up the event listener
        useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
            return () => {
            window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);


    return (
      
      <div className="torso">
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
                <div 
                className={gap === '20px' ? 'buttonSelected' : 'buttonUnselected'}
                onClick={() => setGap(gapOptions[2])}
                >
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