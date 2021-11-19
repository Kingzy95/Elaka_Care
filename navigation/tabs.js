import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from '/components/Home.js';
import Appointment from '/components/Appointment.js';
import Records from '/components/Records';
import Account from '/components/Account.js';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={Home} />
            <Tab.Screen name={"Appointment"} component={Appointment} />
            <Tab.Screen name={"Records"} component={Records} />
            <Tab.Screen name={"Account"} component={Account} />
        </Tab.Navigator>
    );
}

export default Tabs;