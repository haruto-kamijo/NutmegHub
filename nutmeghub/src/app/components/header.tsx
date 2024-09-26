"use client"
import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import Styles from '@/app/Styles/header.module.css'
const Header = () => {
    // visibleの値を変えることでメニューを表示・非表示させる
    const [visible, setVisible] = useState('visible')
    // 右上のメニューをクリックで実行される
    const toggleHamburger = () => setVisible(visible === 'visible' ? 'hidden' : 'visible')
    // 画面のサイズが1024pxより大きくなるとisDesktopOrLaptopの値がtrueになる
    // isDesktopOrLaptopの値が変わる度にuseEffectは実行される
    return (
        <header className={Styles.backbround}>
            <img src="/hamburger.png" alt="humburger_icon" className={Styles.imgs}/>
            <div>NUTFES HUB</div>
            <img src="/setting.png" alt="setting_icon"  className={Styles.imgs}/>
            {/* <nav> */}
            {/* <div className="block lg:hidden">
                    <button onClick={toggleHamburger}
                            className="flex items-center px-2 py-2 border rounded bg-[#C2F8E711] text-[#C2F8E799] border-[#C2F8E799] hover:text-white hover:border-[#C2F8E7]">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>NUTMEG HUB</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={${visible} w-full block flex-grow lg:flex lg:items-center lg:w-auto}>
                    <div className="text-right lg:flex-grow">
                        <Link href="../"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white text-center hover:text-teal-200 lg:ml-8 mx-6">
                            ログイン
                        </Link>
                        <Link href="../Timeline"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white text-center hover:text-teal-200 lg:ml-8 mx-6">
                            タイムライン
                        </Link>
                        <Link href="../Timeline/Post"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white text-center hover:text-teal-200 mx-6">
                            投稿
                        </Link>
                        <Link href="../Timeline/Shop"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white text-center hover:text-teal-200 mx-6">
                            ショップ
                        </Link>
                        <Link href="../Setting"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white text-center hover:text-teal-200 mx-6">
                            設定
                        </Link>
                    </div>
                </div> */}
            {/* </nav> */}
        </header>
    )
}
export default Header






