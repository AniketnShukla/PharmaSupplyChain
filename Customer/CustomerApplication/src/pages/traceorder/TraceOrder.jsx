import React from 'react'
import { Navbar } from '../../components/navbar'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const TraceOrder = () => {
    const { medicineAddress } = useParams();
    const [medInfo, setMedInfo] = useState({});
    let fromAddresses = []
    let getPoints = []
    let hash = []
    let previousHash = []
    let timestamps = []
    let toAddresses = []

    useEffect(()=>{
        const getMedicineInfo = async() => {
            try {
                console.log(medicineAddress)
                const response = await axios.post('http://localhost:3500/meds/get-med-info', {
                    'medicineAddress': medicineAddress
            });
                console.log(response.data)
                setMedInfo(response.data)
            } catch (e) {
                console.log(e);
            }
        }
        getMedicineInfo();
    },[])
    useEffect(()=>{
        fromAddresses = medInfo.fromAddresses
        getPoints = medInfo.getPoints
        hash = medInfo.hash
        previousHash = medInfo.previousHash
        timestamps = medInfo.timestamps
        toAddresses = medInfo.toAddresses
    },[medInfo])
  return (
    <div>
        <Navbar />
        <div>TraceOrder</div>
        {medInfo.medicineAddress}
        <br />
        {medInfo.description}
        <br />
        {medInfo.timeAdded}
        <br />
        fromAddresses
        {fromAddresses.map((item)=>{
            return<div>
            <p>{item}</p>
            <br />
            </div>
        })}
        <br />
        {medInfo.price}
        <br />
    </div>    
  )
}

export default TraceOrder