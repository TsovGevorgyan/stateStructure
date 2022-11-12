import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRenderOdd } from '../../store/slice/OddSlicesRender'

function Dashboard() {
    const state = useSelector(selectRenderOdd)
    const dispatch = useDispatch()

    return (
        <div style={{ width: '100%' }}>
            <div
                style={{
                    width: '100%',
                    border: '1px solid grey',
                    borderStyle: 'none none none solid',
                    backgroundColor: '#363740',
                    padding: '126px 0',
                    color: '#DDE2FF',
                    textAlign: 'center',
                }}
            >
                <ul>
                    {state.map((item) => (
                        <li
                            key={item.id}
                            style={{ listStyle: 'none', color: '#DDE2FF' }}
                        >
                            <b>{item.name}</b> -<span>{item.cf}</span>
                        </li>
                    ))}
                </ul>
                {/* <button onClick={()=>dispatch(onchange)}></button> */}
            </div>
        </div>
    )
}

export default Dashboard
