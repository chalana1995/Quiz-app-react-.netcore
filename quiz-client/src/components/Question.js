import React, { useContext } from 'react'
import useStateContext, { stateContext } from '../hooks/useStateContext'

const Question = () => {

    const { context, setContext } = useStateContext()


    console.log("context2",context);
    // setContext({ timeTaken: 1 })

    return (
        <div>Question</div>
    )
}

export default Question