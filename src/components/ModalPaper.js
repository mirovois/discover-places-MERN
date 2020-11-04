import React, {useState} from 'react';

import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import Map from './Map'
import {CSSTransition} from 'react-transition-group';

Modal.setAppElement('#root');

const ModalPaper = (props) => {
const [modalIsOpen, setModalIsOpen] = useState(false);

console.log(props.location)
    return (
        <div>
             <Button onClick={() =>setModalIsOpen(true)} size="small" variant="contained">Open</Button>

                <Modal isOpen={modalIsOpen} onRequestClose={() =>setModalIsOpen(false)}>
                    <Map center={props.location} zoom={16}/>
                    <Button onClick={() =>setModalIsOpen(false)} size="small" variant="contained">Close</Button>   
                </Modal>
        </div>
    )
}

export default ModalPaper
