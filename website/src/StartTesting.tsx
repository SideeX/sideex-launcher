import type { Component } from 'solid-js';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Fa from 'solid-fa'
import startTestingBird from "./img/startTestingBird.svg"
import chromeExtensionManager from "./img/chromeExtensionManager.png"
import logo from "./img/logo-48.png";
import "./styles/index.scss"

const StartTesting: Component = () => {
    return (
        <div class="startTestingDiv flex-center">
            <img src={startTestingBird}></img>
            <div class="card step1">
                <h5>Step 1.</h5>
                <p>Click on the Extension Manager <img src={chromeExtensionManager}></img> and select SideeX Recorder 3 <img src={logo}></img>. </p>
            </div>
            <div class="card step2">
                <h5>Step 2.</h5>
                <p>
                    Navigate to your targeted website, and start recording. &nbsp;
                    <a class="link-style" href="https://hackmd.io/@sideex/book/%2F%40sideex%2Fquickstart" target="_blank">
                        More Info <Fa icon={faExternalLinkAlt} />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default StartTesting;
