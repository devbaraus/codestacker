import type { Member, Project, Social } from '@/types'

export const siteName = 'Code Stacker'
export const siteTitle = `${siteName} - Empresa Júnior do IFG Câmpus Anápolis`

export const siteURL = 'https://codestacker.baraus.dev'

export const siteCNPJ = '00.000.000/0001-00'
export const siteDescription = `A ${siteName} é uma empresa sem fins lucrativos, visando fomentar o empreendedorismo no Brasil através de projetos de tecnologia da informação de alta qualidade e custo abaixo do mercado. Todo o valor ganho é revertido para a formação profissional dos nossos membros e alunos do Instituto Nacional.`

export const siteKeywords = [
  siteName,
  'programação',
  'empresa junior',
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

export const siteLinksUteis = [
  { url: '/', text: 'Processo seletivo' },
  // { url: 'https://www.ifg.edu.br/anapolis', text: 'IFG Câmpus Anápolis' },
  // {
  //   url: 'https://www.ifg.edu.br/servidor/64-ifg/pro-reitorias/extensao-proex/14422-empresa-junior',
  //   text: 'IFG - Empresa Júnior'
  // }
  { url: '/', text: 'Youtube' },
  // { url: '/', text: 'Instagram' },
  { url: '/', text: 'Blog' }
]

export const siteProjects: Project[] = [
  {
    id: 1,
    cover: {
      href: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Projeto 1 - Code Stacker',
      caption: 'Projeto 1 - Code Stacker'
    },
    title: 'Projeto 1',
    tag: 'website',
    releasedAt: '2021-01-01'
  },
  {
    id: 2,
    cover: {
      href: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Projeto 2 - Code Stacker',
      caption: 'Projeto 2 - Code Stacker'
    },
    title: 'Projeto 2',
    tag: 'iot',
    releasedAt: '2021-01-01'
  },
  {
    id: 3,
    cover: {
      href: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Projeto 3 - Code Stacker',
      caption: 'Projeto 3 - Code Stacker'
    },
    title: 'Projeto 3',
    tag: 'iot',
    releasedAt: '2021-01-01'
  },
  {
    id: 4,
    cover: {
      href: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Projeto 4 - Code Stacker',
      caption: 'Projeto 4 - Code Stacker'
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

export const siteContact = {
  email: 'contato@codestacker.com',
  phone: '+55 (62) 9 9999-9999',
  address: 'Rua 1, 1 - Bairro, Cidade - Estado',
  socials: [
    {
      label: `Twitter`,
      href: `/#`,
      type: 'twitter'
    },
    {
      label: `LinkedIn`,
      href: `/#`,
      type: 'linkedin'
    },
    {
      label: `Facebook`,
      href: `/#`,
      type: 'facebook'
    }
  ]
}

// Create 5 mock members with custom social media data
export const siteMembers: Member[] = [
  {
    id: 1,
    name: 'Membro 1',
    cover: {
      href: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Membro 1 - Presidente',
      caption: 'Membro 1 - Presidente'
    },
    role: 'presidente',
    socials: generateSocials('Member1')
  },
  {
    id: 2,
    name: 'Membro 2',
    cover: {
      href: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Membro 2 - Diretor de Projetos',
      caption: 'Membro 2 - Diretor de Projetos'
    },
    role: 'projetos',
    socials: generateSocials('Member2')
  },
  {
    id: 3,
    name: 'Membro 3',
    cover: {
      href: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Membro 3 - Diretor de Marketing',
      caption: 'Membro 3 - Diretor de Marketing'
    },
    role: 'marketing',
    socials: generateSocials('Member3')
  },
  {
    id: 4,
    name: 'Membro 4',
    cover: {
      href: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Membro 4 - Diretor Financeiro',
      caption: 'Membro 4 - Diretor Financeiro'
    },
    role: 'financeiro',
    socials: generateSocials('Member4')
  },
  {
    id: 5,
    name: 'Membro 5',
    cover: {
      href: 'https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-4.0.3&q=85&fm=webp&crop=entropy&cs=srgb&w=640',
      alternative: 'Membro 5 - Secretário',
      caption: 'Membro 5 - Secretário'
    },
    role: 'secretário',
    socials: generateSocials('Member5')
  }
]
