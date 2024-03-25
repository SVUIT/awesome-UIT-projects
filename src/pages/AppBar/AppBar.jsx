import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import theme from '../../theme'

function appBar() {
    return (
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
    )
}

export default appBar