import { IonRow, IonCol, IonItem, IonHeader, IonTitle, IonSelect, IonSelectOption, IonIcon, IonLabel, IonList, IonListHeader, IonContent, IonGrid, IonText, IonSearchbar, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonPage, useIonModal } from '@ionic/react';
import React, { Component, useRef, useState } from 'react';

import { pencilOutline } from 'ionicons/icons';
/* POST AND GET */
import axios, { AxiosResponse } from 'axios';

import Modal from './Modal/Modal'

import 'bootstrap/dist/css/bootstrap.min.css'

const vacaciones = [
    {
        "CODIGO_FICHA": "13474990",
        "CODIGO_LICENCIA": 15,
        "N_LICENCIA": "10656275-K",
        "_CREACION": "2022-07-06T00:00:00",
        "CREACION": "06-07-2022",
        "_INICIO": "2022-06-01T00:00:00",
        "INICIO": "01-06-2022",
        "_TERMINO": "2022-06-07T00:00:00",
        "TERMINO": "07-06-2022",
        "N_DIAS": 7
    }
]


interface Props {

}


const Licencias: React.FC<Props> = ({ }) => {
    const [searchText, setSearchText] = useState("");

    const [data, setData] = useState(vacaciones);
    const [filteredData, setFilteredData] = useState(data);

    const [hola, setHola] = useState<any>('')
    //TOKEN
    const TOKEN = "SA29ASJAPhs5Yol3ew2esBqjZclgNZcZdiHQIVjZ2wSH9E2ci2OtF0X/I0P8pJ/OITP58EegTtsYevHNUOAy83og84RYGzmoD358Aq/Gnk//sxsAVt4wGKgANvkqgGN8";

    function getListaVacaciones(dataIn: any) {

        //indica que se trabaja con JSON
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        //RESPUESTA DE  LA API
        return axios.post("https://www.plus-rrhh.cl/plus-rrhh/API_REST_DEMO/api/portal_empleado/GetLicenciasMedicas", dataIn, axiosConfig)
            .then((response: AxiosResponse) => {
                return { data: response.data.data }
            }).catch((error: any) => {
                console.log(error);
            });
    }
    //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    /* getListaVacaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        // console.log(data);       
        //console.log(responseData.data[0].CODIGO_FICHA);  
    }); */
    //SELECCIONAR AÑO PARA FILTRADO
    const handleChangeSelect = (e: React.FormEvent<HTMLIonSelectElement>) => {
        console.log("CHANGED")
    }
    //FILTRAR POR AÑO
    /* const filterData = () => {
        const filtData = data.filter(function (fecha) {
            return fecha.PERIODO_FORMAT.split("-")[1] == "2021";
        });
        setFilteredData(filtData)
    } */
    const [present, dismiss] = useIonModal(Modal, {
        dismiss: () => dismiss(),
        data: vacaciones,
        id: "example-modal",
        trigger: "open-modal",
    });
    const modalOptions = {
        onDidDismiss: () => dismiss(),
    };

    return (
        <IonPage>
            <IonContent>
                <IonInfiniteScroll>
                    <IonInfiniteScrollContent>
                        <IonItem>

                            <IonRow>
                                <IonCol>
                                    {/* <IonButton onClick={filterData}> </IonButton> */}
                                    <IonTitle> Licencias Médicas </IonTitle>
                                </IonCol>
                                <IonCol>
                                    <IonSelect interface="popover" placeholder="Buscar por año" onChange={e => { handleChangeSelect(e) }}>
                                        <IonSelectOption value="apples">2022</IonSelectOption>
                                        <IonSelectOption value="oranges">2021</IonSelectOption>
                                        <IonSelectOption value="bananas">2020</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                            </IonRow>

                        </IonItem>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Inicio</th>
                                    <th scope="col">Termino</th>
                                    <th scope="col">Total Dias</th>
                                    <th scope="col">Procesos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.INICIO}</td>
                                        <td>{value.TERMINO}</td>
                                        <td>{value.N_DIAS}</td>
                                        <td> <IonIcon onClick={() => { present(modalOptions) }}
                                            ios={pencilOutline}
                                            md={pencilOutline}
                                            slot='end'></IonIcon>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                        <IonItem >
                            <IonButton expand='block' onClick={() => {
                                getListaVacaciones({ TOKEN: TOKEN }).then((responseData: any) => {
                                    setData(responseData.data);
                                    //console.log(data);       
                                    //console.log(responseData.data[0].CODIGO_FICHA);  
                                })
                            }}>
                                Buscar
                            </IonButton>
                        </IonItem>
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage >
    )
}


export default Licencias;


