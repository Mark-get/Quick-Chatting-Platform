import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import React from "react";
import { buttonSendActionCreator, messagePostChangeActionCreator, } from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messsagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageText = state.newMessageText;

    let newSendMessage = React.createRef();

    let buttonSend = () => {
        props.sendMessage()
    }

    let messagePostChange = () => {
        let text = newSendMessage.current.value;
        props.messagePostChangeActionCreator(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messsagesElements}</div>
                <div>
                    <div> <textarea placeholder='Enter your message' onChange={messagePostChange} ref={newSendMessage}
                        value={newMessageText} /></div>
                    <div>
                        <button onClick={buttonSend}>Send</button>
                    </div>
                </div>

            </div>
            {/*<div>*/}
            {/*    <textarea placeholder='Enter your message' onChange={messagePostChange} ref={newSendMessage}*/}
            {/*              value={props.newMessageText}/>*/}
            {/*    <button onClick={buttonSend}>Sen d</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Dialogs;