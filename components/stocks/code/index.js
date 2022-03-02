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
import Ionicon from 'react-native-vector-icons/Ionicons';
import Stockcon from '../../stockcon/code';
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
        bottom: 60
    },
    scroll: {
        height: 350,
        padding: 10,
        margin: 10,
        shadowOpacity: 10,
    },
})
const AllStockinfo = () => {
    return (
        <View>
            <Stockcon big="G" name="Google" price="$123,455" nik="GOOGLE" />
            <Stockcon big="A" name="Amazon" price="$234,789" nik="AMZN" />
            <Stockcon big="G" name="Google" price="$123,455" nik="GOOGLE" />
            <Stockcon big="A" name="Amazon" price="$234,789" nik="AMZN" />
            <Stockcon big="G" name="Google" price="$123,455" nik="GOOGLE" />
            <Stockcon big="A" name="Amazon" price="$234,789" nik="AMZN" />
            <Stockcon big="G" name="Google" price="$123,455" nik="GOOGLE" />
            <Stockcon big="A" name="Amazon" price="$234,789" nik="AMZN" />
            <Stockcon big="G" name="Google" price="$123,455" nik="GOOGLE" />
            <Stockcon big="A" name="Amazon" price="$234,789" nik="AMZN" />
        </View>)
}
export default function Stocks() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.modalStockcontent} >
            <Modal
                animationType="slide"
                transparent={true}
                height={400}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.Stockcontent}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicon name='md-caret-down-outline' size={30} style={{ alignSelf: 'center' }}></Ionicon>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color: 'black',
                        paddingLeft: 20
                    }}>My Stocks</Text>
                    <ScrollView style={styles.scroll}>
                        <AllStockinfo />
                    </ScrollView>

                </View>

            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicon name='md-caret-up-outline' size={30} style={{ alignSelf: 'center' }}></Ionicon>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: "500",
                color: 'black',
                paddingLeft: 20
            }}>My Stocks</Text>
            <ScrollView style={styles.scroll}>
                <AllStockinfo />
            </ScrollView>

        </View>
    )
}
