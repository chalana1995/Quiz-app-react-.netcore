import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import { createAPIEndpoint } from '../api'
import useForm from '../hooks/useForm'
import useStateContext from '../hooks/useStateContext'
import Center from './Center'
import {useNavigate} from 'react-router-dom'

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const { context, setContext } = useStateContext()
    const navigate = useNavigate()

    const { values,
        setValues,
        errors,
        setErrors,
        handleInputChange } = useForm(getFreshModel)

    const login = (e) => {
        e.preventDefault()
        if (validate()) {
            createAPIEndpoint('Participant')
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.participantId })
                    console.log("context===", context);
                    navigate("/quiz")
                })
                .catch(err => console.log(err))
        }
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant='h3' sx={{ my: 3 }}>Quiz App</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            margin: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete='off' onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                            <Button type="submit" variant='contained' size='large' sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}
