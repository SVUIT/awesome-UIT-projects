import Box  from '@mui/material/Box'
import KhoaHocMayTinh from './khoaHocMayTinh/khoaHocMayTinh'
import KhoaMangMayTinh from './khoaMangMayTinhVaTruyenThong/khoaMangMayTinhVaTruyenThong'
import CacMonHocChung from './cacMonHocChung/cacMonHocChung'

function MonHoc() {

    return (
        <Box>
            <h2>MonHoc</h2>
            <Box>
                <h3>Khoa học máy tính</h3>
                <Box>CS105 - Đồ họa máy tính</Box>
                <KhoaHocMayTinh />
            </Box>
            <Box>
                <h3>Khoa mạng máy tính và truyền thông</h3>
                <Box>NT132 - Quản trị mạng và hệ thống</Box>
                <KhoaMangMayTinh />
            </Box>
            <Box>
                <h3>Các môn học chung</h3>
                <Box>Hệ điều hành</Box>
                <CacMonHocChung />
            </Box>
        </Box>
    )
}

export default MonHoc