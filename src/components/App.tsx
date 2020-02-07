import { hot } from 'react-hot-loader'
import React from 'react'

const App = () => {
    const clickHandler = () => {
        fetch('/api/hi')
        .then(response => console.log(response))
    }
    return (
        <>
            <div className='example'>
                Welcome to the react-typescript-sass boilerplate
                <button onClick={() => {clickHandler()}}>
                    Check API Connection
                </button>
            </div>
        </>
    )
}

export default hot(module)(App)