import { Typography, Container, Box, Link as MUILink, Divider } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <Container sx={{ mt: 2, mb: 2 }}>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2">© {new Date().getFullYear()} Max Atslega.</Typography>
          <Box>
            <Typography variant="body2" color={"#9a9a9a"}>
              <Link passHref href="/legals">
                <MUILink href="/legals" color={"#9a9a9a"} variant="body2">
                  Legal Notice
                </MUILink>
              </Link>{" "}
              &{" "}
              <Link passHref href="/privacy">
                <MUILink href="/privacy" color={"#9a9a9a"} variant="body2">
                  Privacy Policy
                </MUILink>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
