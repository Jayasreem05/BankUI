import { LinearGradient } from 'expo-linear-gradient';
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
    Dimensions, Modal,
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    Stockcontent: {
        backgroundColor: 'rgb(229, 235, 214)',
        borderRadius: 25,
        height: deviceHeight - 75
    },
    modalStockcontent: {
        backgroundColor: 'rgb(229, 235, 214)',
        borderRadius: 25,
    },
    viewCard: {
        display: 'flex',
        alignSelf: 'center',
        height: deviceHeight / 8,
        width: deviceWidth - 40,
        backgroundColor: 'white',
        right: 0,
        top: 5,
        borderRadius: 23,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 5,
        paddingBottom: 10,
        marginBottom: 5

    },
    CardContent: {
        flexDirection: "row",
        flex: 1,
        padding: 18,
    },
    CardHeading: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
    },
    CardPrice: {
        fontSize: 25,
        fontWeight: "900",
        color: 'black',

    },
    otherWords: {
        fontSize: 13,
        color: 'gray',
        fontWeight: "900",
    },
    marginSpacing: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 2

    },
    CardFooter: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    scroll: {
        height: 350,
        padding: 10,
        margin: 10,
        shadowOpacity: 10,
    },
    Letterbg: {
        backgroundColor: 'rgb(204, 228, 190)',
        padding: 5,
        borderRadius: 15,
        height: 60,
        width: 60,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '900',
        color: 'green'
    },
    Stack: {
        flexDirection: "column",
        flex: 1,
        paddingLeft: 10,
    }
})
const TempStock = (props) => {
    return (<View style={styles.viewCard}>
        <View style={styles.CardContent}>
            <Text style={styles.Letterbg}>{props.big}</Text>
            <View style={styles.Stack}>
                <View style={styles.marginSpacing}>
                    <Text style={styles.CardHeading}>{props.name} </Text>
                    <Text style={styles.CardPrice}>{props.price}</Text>
                </View>
                <View style={styles.CardFooter}>
                    <Text style={styles.otherWords}>{props.nik}</Text>
                    <Text style={styles.otherWords}>{props.nik}</Text>
                </View>
            </View>

        </View>
    </View>
    )
}
export default function Stockcon(props) {
    return (
        <TempStock big={props.big} name={props.name} price={props.price} nik={props.nik} />
    )
}