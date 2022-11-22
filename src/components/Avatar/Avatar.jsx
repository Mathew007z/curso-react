import "./avatar.css"
import ImgAvatar from "../Avatar/flowe.png"


const Avatar =  ({src,alt}) => {
    return(
        <div className="avatar">
            <img src={ImgAvatar} alt={alt} className="flower"/>
        </div>
    )
}


export default Avatar;