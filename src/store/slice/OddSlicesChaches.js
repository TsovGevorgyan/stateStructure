import { createSlice } from '@reduxjs/toolkit'

export const noRenderSlice = createSlice({
    name: 'noRenderOdd',
    initialState: [
        {
            id: 3,
            name: 'Over(2)',
            cf: 2.5,
            disabled: true,
        },
        {
            id: 4,
            name: 'Under(1.5)',
            cf: 1.5,
            disabled: true,
        },
    ],
    reducers: {},
})
export const selectNoRenderOdd = (state) => state.noRenderOdd

export default noRenderSlice.reducer
