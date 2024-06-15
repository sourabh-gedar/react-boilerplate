import React from 'react'
import { useGetUserQuery } from '../../store'
import { Box, Stack, Typography } from '@mui/material';
type demoUser = {
  email: string
}

const Index: React.FC = () => {
  const { data: userData } = useGetUserQuery()
  console.log('data :>> ', userData);
  Typography
  return (
    <Box>
      <Typography variant="h5" gutterBottom> About US </Typography>
      <Stack>
        {
          userData instanceof Array && userData.length > 0 &&
          userData.map((items: demoUser) => {
            return <Box display="flex" gap={2}>
              <Typography >
                User Email :
              </Typography>
              <Typography >
                {items?.email}
              </Typography>
            </Box>
          })
        }
      </Stack>
    </Box>
  )
}
export default Index