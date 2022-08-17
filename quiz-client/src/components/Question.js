import { Card, CardContent, Typography, ListItemButton, List, CardHeader, Box, LinearProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import { getFormatedTime } from '../helper'
import useStateContext, { stateContext } from '../hooks/useStateContext';
import { useNavigate } from 'react-router'

const Question = () => {

    const [qns, setQns] = useState([])
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)
    const { context, setContext } = useStateContext()
    const navigate = useNavigate()

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


    const updateAnswer = (qnId, optionIdx) => {
        const temp = [...context.selectOptions]
        temp.push({
            qnId,
            selected: optionIdx
        })
        if (qnIndex < 4) {
            setContext({ selectOptions: [...temp] })
            setQnIndex(qnIndex + 1)
        }
        else {
            setContext({ selectOptions: [...temp], timeTaken })
            navigate("/result")
        }
    }

    console.log("====qns", qns);
    return (
        qns.length != 0 ? (
            <Card sx={{ maxWidth: 640, mx: 'auto', mt: 5, '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}>
                <CardHeader title={'Question ' + (qnIndex + 1) + ' of 5'} action={<Typography>{getFormatedTime(timeTaken)}</Typography>} />
                <Box>
                    <LinearProgress variant="determinate" value={(qnIndex + 1) * 100 / 5} />
                </Box>
                <CardContent>
                    <Typography variant='h6'>{qns[qnIndex].qnInWords}</Typography>
                    <List>
                        {qns[qnIndex].options.map((item, idx) =>
                            <ListItemButton key={idx} disableRipple onClick={() => updateAnswer(qns[qnIndex].qnId, idx)}>
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