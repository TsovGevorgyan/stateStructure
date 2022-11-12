import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    noRenderSlice,
    selectNoRenderOdd,
} from '../../store/slice/OddSlicesChaches'

export default function TestPage() {
    const state = useSelector(selectNoRenderOdd)
    console.log(state)
    const dispatch = useDispatch()
    return (
        <div
            style={{
                width: '100%',
                border: '1px solid grey',
                borderStyle: 'none none none solid',
                backgroundColor: '#dedcf582',
                padding: '100px',
                color: 'grey',
                textAlign: 'center',
            }}
        >
            {' '}
            <h1>No Render ODD</h1>
            {state.map((el) => (
                <li>
                    <b>{el.name}</b> - <span>{el.cf}</span>
                </li>
            ))}
        </div>
    )
}
