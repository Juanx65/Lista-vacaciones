import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, useIonModal } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

import { closeCircleOutline, closeCircleSharp } from 'ionicons/icons';

import './Modal.css';

interface ModalProps {
    data: any;
    dismiss: () => void;
}


const Modal: React.FC<ModalProps> = ({ dismiss, data }) => {


    return (
        <IonPage>
            <IonItem class="itemModal">
                <IonLabel> <strong>Edición Solicitud</strong></IonLabel>
                <IonIcon onClick={dismiss} slot="end" md={closeCircleSharp} ios={closeCircleSharp} />
            </IonItem>
            {
                data.map((data: { CODIGO_FICHA: string | number | null | undefined; CODIGO_LICENCIA: string | number | null | undefined; N_LICENCIA: string | number | null | undefined; CREACION: string | number | null | undefined; INICIO: string | number | null | undefined; TERMINO: string | number | null | undefined; N_DIAS: string | number | null | undefined; }) => (
                    <IonItem lines="none">
                        <IonGrid className="gridModal">
                            <IonRow>
                                <IonCol><IonLabel class="textModal"> <strong> Codigo Ficha </strong> </IonLabel></IonCol>
                                <IonCol><div className="inputDivModal"><IonLabel class="textModal">{data.CODIGO_FICHA}</IonLabel></div></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonLabel class="textModal"><strong> N° Licencia </strong></IonLabel></IonCol>
                                <IonCol><div className="inputDivModal"><IonInput class="inputModal" value={data.N_LICENCIA}></IonInput></div></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonLabel class="textModal"><strong> F. Inicio </strong></IonLabel></IonCol>
                                <IonCol><div className="inputDivModal"><IonInput class="inputModal" value={data.INICIO}></IonInput></div></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonLabel class="textModal"><strong> F. Termino</strong> </IonLabel></IonCol>
                                <IonCol><div className="inputDivModal"><IonInput class="inputModal" value={data.TERMINO}></IonInput></div></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonLabel class="textModal"><strong> N° Dias</strong></IonLabel></IonCol>
                                <IonCol><div className="inputDivModal"><IonLabel class="textModal">{data.N_DIAS}</IonLabel></div></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                ))
            }
            <IonGrid>   
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonButton expand="block" onClick={dismiss}> Confirmar </IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    );
}
export default Modal;