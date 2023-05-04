import { Header } from './componentes/header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/sidebar';

export function App() {
 

  return (
    <>
    
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
           <Post
            author="Diego Fernandes"
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, deserunt repellat eaque dolorem molestias hic in odit reiciendis est nulla tenetur consectetur expedita corporis facilis facere illo eius fugiat explicabo?"
            />
            <Post
            author="Joao Aquino"
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, deserunt repellat eaque "
            /></main>
      </div>
    
    </>
  )
}


