import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText  from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

const menuSubject = [
    {
        text: 'Tool ĐKHP UIT ',
        path: 'https://dkhp-uit.vercel.app/1',
        decriptsion: '- Một website hỗ trợ trong việc đăng ký học phần, cho phép sắp xếp thời khóa biểu cũng như tạo script đăng ký nhanh.'
    },
]

function congCu() {
    return (
        <Box>  
            <h2>Công cụ</h2>
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

export default congCu;