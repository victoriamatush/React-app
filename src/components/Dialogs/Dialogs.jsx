import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state'

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesItems = props.state.messages.map(text => <Message message={text.message}/>)
    let textRef = React.createRef()

    let onChange = () => {
        props.dispatch(updateNewMessageBodyActionCreator(textRef.current.value))
    }
    let onClick = () => {
        debugger;
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>

            <div className={s.messages}>
                <div>{messagesItems}</div>
                <div className={s.enter}>
                    <div>
                        <textarea onChange={onChange} ref={textRef}> </textarea>
                    </div>
                    <div>
                        <button onClick={onClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;