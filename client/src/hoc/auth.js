import React, { useEffect } from 'react';
import { auth } from '../_actions/user_action';
import { useDispatch } from "react-redux";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth())
            .then(res => {
                console.log(res)
            })

        }, [])

        return (
            <SpecificComponent/>
        )
    }
    return AuthenticationCheck
}