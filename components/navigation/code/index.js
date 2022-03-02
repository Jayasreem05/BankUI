import React from "react";
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
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Foundation';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
export default function Navigation() {
    var [isPress, setIsPress] = React.useState(false);
    return (
        <View style={styles.bar}>
            <View style={{ width: 54.5, height: 50, margin: '5%' }}>
                <TouchableOpacity
                    color={(isPress) ? 'green' : 'rgb(239, 239, 240)'}
                    display='flex'
                    alignSelf="center"
                    backgroundColor={'white'}
                    onHideUnderlay={() => setIsPress(false)}
                    onShowUnderlay={() => setIsPress(true)}
                    onPress={() => console.log("HOME")}>
                    <Icon name="md-home" size={30} /></TouchableOpacity>

            </View>
            <View style={{ width: 75, height: 50, margin: '5%' }}>
                <TouchableOpacity color={'rgb(236, 239, 240)'}
                    display={'flex'}
                    alignSelf={"center"}
                    backgroundColor={'white'}
                    onPress={() => console.log("COMPONENTS")}>

                    <FIcon name="graph-pie" size={38} />
                </TouchableOpacity>
            </View>
            <View style={{ width: 54.5, height: 50, margin: '5%' }}>
                <TouchableOpacity color={'rgb(236, 239, 240)'}
                    display='flex'
                    alignSelf="center"
                    backgroundColor={'white'}
                    onPress={() => console.log("EXCHANGE")}
                ><FAIcon name="exchange-alt" size={29} /></TouchableOpacity>
            </View><View style={{ width: 54.5, height: 50, margin: '5%' }}>
                <TouchableOpacity color={'rgb(236, 239, 240)'}
                    display='flex'
                    alignSelf="center"
                    backgroundColor={'white'}
                    onPress={() => console.log("NOTIFICATION")}>
                    <Icon name="md-notifications"
                        size={30} />
                </TouchableOpacity>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    bar: {
        backgroundColor: 'white',
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'flex-end',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingTop: 10,
    },
});
