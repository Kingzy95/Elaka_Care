import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from '../components/Home';
import Appointment from '../components/Appointment';
import Records from '../components/Records';
import Account from '../components/Account';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#fff',
                height: 90,
                ... styles.shadow
            }
        }}>

            <Tab.Screen name={"Home"} component={Home} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/page-daccueil.png')}
                            resizeMode={"containe"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#0084c3' : '#585b5b',
                            }}
                        />
                        <Text style={{color: focused ? '#0084c3' : '#585b5b', fontSize: 12}}>
                            Home</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={"Rendez-vous"} component={Appointment} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/appointment.png')}
                            resizeMode={"containe"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#0084c3' : '#585b5b',
                            }}
                        />
                        <Text style={{color: focused ? '#0084c3' : '#585b5b', fontSize: 12}}>
                            Rendez-vous</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={"Records"} component={Records} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/medical-records.png')}
                            resizeMode={"containe"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#0084c3' : '#585b5b',
                            }}
                        />
                        <Text style={{color: focused ? '#0084c3' : '#585b5b', fontSize: 12}}>
                            Dossiers</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={"Account"} component={Account} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode={"containe"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#0084c3' : '#585b5b',
                            }}
                        />
                        <Text style={{color: focused ? '#0084c3' : '#585b5b', fontSize: 12}}>
                            Compte</Text>
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#d0cfcf",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        borderColor: '#181461',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    }
})

export default Tabs;