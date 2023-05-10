import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post() {
    return (
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/103462000?v=4" alt="" />
                <div className={styles.authorInfo}>
                    <strong>João Marcelo</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title='04 de Maio às 08:54 ' dateTime="2022-04-05 08:54:30">Publicado há uma hora.</time>
        </header>
        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{''}<a href="">jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto</a>{''}
        <a href="#">#nlw</a>{''}
        <a href="#">#rocketseat</a></p>
        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea  placeholder="Deixe um comentário"></textarea>

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
      </article>
    )
}