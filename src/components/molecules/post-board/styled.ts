import Link from "next/link";
import styled from "styled-components";

/** 게시판 컨테이너 */
export const PostContainer = styled.div`
    width: 200px;
    height: 242px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 5px 14px 0px rgba(0 ,0 , 0, 25%);
    margin: 25px;
    border-radius: 5px;
`;


interface ColumnAndRow {
    flexType?: string;
    width?: number;
    margin?: string | number;
    borderTop?: string;
}
/**
==== common styled ====
* @params : flexType="column" | "row": string
* @params : width="width":number 
* @params : margin="auto"
*
* @returns : flexType="column" | "row"
* @returns : width={number}px
* @returns : margin-top="auto" 
*/
export const FlexBox = styled.div<ColumnAndRow>`
    display: flex;
    flex-direction: ${(props) => props.flexType === "column" ? "column" : "row"};
    width: ${(props) => props.width}px;
    margin-top: ${(props) => props.margin};
`;

/** 프로필 이미지 */
export const ProfileImg = styled.img`
    border: 1px solid #000;
`;

/**
*    게시물 제목, 본문
*    @params : background-color="color" : string
*    @returns : hex, rgb, ...  color code
*/
interface PostBoxes {
    backgroundColor?: string;
}
export const PostTitle = styled(Link)<PostBoxes>`
    background-color: ${(props)=>props.backgroundColor};
    text-decoration: none;
    color: #000;
`; 

interface PostFont {
    fontWeight?: string;
    fontSize?:number;
}
/**
 * @param fontWeight="bold"
 * @param fontSize={number}
 * 
 * @returns 폰트 굵기변경
 * @returns 폰트 사이즈
 */
export const FontBox = styled.div<PostFont>`
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize}px;
`

export const SearchContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 5px 14px 0px rgba(0 ,0 , 0, 25%);
    margin: 25px;
    border-radius: 5px;
`

/**검색 form */
export const SearchForm = styled.form`
    text-align: center;
    display: flex;
`
/** 검색입력창*/
export const SearchInput = styled.input`
    width: 530px;
    padding: 5px;
    margin-right: auto;
    border: none;
    background-color: #fff;
    margin-left: 10px;
    margin: 10px;
    outline: none;
`
/** 검색버튼 */
export const SearchButton = styled.button`
    border: none;
    background-color: #fff;
    border-radius: 5px;
    width: 50px;
    cursor: pointer;
    &:hover {
        background-color: #effaff;
    }
`
/** 모달버튼 */
export const DialogButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
`;

/** Thumbnail */
export const ThumbnailImg = styled.div`
    width: 200px;
    height: 130px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #f99;
`