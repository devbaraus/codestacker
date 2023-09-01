export type Cover = {
  href: string
  alternative: string
  caption: string
}

export type Social = {
  label: string
  href: string
  type: string
}

export type Project = {
  id: number
  title: string
  tag: 'website' | 'iot' | 'aplicativos' | 'software'
  releasedAt: string
  cover: Cover
}

export type Member = {
  id: number
  name: string
  cover: Cover
  role: string
  socials: Social[]
}
