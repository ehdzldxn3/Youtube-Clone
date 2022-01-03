import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";

function Subcribe(props) {

    const [subscribeNumber, setSubscribeNumber] = useState(0)

    useEffect(() => {

        //구독자수 정보 
        let variable = { userTo: props.userTo }
        axios.post('/api/subcribe/subcribeNumber', variable)
            .then(res => {
                if (res.data.success) {
                    setSubscribeNumber(res.data.subscribeNumber)
                } else {
                    alert('구독자수를 받아오지 못함')
                }
            })


        let subcribeVariable = { userTo: props.userTo, userFrom: localStorage.getItem('userId')}
        console.log(subcribeVariable)
        // axios.post('/api/subcribe/subcribeNumber', variable)
        //     .then(res => {
        //         if (res.data.success) {

        //         }
        //     })


    }, [])

    return (
        <div>
            <button
                style={{
                    backgroundColor:'#CC0000', borderRadius:'4px', color:'white', padding:'10px 16px',
                    fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'    }}
            >
                0 Subcribe
            </button>

        </div>
    )
}

export default Subcribe
