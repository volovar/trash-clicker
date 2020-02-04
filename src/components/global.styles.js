import { css } from "@emotion/core";

export const globalCss = css`
    html {
        height: 100%;
    }

    body {
        background: #333;
        color: rgba(255, 255, 255, 0.6);
        font-family: "SF Pro", "Roboto", "Segoe UI", sans-serif;
        font-size: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .root {
        box-sizing: border-box;
        height: 100%;
    }
`;
