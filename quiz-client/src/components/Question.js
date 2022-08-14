import React, { useContext } from 'react'
import { stateContext } from '../hooks/useStateContext'

const Question = () => {

    const { context, setContext } = useContext(stateContext)

    setContext({
        ...context,
        timeTaken: 1
    })

    return (
        <div>Question</div>
    )
}

export default Question