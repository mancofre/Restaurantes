import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import { isUserLogger } from '../../utils/actions';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading'

export default function Account() {
    const [login, setLogin] = useState(null);    
    
    useEffect(() => {
      setLogin(isUserLogger())
    }, [])
   
    if(login == null){
        return <Loading isVisible={true} text={'Cargando..'}/>
    }

    return login ? <UserLogged /> : <UserGuest />
}

const styles = StyleSheet.create({})
