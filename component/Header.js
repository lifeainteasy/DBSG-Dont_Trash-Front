import React, { useEffect, useState,us } from 'react';
import { HeaderFlex, HeaderStyle, HeaderTitle,HeaderItem } from '../styles/Styled';

const Header = (e) =>{
    return(
        <>
            <HeaderStyle>
                <HeaderFlex>
                    <HeaderTitle>Leap</HeaderTitle>
                    <HeaderItem>프로젝트 올리기</HeaderItem>
                    <HeaderItem>동아리 등록</HeaderItem>
                    <HeaderItem>로그인</HeaderItem>
                    <HeaderItem>회원가입</HeaderItem>
                    <HeaderItem>About US!</HeaderItem>
                </HeaderFlex>
            </HeaderStyle>
        </>
    )

}

export default Header