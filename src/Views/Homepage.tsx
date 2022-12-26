import React from 'react'
import { Box } from './components/StyledComponents'
import background from "./assets/background.jpg"
export const Homepage = () => {
  return (
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Box style={{
            width: "50vw",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center",
            justifySelf: "center",
            alignSelf: "center"
        }}
        >
            Hello
        </Box>

    </div>
  )
}
