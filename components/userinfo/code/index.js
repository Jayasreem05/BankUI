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
    ImageBackground,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    viewPlacard: {
        display: 'flex',
        alignSelf: 'center',
        height: deviceHeight / 12,
        width: deviceWidth - 30,
        backgroundColor: 'transparent',
        right: 0,
        top: 5,
        borderRadius: 50,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
    },
    name: {
        textAlign: 'center',
        fontWeight: '900'
    },
    dp: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
})
export default function Userinfo() {
    const img = { uri: "https://i.insider.com/5c8f9333dd08613b085885e4?width=600&format=jpeg&auto=webp" };
    return (
        <View style={styles.viewPlacard}>
            <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'space-between' }}>
                <Image source={img} style={styles.dp} />
                <View>
                    <View style={{ padding: 2, left: 40 }}>
                        <Text style={styles.name}>
                            Hi Harry!
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 17 }}>
                            You have <Text style={{ fontWeight: '900' }}>7</Text> Portfolio
                        </Text>
                    </View>
                </View>
                <Ionicons name='md-notifications-outline' size={35} style={{ left: 80, padding: 5 }} />
            </View>

        </View>
    )
} 