// Remove the unused import statement for React
import Container  from '@mui/material/Container'
import AppBar from './pages/AppBar/AppBar'
import theme from './theme'
import BoardContent from './pages/boardContent/boardContent'

function App() {
  return (
    <>
      <Container 
      disableGutters={true} 
      maxWidth = {false} 
      sx = {{minHeight:theme.layout.appHeight}} 
      >
        <AppBar />
        <BoardContent />
      </Container>
    </>
  )
}

export default App
