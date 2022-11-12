import { configureStore } from '@reduxjs/toolkit'
import noRenderSlice from './slice/OddSlicesChaches'
import OddSlicesRender from './slice/OddSlicesRender'

export const store = configureStore({
    reducer: {
        noRenderOdd: noRenderSlice,

        renderOdd: OddSlicesRender,
    },
})
