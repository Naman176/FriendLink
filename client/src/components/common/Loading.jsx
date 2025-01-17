import React from 'react'
import { Stack, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} minHeight={"50vh"} height={"100%"} width={"100%"} my={5}>
            <CircularProgress color='success' />
        </Stack>
    )
}

export default Loading