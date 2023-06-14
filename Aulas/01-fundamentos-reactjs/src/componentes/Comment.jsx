import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles  from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment({ content }){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/103462000?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria do Carmo</strong>
                            <time title='04 de Maio às 08:54 ' dateTime="2022-04-05 08:54:30">Cerca de uma hora atrás.</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}