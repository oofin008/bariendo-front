import CustomAppBar from "@/app/_components/AppBar"
import { Box, Button, Container, CssBaseline } from "@mui/material"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline/>
      {/* Include shared UI here e.g. a header or sidebar */}
      <CustomAppBar />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Button type='button' fullWidth variant='contained' color='error' sx={{ mt: 3, mb: 2}}>
          Book new appointment
        </Button>
      </Box>
    </Container>
  )
}