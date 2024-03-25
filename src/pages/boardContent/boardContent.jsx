import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import theme from '../../theme'
import MonHoc from './monHoc/monHoc'
import MucLuc from './mucLuc/mucLuc'
import CongCu from './congCu/congCu'
import NguonTaiLieu from './nguonTaiLieu/nguonTaiLieu'


function boardContent() {
    return (
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
            <MucLuc />
            <Divider /> 
            <MonHoc />
            <Divider/>
            <CongCu/>
            <Divider/>
            <NguonTaiLieu/>
            
          </Box>
    );
}

export default boardContent;