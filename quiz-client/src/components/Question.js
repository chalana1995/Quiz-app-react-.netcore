import { Card, CardContent, Typography, ListItemButton, List, CardHeader } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import { getFormatedTime } from '../helper'
import useStateContext, { stateContext } from '../hooks/useStateContext'

const Question = () => {

    const [qns, setQns] = useState([])
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)

    let timer;

    const startTimer = () => {
        timer = setInterval(() => {
            setTimeTaken(prev => prev + 1)
        }, [1000])
    }

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.question)
            .fetch()
            .then(res => {
                setQns(res.data)
                startTimer()
                console.log(res.data);
            })
            .catch(err => { console.log(err); })

        return () => { clearInterval(timer) }
    }, [])

    console.log("====qns", qns);
    return (
        qns.length != 0 ? (
            <Card sx={{ maxWidth: 640, mx: 'auto', mt: 5 }}>
                <CardHeader title={'Question ' + (qnIndex + 1) + ' of 5'} action={<Typography>{getFormatedTime(timeTaken)}</Typography>} />
                <CardContent>
                    <Typography variant='h6'>{qns[qnIndex].qnInWords}</Typography>
                    <List>
                        {qns[qnIndex].options.map((item, idx) =>
                            <ListItemButton key={idx} disableRipple>
                                <div>
                                    <b>{String.fromCharCode(65 + idx) + " . "}</b> {item}
                                </div>
                            </ListItemButton>
                        )}
                    </List>
                </CardContent>
            </Card>
        ) : null
    )
}

export default Question