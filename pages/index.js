import { Container, Box, Heading, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

const Page = () => {
  return (
    <Container>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello I am a full-stack developer based in Argentina.
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marcos Aguado
          </Heading>
          <p>Full-Stack Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
