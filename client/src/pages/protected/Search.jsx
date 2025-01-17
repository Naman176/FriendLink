import React from 'react'
import SearchInput from '../../components/search/SearchInput';
import ProfileBar from '../../components/search/ProfileBar';
import { Stack } from '@mui/material';

const Search = () => {
  return (
    <>
      <SearchInput />
      <Stack flexDirection={"column"} gap={3.5} mb={5} width={"90%"} mx={"auto"} maxWidth={"850px"} >
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </>
  )
}

export default Search