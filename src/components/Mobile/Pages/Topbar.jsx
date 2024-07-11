import "../Styles/Mobile.css"
import logo from "../../../assets/S.png"
import { Download } from "lucide-react"

export const Topbar = () => {
    return<>
        <div className="topbar-main-div">
            <div className="topbar-logo">
                <img src={logo} alt="" />
            </div>

            <div className="mob-resume-download">
                <p>Download Resume <Download
                    width={12}
                    height={12}
                /></p>
            </div>
        </div>
    </>
}