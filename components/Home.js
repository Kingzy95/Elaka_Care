import * as React from "react";
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Image,
    Pressable,
    TouchableOpacity, SafeAreaView, ScrollView
} from 'react-native';

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Image  source={require('../assets/logo.png')} style={styles.logo}
                    />

                    <Text style={styles.description}>Réservez une consultation physique ou video chez un professionnel de santé</Text>

                    <View style={styles.inputWrap}>
                        <TextInput style={styles.searchInput} placeholder="Nom, spécialité, établissements,..." />
                        <Pressable style={styles.searchBtn}>
                            <Image
                            style={{height: 20, width:20, tintColor: '#fff'}}
                            source={require('../assets/magnif.png')}
                            />
                        </Pressable>
                    </View>

                    <View style={styles.card}>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.title}>Rendez-vous</Text>
                            <Image style={styles.img} source={require('../assets/calendrier.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.title}>Mon Dossier</Text>
                            <Image style={styles.img} source={require('../assets/dossier.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card2}>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.title}>Forum</Text>
                            <Image style={styles.img} source={require('../assets/forum.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.title}>Mon compte</Text>
                            <Image style={styles.img2} source={require('../assets/personel.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    logo: {
        width: "56%",
        height: 60,
        margin: "auto",
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: "22%",
        marginBottom: 40,
    },

    description: {
        marginTop: 30,
        marginBottom: 25,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#181461",
    },

    searchInput: {
        color: 'black',
        height: 30,
        width: "90%",
        fontWeight: '600'
    },

    searchBtn: {
        backgroundColor: '#0084c3',
        padding: 16,
        position: "absolute",
        right: 0,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },

    inputWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        height: 52,
        width : "100%",
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 20,
        shadowOffset: {
                  width: 5,
                  height: 5
                },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },

    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        shadowOffset: {
            width: 5,
            height: 5
          },
        shadowOpacity:0.1,
        shadowRadius:20,
        paddingTop: 15,
    },

    card2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 100,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity:0.1,
        shadowRadius:20
    },

    item: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#FFF',
        width: "47.5%",
        height: 280,
        borderRadius: 8,
    },

    title: {
        paddingTop: 20,
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181461',
    },

    img: {
        marginTop: 60,
        marginLeft: 25,

    },

    img2: {
        marginTop: 60,
        marginLeft: 40,
    }
})