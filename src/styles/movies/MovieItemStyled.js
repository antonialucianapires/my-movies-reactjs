import styled from "styled-components";

export const MovieItemStyled = styled.ul
`
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;


li {
    display: inline-block;
    margin: 10px;
    background-color: #fff;
    padding: 10px;
    width: 200px;

}

.movieLink {
    color: #6959CD;
    font-weight: bold;
}

img {
    width:100%;
}

`