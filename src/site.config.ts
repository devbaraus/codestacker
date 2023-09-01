import type { Member, Project, Social } from '@/types'

export const siteName = 'Code Stacker'
export const siteTitle = `${siteName} - Empresa Júnior do IFG Câmpus Anápolis`

export const siteURL = 'https://codetower.netlify.app'

export const siteCNPJ = '00.000.000/0001-00'
export const siteDescription = `A ${siteName} é uma empresa sem fins lucrativos, visando fomentar o empreendedorismo no Brasil através de projetos de tecnologia da informação de alta qualidade e custo abaixo do mercado. Todo o valor ganho é revertido para a formação profissional dos nossos membros e alunos do Instituto Federal de Goiás - Câmpus Anápolis.`

export const siteKeywords = [
  siteName,
  'programação',
  'empresa junior',
  'ifg',
  'anapolis',
  'computação',
  'software',
  'desenvolvimento de site',
  'site',
  'iot',
  'aplicativos',
  'tecnologia',
  'website',
  'informatica'
]

export const siteContatos = [
  { url: '/#', text: '@codestacker.ej', icon: 'facebook' },
  { url: '/#', text: '@codestacker.ej', icon: 'instagram' },
  // { url: '/', text: 'codetower', icon: 'youtube' },
  { url: '/#', text: 'codestacker.ej@gmail.com', icon: 'mail' }
]

export const siteLinksUteis = [
  // { url: '/', text: 'Processo seletivo' },
  { url: 'https://www.ifg.edu.br/anapolis', text: 'IFG Câmpus Anápolis' },
  {
    url: 'https://www.ifg.edu.br/servidor/64-ifg/pro-reitorias/extensao-proex/14422-empresa-junior',
    text: 'IFG - Empresa Júnior'
  }
  // { url: '/', text: 'Youtube' },
  // { url: '/', text: 'Instagram' },
  // { url: '/', text: 'Blog' },
]

export const siteProjects: Project[] = [
  {
    id: 1,
    cover: {
      href: 'https://unsplash.com/photos/KonWFWUaAuk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNDQyNzY5fA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    title: 'Projeto 1',
    tag: 'website',
    releasedAt: '2021-01-01'
  },
  {
    id: 2,
    cover: {
      href: 'https://unsplash.com/photos/NRQV-hBF10M/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNDQxODk5fA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    title: 'Projeto 2',
    tag: 'iot',
    releasedAt: '2021-01-01'
  },
  {
    id: 3,
    cover: {
      href: 'https://unsplash.com/photos/4miBe6zg5r0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNDQzODUzfA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    title: 'Projeto 3',
    tag: 'iot',
    releasedAt: '2021-01-01'
  },
  {
    id: 4,
    cover: {
      href: 'https://unsplash.com/photos/2Hzmz15wGik/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fHx8MTY5MzM5MzU1NHww&force=true&w=640',
      alternative: '',
      caption: ''
    },
    title: 'Projeto 4',
    tag: 'aplicativos',
    releasedAt: '2021-01-01'
  }
]

// Create a function to generate custom social media data
function generateSocials(memberName: string): Social[] {
  return [
    {
      label: `Twitter`,
      href: `https://twitter.com/${memberName.toLowerCase()}`,
      type: 'twitter'
    },
    {
      label: `LinkedIn`,
      href: `https://linkedin.com/in/${memberName.toLowerCase()}`,
      type: 'linkedin'
    }
    // Add more social media profiles as needed
  ]
}

// Create 5 mock members with custom social media data
export const siteMembers: Member[] = [
  {
    id: 1,
    name: 'Member 1',
    cover: {
      href: 'https://unsplash.com/photos/5aGUyCW_PJw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNTY1Nzg3fA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    role: 'presidente',
    socials: generateSocials('Member1')
  },
  {
    id: 2,
    name: 'Member 2',
    cover: {
      href: 'https://unsplash.com/photos/IF9TK5Uy-KI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNTY0MDQ3fA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    role: 'projetos',
    socials: generateSocials('Member2')
  },
  {
    id: 3,
    name: 'Member 3',
    cover: {
      href: 'https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNTY3NDUwfA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    role: 'marketing',
    socials: generateSocials('Member3')
  },
  {
    id: 4,
    name: 'Member 4',
    cover: {
      href: 'https://unsplash.com/photos/7YVZYZeITc8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNTY5OTgzfA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    role: 'financeiro',
    socials: generateSocials('Member4')
  },
  {
    id: 5,
    name: 'Member 5',
    cover: {
      href: 'https://unsplash.com/photos/D6t70k8F28w/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkzNTY5MjEyfA&force=true&w=640',
      alternative: '',
      caption: ''
    },
    role: 'secretário',
    socials: generateSocials('Member5')
  }
]
