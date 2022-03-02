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
    ImageBackground
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    viewCard: {
        display: 'flex',
        alignSelf: 'center',
        height: deviceHeight / 5,
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
    viewPlacard: {
        display: 'flex',
        alignSelf: 'center',
        height: deviceHeight / 12,
        width: deviceWidth - 80,
        backgroundColor: 'white',
        right: 0,
        top: 5,
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 5,
        padding: 10,
        alignSelf: 'center'

    },
    CardPrice: {
        fontSize: 32,
        fontWeight: "900",
        color: 'white',
    },
    marginSpacing: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        paddingBottom: 2

    },
    otherWords: {
        fontSize: 13,
        color: 'white',
        fontWeight: "500",
        paddingLeft: 12,
        bottom: 5
    },
    CardContent: {
        flexDirection: "row",
        flex: 1,
        padding: 40,
    },
    tPlacardFooter: {
        flexDirection: 'row',
        paddingTop: 5,
    },
    PlacardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
})
export default function HeadCard() {
    const image = { uri: "https://media.istockphoto.com/photos/green-defocused-blurred-motion-abstract-background-picture-id1131458945?b=1&k=20&m=1131458945&s=170667a&w=0&h=3vOqysgIa_rknUI51r9r-x-KfKIWAcneXcocj7GQERo=" };

    return (
        <View >
            <ImageBackground source={image} resizeMode="cover" borderRadius={25} style={styles.viewCard}>
                <View style={styles.CardContent} >
                    <View style={styles.marginSpacing}>
                        <Text style={styles.otherWords}>My Portfolio</Text>
                        <Text style={styles.CardPrice}> $349, 706</Text>
                    </View>
                </View>
            </ImageBackground >
            <View style={{ position: 'absolute', top: (deviceHeight / 5) - 50, left: 33 }}>
                <View style={styles.viewPlacard}>
                    <View style={styles.PlacardFooter}>
                        <Text style={{
                            fontSize: 17,
                            color: 'gray',
                            fontWeight: "500",
                            padding: 8,
                            left: 10,
                            bottom: 3
                        }}>Profit</Text>
                        <View style={styles.tPlacardFooter}>
                            <Text style={{ fontSize: 17, color: 'green', fontWeight: '600', paddingLeft: 10, paddingRight: 10 }}>$11,289.88</Text>
                            <AntDesign name='caretup' size={13} color='green' style={{ paddingTop: 5 }} ></AntDesign>
                            <Text style={{ fontSize: 13, fontWeight: '600', color: 'black', paddingLeft: 6, paddingTop: 0 }}>1.5%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >

    )
}