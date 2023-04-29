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
    const [geoPoints, setGP] = useState([]) 
    const [geoPointsArray, setGPArray] = useState([]) 
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
                const response = await axios.post('http://localhost:3500/raw-material/get-raw-material', {
                    'rawMaterialAddress': medInfo.rawMaterialAddress
                });

                // console.log(response.data)
                setMaterialInfo(response.data?.material)
            } catch (e) {
                console.log(e);
            }
        }
        RawMaterialInfo();
        // console.log(materialInfo?.fromAddresses.length)       
        // console.log(medInfo?.fromAddresses.length)       

    },[medInfo])
    //checkstr to debug which function is causinng error
    const appenderArray = ( innerArray1, innerArray2, setStateFunc, checkstr) => {
        // console.log(innerArray1)
        // console.log(checkstr)
        let infoArray = innerArray1.concat(innerArray2);
        setStateFunc(infoArray)
        // console.log(infoArray)
    }
    const appenderArrayOfObj = ( innerArray1, innerArray2, setStateFunc, checkstr) => {
        console.log(innerArray1.length)
        console.log(innerArray2.length)
        console.log(checkstr)
        // let infoArray = []
        let infoArray = innerArray1.concat(innerArray2);
        // console.log(innerArray1.length, innerArray2.length)
        // infoArray = infoArray.concat(innerArray1);
        // infoArray.push.apply(infoArray, innerArray2);
        setStateFunc(infoArray)
        console.log(infoArray)
    }
    useEffect(()=>{
        // console.log(materialInfo)
        if(materialInfo != null && Object.keys(materialInfo)?.length > 0){
            console.log(materialInfo)
            // console.log(medInfo)
            appenderArray( materialInfo.fromAddresses, medInfo.fromAddresses, setFA, 'fa');
            appenderArrayOfObj( materialInfo.geoPoints, medInfo.geoPoints, setGP, 'gp');
            appenderArray( materialInfo.hash, medInfo.hash, setH, 'h');
            appenderArray( materialInfo.previousHash, medInfo.previousHash, setPH, 'ph');
            appenderArray( materialInfo.timestamps, medInfo.timestamps, setT, 't');
            appenderArray( materialInfo.toAddresses, medInfo.toAddresses, setTA, 'ta');
        }
    },[materialInfo])
    useEffect(()=>{
        let array = []
        geoPoints.map((item)=>{
            array.push(item._id)
        })
        console.log(geoPoints)
        console.log(array)
        setGPArray(array)
    },[geoPoints])
    useEffect(()=>{
        setIsLoading(false)
    },[geoPointsArray])
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
        {medInfo.rawMaterialAddress}
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
        <b>geoPoints</b>        
        {geoPointsArray?.map((item)=>{
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