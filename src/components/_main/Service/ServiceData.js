export const serviceData = [
  {
    id: 'web-design',
    title: 'Webデザイン',
    icons: [{ name: 'Figma', path: `${import.meta.env.BASE_URL}figma.png` }],
  },
  {
    id: 'frontend',
    title: 'フロントエンド',
    icons: [
      { name: 'HTML', path: `${import.meta.env.BASE_URL}html.png` },
      { name: 'CSS', path: `${import.meta.env.BASE_URL}css.svg` },
      { name: 'Sass', path: `${import.meta.env.BASE_URL}sass.png` },
      { name: 'JavaScript', path: `${import.meta.env.BASE_URL}js.png` },
      { name: 'React', path: `${import.meta.env.BASE_URL}react.png` },
      { name: 'vite', path: `${import.meta.env.BASE_URL}vite.png` },
      { name: 'GitHub', path: `${import.meta.env.BASE_URL}github-mark.svg` },
      { name: 'VSCode', path: `${import.meta.env.BASE_URL}vscode.png` },
    ],
  },
  {
    id: 'illustration-video',
    title: 'イラスト・写真・動画',
    icons: [
      { name: 'SAI', path: `${import.meta.env.BASE_URL}sai.png` },
      {
        name: 'CLIP STUDIO PAINT',
        path: `${import.meta.env.BASE_URL}clip.png`,
      },
      { name: 'Illustrator', path: `${import.meta.env.BASE_URL}ai.png` },
      { name: 'Photoshop', path: `${import.meta.env.BASE_URL}ps.png` },
      { name: 'Premiere Pro', path: `${import.meta.env.BASE_URL}pr.png` },
      { name: 'After Effects', path: `${import.meta.env.BASE_URL}ae.png` },
    ],
  },
];
