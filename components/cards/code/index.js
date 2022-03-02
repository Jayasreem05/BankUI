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
import Cardcon from '../../cardcon/code';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scroll: {
        height: 300,
        padding: 5,
        paddingBottom: 10,
        margin: 5,
        shadowOpacity: 10,
    }
})
export default function Cards() {
    return (
        <View style={{ bottom: 10 }}>
            <Text style={{
                fontSize: 17,
                color: 'black',
                fontWeight: "500",
                top: 50,
                padding: 5,
                left: 7,
            }}>List Portfolio</Text>
            <ScrollView horizontal={true} style={styles.scroll}>
                <Cardcon Title="My Travel" nProd="4" price="$123,206" rate="1.5%" />
                <Cardcon Title="New Travel" nProd="5" price="$122,890" rate="1.2%" />
                <Cardcon Title="My Travel" nProd="4" price="$123,206" rate="1.5%" />
                <Cardcon Title="New Travel" nProd="5" price="$122,890" rate="1.2%" />
                <Cardcon Title="My Travel" nProd="4" price="$123,206" rate="1.5%" />
                <Cardcon Title="New Travel" nProd="5" price="$122,890" rate="1.2%" />
                <Cardcon Title="My Travel" nProd="4" price="$123,206" rate="1.5%" />
                <Cardcon Title="New Travel" nProd="5" price="$122,890" rate="1.2%" />
            </ScrollView>

        </View>
    )
}
