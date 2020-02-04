import React from "react";
import { Global } from "@emotion/core";
import GameProvider from "../contexts/GameContext";
import ClickButton from "./ClickButton";
import InfoPanel from "./InfoPanel";
import ItemShop from "./ItemShop";
import { globalCss } from "./global.styles";
import { appCss } from "./app.styles";

const App = () => (
    <>
        <Global styles={globalCss} />
        <GameProvider>
            <div css={appCss}>
                {/* <div className="title">
                    <h1>Trash Clicker</h1>
                    <h2>A garbage game about garbage</h2>
                </div> */}
                <div
                    id="js-game"
                    className="game display-flex flex-wrap space-between"
                >
                    <div className="clicker border-box width-50">
                        <InfoPanel />
                        <ClickButton />
                    </div>

                    <ItemShop />
                </div>
            </div>
        </GameProvider>
    </>
);

export default App;
