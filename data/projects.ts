
import type { project} from '../types/types'

const projects: Array<project> = [
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'https://vue-crud-neon.vercel.app',
      github: 'https://github.com/DarrenBaldwin07/eBuy'
    },
    {
      image: 'images/youtube.png', 
      heading: 'Youtube Analytics', 
      text: 'Web app that gathers youtube data.', 
      logos: [{src: 'images/Django.svg', alt: 'django'}, {src: 'images/JS.svg', alt: 'javascript'}, {src: 'images/Python.svg', alt: 'python'}],
      link: 'https://youtubeanalytics33.herokuapp.com',
      github: 'https://github.com/DarrenBaldwin07/YoutubeAnalytics'
    },
    {
      image: 'images/staticPage.png', 
      heading: 'Static website', 
      text: 'Fully responsive static webpage.', 
      logos: [{src: 'images/HTML.svg', alt: 'html'}, {src: 'images/CSS.svg', alt: 'css'}, {src: 'images/JS.svg', alt: 'javascript'}],
      link: 'https://devd0.github.io/QuickerAPI/',
      github: 'https://github.com/DarrenBaldwin07/QuickerAPI'
    }
]

export default projects