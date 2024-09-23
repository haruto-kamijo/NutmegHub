"use client"

import { useState } from 'react'
import styles from "@/app/Styles/post.module.css"
import {postAction} from "@/app/simples/postAction";

type ModalProps = {
    buttonLabel: string
}

const PostModal = ({ buttonLabel }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleModal} className={styles.ButtonStyle}>
                {buttonLabel}
            </button>
            {isOpen && (
                <div className={styles.OverlayStyle}>
                    <div className={styles.ModalStyle}>

                        <form action={postAction}>
                            <input type="text" name="name"/>
                            <button type="submit">送信</button>
                        </form>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostModal