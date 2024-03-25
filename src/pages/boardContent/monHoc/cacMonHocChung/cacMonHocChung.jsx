import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText  from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

const menuSubject = [
    {
        text: 'PhamThe-KHDL/IT007.M14-Operating-Systems',
        path: 'https://github.com/PhamThe-KHDL/IT007.M14-Operating-Systems',
        decriptsion: '- Tổng hợp nội dung lý thuyết từng chương và đồ án cuối kì của môn học.'
    },
]

function cacMonHocChung() {
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

export default cacMonHocChung;