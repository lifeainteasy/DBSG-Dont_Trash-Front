import React, { useEffect, useState } from 'react';
import { HeaderFlex, HeaderStyle, HeaderTitle,HeaderItem } from '../styles/Styled';
;
const Header = (e) =>{
    const [scrollDown,setScrollDown] = useState('');

    function srcollDown(e){
        console.log(e);
            
        }
       window.addEventListener("scroll",srcollDown);
        
     
    
    return(
        <>
            <HeaderStyle>
                <HeaderFlex>
                    <HeaderTitle>Leap</HeaderTitle>
                    <HeaderItem>프로젝트 올리기</HeaderItem>
                    <HeaderItem>동아리 등록</HeaderItem>
                    <HeaderItem>동아리 수정</HeaderItem>
                    <HeaderItem>동아리 안내사항</HeaderItem>
                    <HeaderItem>로그인</HeaderItem>
                    <HeaderItem>회원가입</HeaderItem>
                </HeaderFlex>
            </HeaderStyle>
        </>
    )

}

export default Header