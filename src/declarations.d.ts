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

// These packages do not have @types
declare module 'rebass'
declare module 'gray-percentage'
declare module 'compass-vertical-rhythm'
declare module 'typography-theme-de-young'
declare module 'styled-breakpoints'
declare module 'react-sizes'
declare module 'react-responsive-tabs'
declare module 'react-reveal/Fade'
declare module 'pure-react-carousel'

// Image Type Declarations
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.ttf'
declare module '*.eot'
declare module '*.woff'
declare module '*.woff2'
declare module '*.otf'
declare module '*.json'
