import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText  from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

const menuSubject = [
    {
        text: 'Karhdo/CS105.M11.KHCL',
        path: 'https://github.com/Karhdo/CS105.M11.KHCL',
        decriptsion: '- Tổng hợp nội dung lý thuyết từng chương và đồ án cuối kì của môn học.'
    },
]

function khoaHocMayTinh() {
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

export default khoaHocMayTinh;