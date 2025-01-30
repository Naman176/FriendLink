import React, { useEffect, useState } from 'react'
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useLazySearchUsersQuery } from '../../redux/service';
import { addToSearchedUsers } from '../../redux/slice';

const SearchInput = () => {

    const _850 = useMediaQuery("(min-width:850px)")
    const _450 = useMediaQuery("(min-width:450px)")

    const { darkMode } = useSelector((state) => state.service)

    const [query, setQuery] = useState()
    const [searchUsers, searchUsersData] = useLazySearchUsersQuery()

    const dispatch = useDispatch()

    const handleSearch = async (e) => {
        if(query && e.key === "ENTER"){
            await searchUsers(query)
        }
    }

    useEffect(() => {
        if(searchUsersData.isSuccess){
            dispatch(addToSearchedUsers(searchUsersData.data.data))
            console.log(searchUsersData.data);
        }
        if(searchUsersData.isError){
            console.log(searchUsersData.error.data);
        }
    }, [searchUsersData.isSuccess, searchUsersData.isError])

    return (
        <>
            <TextField
                sx={{
                    width: "90%",
                    height: _450 ? "auto" : "50px",
                    maxWidth: "750px",
                    boxShadow: `5px 5px 5px ${darkMode ? "white" : "gray"}`,
                    borderRadius: "15px",
                    px: _450 ? 2 : 1,
                    py: _450 ? 1 : 0,
                    my: _850 ? 5 : _450 ? 3 : 2,
                    mx: "auto",
                    "& .MuiOutlinedInput-root": {
                        color: darkMode ? 'white' : 'black',
                        "& fieldset": {
                            border: "none"
                        }
                    }
                }}
                placeholder='Search User'
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start" sx={{color: darkMode ? "white" : "black"}}> 
                                <FaSearch />
                            </InputAdornment>
                        )
                    },
                }}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleSearch}
            />
        </>
    )
}

export default SearchInput