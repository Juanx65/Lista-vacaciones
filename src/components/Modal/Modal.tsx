import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, useIonModal } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

import { closeCircleOutline, closeCircleSharp } from 'ionicons/icons';

import './Modal.css';

interface ModalProps {
    data: any;
    dismiss: () => void;
}


const Modal: React.FC<ModalProps> = ({ dismiss, data }) => {
    return (

        <IonContent>
            <div className="overlay">
                <div className="contenedorModal">
                    <IonItem class="itemModal">
                        <IonLabel>Edición Solicitud</IonLabel>
                        <IonIcon onClick={dismiss} slot="end" md={closeCircleSharp} ios={closeCircleSharp} />
                    </IonItem>
                    {data.map((data: { CODIGO_FICHA: string | number | null | undefined; CODIGO_LICENCIA: string | number | null | undefined; N_LICENCIA: string | number | null | undefined; CREACION: string | number | null | undefined; INICIO: string | number | null | undefined; TERMINO: string | number | null | undefined; N_DIAS: string | number | null | undefined; }) => (
                        <IonItem lines="none">
                            <IonGrid>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> Codigo Ficha </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.CODIGO_FICHA}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> Codigo Licencia </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.CODIGO_LICENCIA}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> N° Licencia </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.N_LICENCIA}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> F. Creacion </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.CREACION}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> F. Inicio </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.INICIO}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> F. Termino </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.TERMINO}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> N° Dias</IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.N_DIAS}></IonInput></IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                    ))}
                    <IonGrid>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol>
                                <IonButton expand="block" onClick={dismiss}> Confirmar </IonButton>
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </div>
        </IonContent >
    );
}
export default Modal;