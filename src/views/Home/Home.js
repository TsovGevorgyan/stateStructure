import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../../navigation'
import {
    addIncrease,
    changeOdd,
    selectRenderOdd,
} from '../../store/slice/OddSlicesRender'
import Dashboard from '../dashboard'

function Home() {
    const state = useSelector(selectRenderOdd)
    const dispatch = useDispatch()
    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            dispatch(changeOdd({ id: 1, value: event.target.value }))
        }
    }
    return (
        <div>
            <Navigation />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                }}
            >
                <ul
                    style={{
                        width: '100%',
                        backgroundColor: '#363740',
                        padding: '100px',
                        textAlign: 'center',
                        margin: 'unset',
                    }}
                >
                    {state.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                color: '#DDE2FF',
                                listStyle: 'none',
                                textDecoration: 'none',
                            }}
                        >
                            <b>{item.name}</b> - <span>{item.cf}</span>
                        </li>
                    ))}
                </ul>
                <Dashboard />
            </div>
            <div
                style={{
                    margin: '10px auto',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                <input
                    onKeyDown={handleKeyDown}
                    style={{
                        background: '#FCFDFE',
                        border: '1px solid',
                        borderColor: ' #F0F1F7',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '8px',
                        height: '23px',
                    }}
                />
                <button
                    style={{
                        fontSize: '20px',
                        cursor: 'pointer',
                        width: '100px',
                        //padding: '5px 2px',
                        filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        background: '#3751FF ',
                        borderRadius: '4px',
                        color: '#FFFFFF',
                        border: 'none',
                    }}
                    onClick={() => dispatch(addIncrease(1))}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Home
