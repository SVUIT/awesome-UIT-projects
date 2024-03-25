import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText  from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

const menuSubject = [
    {
        text: 'thu4n.dev/NT132',
        path: 'https://thu4n.dev/posts/network-admin-review/',
        decriptsion: '- Bài blog ôn tập cho bài thi cuối kỳ của môn học.'
    },
]

function khoaMangMayTinh() {
    return (
        <Box>  
                <List sx ={{cursor:'pointer'}}>
                {menuSubject.map(item =>(
                    <ListItem key={item.text} >
                        <Link href={item.path} target = 'blank'>
                            <ListItemText primary={item.text} />
                        </Link>
                        <ListItemText primary={item.decriptsion} />
                    </ListItem>
                ))}
            </List> 
        </Box>
    );
}

export default khoaMangMayTinh;