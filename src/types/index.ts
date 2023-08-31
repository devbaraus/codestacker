export type Project = {
  id: number
  title: string
  tag: 'website' | 'iot' | 'aplicativos' | 'software'
  releasedAt: string
  cover: {
    href: string
    alternative: string
    caption: string
  }
}
