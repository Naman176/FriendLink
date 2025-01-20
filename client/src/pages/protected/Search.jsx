import React from 'react'
import SearchInput from '../../components/search/SearchInput';
import ProfileBar from '../../components/search/ProfileBar';
import { Stack, useMediaQuery } from '@mui/material';

const Search = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")

  return (
    <>
      <SearchInput />
      <Stack flexDirection={"column"} gap={_850 ? 3.5 : _450 ? 2 : 1} mb={5} width={"90%"} mx={"auto"} maxWidth={"850px"} >
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