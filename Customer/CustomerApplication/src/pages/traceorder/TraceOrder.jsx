import React from 'react'
import { Navbar } from '../../components/navbar'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const TraceOrder = () => {
    const { medicineAddress } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [medInfo, setMedInfo] = useState({});
    const [materialInfo, setMaterialInfo] = useState({});
    const [fromAddresses, setFA] = useState([]) 
    const [getPoints, setGP] = useState([]) 
    const [hash, setH] = useState([]) 
    const [previousHash, setPH] = useState([]) 
    const [timestamps, setT] = useState([]) 
    const [toAddresses, setTA] = useState([]) 

    useEffect(()=>{
        const getMedicineInfo = async() => {
            try {
                // console.log(medicineAddress)
                const response = await axios.post('http://localhost:3500/meds/get-med-info', {
                    'medicineAddress': medicineAddress
            });
                // console.log(response.data)
                setMedInfo(response.data)
            } catch (e) {
                console.log(e);
            }
        }
        getMedicineInfo();
    },[])
    
    useEffect(()=>{
        const RawMaterialInfo = async() => {
            try {
                console.log()
                const response = await axios.post('http://localhost:3500/raw-material/get-raw-material', {
                    'rawMaterialAddress': medInfo.rawMaterialAddress
            });
                // console.log(response.data)
                setMaterialInfo(response.data)
            } catch (e) {
                console.log(e);
            }
        }
        RawMaterialInfo();
        // setFA(medInfo?.fromAddresses?.push.apply(materialInfo.fromAddresses, medInfo.fromAddresses))
        // setFA(medInfo.fromAddresses)
        // let FA = []
        // FA = materialInfo.fromAddresses
        // FA.concat(medInfo.fromAddresses)

        // setFA(FA)
        setFA(medInfo.fromAddresses)
        setGP(medInfo.getPoints)
        setH(medInfo.hash)
        setPH(medInfo.previousHash)
        setT(medInfo.timestamps)
        setTA(medInfo.toAddresses)
        // console.log(fromAddresses)
        setIsLoading(false);
    },[medInfo])
  return (
    <div>
        <Navbar />
        {
            isLoading ? (<h3>Loading . . .</h3>)
            :
            (
                <>
                <div>TraceOrder</div>
        {medInfo.medicineAddress}
        <br />
        {medInfo.description}
        <br />
        {medInfo.timeAdded}
        <br />
        {medInfo.price}
        <br />
        <b>fromAddresses</b>
        {/* {fromAddresses} */}
        {fromAddresses?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <b>getPoints</b>        
        {getPoints?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <b>hash</b>            
        {hash?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <b>previousHash</b>            
        {previousHash?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <b>timestamps</b>   
        {timestamps?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <b>toAddresses</b>           
        {toAddresses?.map((item)=>{
            return (
            <div>
            <p>{item}</p>
            {/* <br /> */}
            </div>
            )
        })}
        <br />
    </>
    )
} 
    </div>    
  )
}

export default TraceOrder