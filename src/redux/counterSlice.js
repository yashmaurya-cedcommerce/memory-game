import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    steps: 0,
    imageArray: [{ name: 'flower1', id: 0 }, { name: 'flower2', id: 1 }, { name: 'flower3', id: 2 }, { name: 'flower4', id: 3 }, { name: 'flower5', id: 4 }, { name: 'flower6', id: 5 }, { name: 'flower7', id: 6 }, { name: 'flower8', id: 7 }, { name: 'flower1', id: 8 }, { name: 'flower2', id: 9 }, { name: 'flower3', id: 10 }, { name: 'flower4', id: 11 }, { name: 'flower5', id: 12 }, { name: 'flower6', id: 13 }, { name: 'flower7', id: 14 }, { name: 'flower8', id: 15 }],
    choosenImages: [],
    matchedImages: []
}

export const counterSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        shuffleImageArray: (state) => {
            var tempArray = state.imageArray
            tempArray = tempArray.sort((a, b) => 0.5 - Math.random());
            state.imageArray = [...tempArray]
        },
        imageClicked: (state, action) => {
            state.choosenImages = [...state.choosenImages, action.payload]
        },
        emptyChoosenImages: (state) => {
            state.choosenImages = []
        },
        removeMatched: (state) => {
            var tempArr = state.matchedImages
            tempArr.push(state.choosenImages[0])
            tempArr.push(state.choosenImages[1])
            state.matchedImages = [...tempArr]
        }
    },
})

export const { shuffleImageArray, imageClicked, emptyChoosenImages, removeMatched } = counterSlice.actions
export default counterSlice.reducer