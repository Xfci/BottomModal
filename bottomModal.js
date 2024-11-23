import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// If you are going to use a different function in the modal, import it like this 'import ReSendVerification from '../scripts/reSendVerification';'

// If you need another prop add here
const BottomModal = ({ description, image, visibleState, functionModal, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleState}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{description}</Text>
                    <TouchableOpacity
                        style={[styles.buttonModal]}
                        onPress={onClose}>
                        <Text style={styles.textStyle}>Ok</Text> // Button text
                    </TouchableOpacity>
                    {
                        functionModal ?
                            <TouchableOpacity
                                style={styles.buttonModal}
                                onPress={[{ onClose }]}> // Add here function name
                                <Text style={styles.textStyle}>Function Button</Text>
                            </TouchableOpacity> : null
                    }
                    <Image source={image} style={styles.banner} />
                </View>
            </View>
        </Modal>
    )
}

export default BottomModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
        height: '50%', // Change this for bigger modal
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#0089ec',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    },
    functionModalClose: {
        backgroundColor: 'tomato',
    },
    modalText: {
        textAlign: 'center',
        padding: 25,
    },
    banner: {
        width: '100%',
        height: '70%', // Chenge image properties
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        bottom: -10,
    },
})
