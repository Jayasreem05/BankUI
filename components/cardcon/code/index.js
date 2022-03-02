import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Platform,
    Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewCard: {
        display: 'flex',
        alignSelf: 'center',
        height: deviceHeight / 4.5,
        width: deviceWidth - 40,
        backgroundColor: 'white',
        right: 0,
        top: 1,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 6

    },
    CardContent: {
        flexDirection: "column",
        flex: 1,
        padding: 20,
    },
    CardHeading: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
        paddingLeft: 20,
        paddingTop: 10
    },
    CardPrice: {
        fontSize: 27,
        fontWeight: "900",
        color: 'black',

    },
    otherWord: {
        fontSize: 14,
        color: 'gray',
        fontWeight: "900",
        paddingLeft: 80,
        paddingTop: 15
    },
    otherWords: {
        fontSize: 14,
        color: 'gray',
        fontWeight: "900",
    },
    marginSpacing: {
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
        paddingBottom: 7

    },
    CardFooter: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    tCardFooter: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 15,
    },
    scroll: {
        height: 300,
        padding: 5,
        paddingBottom: 10,
        margin: 5,
        shadowOpacity: 10,


    }
})
const TempCard = (props) => {
    return (<View style={styles.viewCard}>
        <View style={styles.CardContent}>
            <View style={styles.marginSpacing}>
                <MaterialIcons name='flight' size={45} color={'green'} style={{ backgroundColor: 'rgb(204, 228, 190)', padding: 5, borderRadius: 15 }} ></MaterialIcons>
                <Text style={styles.CardHeading}>{props.Title}</Text>
                <Text style={styles.otherWord}>{props.nProd} Product</Text>
            </View>
            <View style={styles.CardFooter}>
                <Text style={styles.otherWords}>My Portfolio</Text>
                <Text style={styles.otherWords}>Profit</Text>
            </View>
            <View style={styles.CardFooter}>
                <View style={styles.marginSpacing}>
                    <Text style={styles.CardPrice}>{props.price}</Text>
                </View>
                <View style={styles.tCardFooter}>
                    <AntDesign name='caretup' size={18} color='green' style={{ paddingTop: 7 }} ></AntDesign>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: 'black', paddingLeft: 10, paddingTop: 0 }}>{props.rate}</Text>
                </View>
            </View>
        </View>
    </View>
    )
}
export default function Cardcon(props) {
    return (
        <TempCard Title={props.Title} nProd={props.nProd} price={props.price} rate={props.rate} />
    )
}