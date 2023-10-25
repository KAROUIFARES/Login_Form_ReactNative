import React, { useState } from 'react';
import { StatusBar, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, Overlay } from 'react-native-elements';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
const Screen = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const handleLoginSignup = () => { setIsOverlayVisible(true); };
    const closeOverlay = () => { setIsOverlayVisible(false); };
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Welcome to the Form</Text>
                <Input
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                    leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
                    placeholderTextColor="white"
                    inputStyle={{ color: 'white' }}
                    inputContainerStyle={styles.inputContainer}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
                    placeholderTextColor="white"
                    inputStyle={{ color: 'white' }}
                    inputContainerStyle={styles.inputContainer}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Login/SignUp"
                    onPress={handleLoginSignup}
                    icon={
                        <Ionicons name="send" size={24} color="white" />
                    }
                />
            </View>
            <StatusBar style="auto" />
            <Overlay
                isVisible={isOverlayVisible}
                overlayStyle={styles.overlay}>
                <TouchableOpacity onPress={closeOverlay}>
                    <View>
                        <Text style={styles.OverlayContent}>Email: {email}</Text>
                        <Text style={styles.OverlayContent}>Password: {password}</Text>
                    </View>
                </TouchableOpacity>
            </Overlay>
        </View>
    );
};
const styles = StyleSheet.create({
    OverlayContent: {
        color: '#2089dc',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: "#2089dc",
        width: 150,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#02cafd',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 180,
        color: 'white'
    },
    view: {
        paddingHorizontal: 20,
        backgroundColor: '#02cafd',
    },
    overlay: {
        backgroundColor: 'white',
        width: 300,
        height: 100,
    },
    inputContainer: {
        borderColor: 'white',
        color: 'white'
    },
});
export default Screen;
