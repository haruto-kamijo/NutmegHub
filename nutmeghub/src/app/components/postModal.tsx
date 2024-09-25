"use client"

import { useState } from 'react'
import styles from "@/app/Styles/post.module.css"
import {postAction} from "@/app/simples/postAction";
import {posted} from "@/app/services/postPosted";


type ModalProps = {
    buttonLabel: string
}

const PostModal = ({buttonLabel}: ModalProps) => {
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
                        <form action={posted}>
                            <input type="text" name="userId" value="id"/>
                            <input type="text" name="position" value="48,137"/>
                            <input type="text" name="imageUrl" value="/image"/>
                            <input type="text" name="description" value="description"/>
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