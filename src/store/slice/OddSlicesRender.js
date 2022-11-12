import { createSlice, current } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'renderOdd',
    initialState: [
        {
            id: 1,
            name: 'Over',
            cf: 1,
        },
        {
            id: 2,
            name: 'Under',
            cf: 1,
        },
        {
            id: 3,
            name: 'Over',
            cf: 2.5,
            disabled: true,
        },
        {
            id: 4,
            name: 'Under',
            cf: 1.5,
            disabled: true,
        },
    ],
    reducers: {
        changeOdd: (state, action) => {
            const newState = state.map((element) => {
                return element.id === action.payload.id
                    ? { ...element, cf: action.payload.value }
                    : current(element)
            })
            state = newState

            console.log('test')
            console.log(state)

            return state
        },
        addIncrease: (state, action) => {
            const increarse = current(state).map((item) =>
                item.id === action.payload && !item.disabled
                    ? { ...item, cf: +item.cf + 1 }
                    : item
            )
            console.log(current(state))

            return increarse
        },
    },
})
export const selectRenderOdd = (state) => state.renderOdd

export const { changeOdd, addIncrease } = counterSlice.actions

export default counterSlice.reducer
