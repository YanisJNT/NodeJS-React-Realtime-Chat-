
//import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-pretty"
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import "./chats.css"
const ChatsPage = (props) => {
 
    return (
        <div className='tchat'>
            <PrettyChatWindow
            projectId="33d493c0-3e50-40fc-8284-735a9aca8276"
            username={props.user.username}
            secret= {props.user.secret}
            />
        </div>
    );
}

export default ChatsPage
