import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";
import {faTwitter,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="text-center xl:h-full">
            <div>
                <div>
                    <h1>
                        Social Media
                    </h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                &copy; 2023 Infinity Tech. 
            </p>
        </footer>
    );
}