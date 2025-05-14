import React from "react";
import { buttonSendActionCreator, messagePostChangeActionCreator, } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(buttonSendActionCreator())
        },
        messagePostChangeActionCreator: (text) => {
            dispatch(messagePostChangeActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;