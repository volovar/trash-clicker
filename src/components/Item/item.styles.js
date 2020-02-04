import { css } from "@emotion/core";

export const itemCss = css`
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    padding: 8px 12px;
    transition: background 120ms linear;
    user-select: none;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;

export const disabledCss = css`
    background: rgba(0, 0, 0, 0.1);
    color: red;
    cursor: default;
`;
