import { Typography, Container, Box } from "@mui/material"
import Image from "next/image"
import Logo from "@images/Logo.png"

export default function Footer() {
  return (
    <header>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
          <Image height={"28px"} width={"28px"} src={Logo} alt={"ee"} />
          <Typography sx={{ paddingLeft: "15px" }} variant="h2">
            AtslegaNetwork
          </Typography>
        </Box>
      </Container>
    </header>
  )
}
