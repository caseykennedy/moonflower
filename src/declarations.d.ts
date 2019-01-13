// package.json
declare module '*/package.json' {
  export const version: string
  export const author: string
}

declare const graphql: (query: TemplateStringsArray) => void

declare module 'disqus-react' {
  export class DiscussionEmbed extends React.Component<{
    shortname: string,
    config: {
      url?: string,
      identifier?: string,
      title?: string,
    },
  }, {}> { }
}

//
declare module 'rebass'
declare module 'gray-percentage'
declare module 'compass-vertical-rhythm'
declare module 'typography-theme-de-young'


declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.ttf'
