import { Header } from './componentes/header';
import { Post } from './componentes/Post';
import { Sidebar } from './componentes/sidebar';

import styles from './App.module.css';

import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/103462000?v=4',
      name: 'Joao Marcelo',
      role: 'Analista de sistemas.'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
        {type: 'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/103462000?v=4',
      name: 'Pedro Cavalcante',
      role: 'Engenheiro de software e CTO @explorer_core '
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
        {type: 'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-05-07 21:00:00'),
    
  },
];
//author:{avatar_url:"", name: "", role: ""}
//publishedAt: Date
//content: String 

export function App() {
  return (
    <div>
    
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
            
              />
          )
          })} 
        </main>
      </div>
    
    </div>
  )
}


