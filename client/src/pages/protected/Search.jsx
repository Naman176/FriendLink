import React from 'react'
import SearchInput from '../../components/search/SearchInput';
import ProfileBar from '../../components/search/ProfileBar';
import { Stack, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

const Search = () => {

  const _850 = useMediaQuery("(min-width:850px)")
  const _450 = useMediaQuery("(min-width:450px)")

  const { searchedUsers } = useSelector((state) => state.service)

  return (
    <>
      <SearchInput />
      <Stack flexDirection={"column"} gap={_850 ? 3.5 : _450 ? 2 : 1} mb={5} width={"90%"} mx={"auto"} maxWidth={"850px"} >
        {
          searchedUsers ? searchedUsers.length > 0 ?
            searchedUsers.map((e) => {
              return <ProfileBar key={e._id} e={e} />
            })
            : "" : "Start Searching..."
        }
      </Stack>
    </>
  )
}

export default Search