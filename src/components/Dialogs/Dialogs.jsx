import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 0, name: 'Anna'},
        {id: 1, name: 'Andriana'},
        {id: 2, name: 'Mila'},
        {id: 3, name: 'Valya'},
        {id: 4, name: 'Ira'},
        {id: 5, name: 'Kolya'},
        {id: 6, name: 'Anna'},
    ]
    let messages =[
        {id:0, message:'hi'},
        {id:1, message:'hello'},
        {id:2, message:'how r u'},
        {id:3, message:'fine, u?'},
        {id:4, message:'me 2'},
        {id:5, message:'any plans 4 weekends?'},
        {id:6, message:'i dont think so'},
        {id:7, message:'wanna watch a movie?'},
        {id:8, message:'sure'},
        {id:9, message:'great! c u soon'},
    ]
    let dialogsItems = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesItems = messages.map(text => <Message message={text.message}/>)
  return(
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {dialogsItems}
          </div>
          <div className={s.messages}>
              {messagesItems}
          </div>
      </div>
  )
}
export default Dialogs;