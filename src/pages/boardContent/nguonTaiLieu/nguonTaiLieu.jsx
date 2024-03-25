import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText  from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

const menuSubject = [
    {
        text: 'Study Vault UIT - MMTT ',
        path: 'https://svuit.github.io/mmtt/',
        decriptsion: '- Kho tài liệu học tập UIT, phiên bản Mạng máy tính và Truyền thông.'
    },
    {
        text: 'Ban học tập khoa MMT&TT ',
        path: 'https://www.facebook.com/uit.nc',
        decriptsion: ' - Ban học tập khoa Mạng máy tính và Truyền thông, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.'
    },
    {
        text: 'PhamThe-KHDL/IT007.M14-Operating-Systems',
        path: 'https://github.com/PhamThe-KHDL/IT007.M14-Operating-Systems',
        decriptsion: '- Tổng hợp nội dung lý thuyết từng chương và đồ án cuối kì của môn học.'
    },
    {
        text: 'Ban học tập khoa KTMT ',
        path: 'https://www.facebook.com/bht.ktmt',
        decriptsion: ' - Ban học tập khoa Kỹ thuật Máy tính, cung cấp slide training cho các môn học của khoa mỗi đợt giữa kỳ và cuối kỳ.'
    },
    {
        text: 'Ban học tập khoa HTTT',
        path: 'https://www.facebook.com/BHTHTTT',
        decriptsion: '- Ban học tập khoa Hệ thống Thông tin, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.'
    },
    {
        text: 'Ban học tập khoa KHKTTT',
        path: 'https://www.facebook.com/BHTKHKTTT',
        decriptsion: '- Ban học tập khoa Khoa học và Kỹ thuật Thông tin, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.'
    },
    {
        text: 'Ban học tập khoa CNPM',
        path: 'https://www.facebook.com/bhtcnpm',
        decriptsion: '-Ban học tập khoa Công nghệ Phần mềm, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ, ngoài ra còn cung cấp tài liệu các môn học riêng của khoa'
    }

]

function nguonTaiLieu() {
    return (
        <Box sx = {{
            
        }}
        >
            <h2>Nguồn tài liệu học tập</h2>  
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

export default nguonTaiLieu;