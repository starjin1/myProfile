import React from "react";
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__social">
            <a href="https://github.com/starjin1" target="_blank"><BsGithub /></a>
            {/* target이 있어야먄 페이지 이동 */}
        </div>
    )
}
export default HeaderSocials;