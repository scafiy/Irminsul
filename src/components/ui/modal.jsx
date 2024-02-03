"use client"
import modalCSS from '../../css/modal.module.css'
import Button from './button';

export default function Modal(props) {
    return (
        <div className={modalCSS.overlay} onClick={ 
            (e) => { if (e.target === e.currentTarget) props.toggle() }
        }>
            <div className={modalCSS.modal}>
                <div className={modalCSS.header}>
                    <h1>{props.title}</h1>
                </div>

                <div className={modalCSS.body}>
                    <p>{props.children}</p>
                </div>

            </div>
        </div>
    )
}