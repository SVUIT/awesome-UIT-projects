// Remove the unused import statement for React
import Container  from '@mui/material/Container'
import Box from '@mui/material/Box'
import theme from './theme'
import SearchIcon from '@mui/icons-material/Search'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

function App() {
  return (
    <Container 
    disableGutters={true} 
    maxWidth = {false} 
    sx = {{minHeight: theme.layout.appHeight}} >
      <Box sx={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'column',
        height: theme.layout.appBarHeight,
        backgroundColor: '#000'
      }} >
        <Box sx = {{
          color: 'white',
          fontSize: '2.275rem',
          paddingLeft: '1rem',
          marginLeft: 2 
        }}>
          AwesomeUIT 
        </Box>
        <Box>
          <SearchIcon 
          sx = {{color: 'white'}}
          />
        </Box>
      </Box>

      <Box sx = {{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: theme.layout.boardContentHeight,
        fontSize: '1.125rem',
        marginTop: 2,
        marginLeft: 2
      }}>
        Danh sách tổng hợp các project liên quan đến UIT-VNUHCM như đồ án môn học, công cụ, đoạn code, tài liệu học tập, và nhiều hơn thế nữa.
        <h2>Mục lục</h2> 
        <Divider /> 
        <List>
          <ListItem>
            <List>
              Mon hoc
              <ListItem>
                <List>
                Khoa khoa hoc may tinh
                  <ListItem>
                    CS105 - Đồ họa máy tính 
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Khoa Mạng máy tính và truyền thông
              </ListItem>
              <ListItem>
                Khoa hệ thống thông tin
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            Cong cu
          </ListItem>
        </List>  
        
      </Box>
    </Container>
  )
}

export default App
