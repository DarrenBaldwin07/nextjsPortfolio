
export interface logoProps {
    src: string
    alt: string
}

export interface project {
    image: string
    heading: string
    text: string
    logos: Array<logoProps>
    link: string
    github: string
}