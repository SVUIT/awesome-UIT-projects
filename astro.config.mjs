import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://svuit.github.io',
	base: '/awesome-UIT-projects',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/svuit',
			},
			favicon: '/src/assets/favicon.ico',
			customCss:[
				'/src/styles/custom.scss',
			],
			sidebar: [
				{
					label: 'Giới thiệu',
					autogenerate: { directory: 'GioiThieu' },
				},
				{
					label: 'Môn học',
					autogenerate: { directory: 'MonHoc' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Khoa Học máy tính', link: '/monhoc/khoahocmaytinh' },
						{ label: 'Mạng Máy Tính Và Truyền Thông', link: '/monhoc/mangmaytinhvatruyenthong' },
						{ label: 'Các môn học chung', link: '/monhoc/monhocchung' },
					],
				},
				{
					label: 'Công cụ',
					autogenerate: { directory: 'CongCu' },
				},			{
					label: 'Nguồn tài liệu',
					autogenerate: { directory: 'NguonTaiLieu' },
				},
			],
		}),
	],
});
