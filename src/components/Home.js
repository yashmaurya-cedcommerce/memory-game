import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyChoosenImages, imageClicked, removeMatched, shuffleImageArray } from '../redux/counterSlice';

export default function Home() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [timeOutID, setTimeOutID] = useState()

    useEffect(() => {
        dispatch(shuffleImageArray())
    }, [])

    useEffect(() => {
        if (state.grid.choosenImages.length === 2) {
            if(state.grid.choosenImages[0].name === state.grid.choosenImages[1].name) {
                dispatch(removeMatched())
                dispatch(emptyChoosenImages())
            }
            else {
                setTimeOutID(setTimeout(() => {
                    dispatch(emptyChoosenImages())
                }, 2000))
            }
            
        }
    }, [state.grid.choosenImages])

    var imageClickedHandler = (item) => {
        if (state.grid.choosenImages.length < 2) {
            dispatch(imageClicked(item))
        }
        else {
                clearTimeout(timeOutID)
                dispatch(emptyChoosenImages())
                dispatch(imageClicked(item))
        }
    }

    return (
        <div className='homeContainer'>

            <h1>Memory Game</h1>
            {(state.grid.matchedImages.length === state.grid.imageArray.length)?<p className='winMessage'>YOU WON</p>:''}
            {console.log(state)}
            <div className='gridContainer'>
                {state.grid.imageArray.map((item, index) => {
                    return (
                        <>
                            <div className='imageContainer' key={index}>
                                {(state.grid.choosenImages.includes(item)) ? <img className='gridImage' src={`/images/${item.name}.webp`} alt="" key={index} /> : (state.grid.matchedImages.includes(item))?<img className='fadedImage' src={`/images/${item.name}.webp`} alt="" key={index} />:<img className='gridImage' src='/images/gridCover.jpg' alt="" key={index} onClick={() => imageClickedHandler(item)} />}
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}
