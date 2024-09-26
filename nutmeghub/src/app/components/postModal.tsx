"use client"

import {useRef, useState} from 'react'
import styles from "@/app/Styles/post.module.css"
import {posted} from "@/app/services/postPosted";
import {useForm} from "react-hook-form";


type ModalProps = {
    buttonLabel: string
}

const PostModal = ({buttonLabel}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const fileInput = useRef<HTMLInputElement | null>(null);
    const { register } = useForm();
    const [fileName, setFileName] = useState("");
    const [imageData, setImageData] = useState("");
    const deployment = (files: FileList) => {
        const file = files[0];
        const fileReader = new FileReader();
        setFileName(file.name);
        fileReader.onload = () => {
            setImageData(fileReader.result as string);
        };
        fileReader.readAsDataURL(file);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length <= 0) return;
        deployment(files);  // ファイル名とプレビューの表示
    };
    const { ref, ...rest } = register("file", {
        onChange,
        required: "ファイルを選択してください",
    });
    const imgClick=()=>{
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    return (
        <>
            <button onClick={toggleModal} className={styles.ButtonStyle}>
                {buttonLabel}
            </button>
            {isOpen && (
                <div className={styles.OverlayStyle}>
                    <div className={styles.ModalStyle}>
                        <form className={styles.FormStyle} action={posted}>
                            <p style={{display:'none'}}><input type="text" name="userId" value="001"/></p>
                            <p><img className={styles.PointIcon} src="/pointicon.png"/><input className={styles.InputStyle} type="text" name="position"/></p>
                            <p className={styles.InputStyle}>
                                <input
                                    type="file"
                                    ref={(e) => {
                                        ref(e);
                                        fileInput.current = e;
                                    }}
                                    accept="image/*"
                                    style={{display: "none"}}
                                    {...rest}
                                />
                                <button className={styles.ChoiceStyle} type="button" onClick={imgClick}>写真を選択</button>
                                <img className={styles.PreviewStyle} src={imageData}/>
                                <input style={{display: "none"}} name="imageUrl" value={fileName}/>

                            </p>
                            <p><input className={styles.InputStyle} type="textarea" name="description"/></p>
                            <button className={styles.FormSubmit} type="submit">送信</button>
                        </form>
                        <button className={styles.FormClose} onClick={toggleModal}>←</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostModal