import React from 'react'
import { SafeAreaView } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import {SIZES, COLORS, FONTS} from "../constants/themes";

const HeaderBar = () => {
    return (
    <SafeAreaView
        style={{
            height: 150,
            width: "100%",
            backgroundColor: COLORS.darkGreen,
            flexDirection: 'row'
        }}
    
    >
        {/* Greeings */}
        <View
            style={{
                flex: 1,
                paddingLeft: SIZES.padding
            }}
        >
            <Text style={{color: COLORS.white, ...FONTS.h2}}>Robert,</Text>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>Welcome Back!</Text>

        </View>
    </SafeAreaView>
    );
}

export default HeaderBar;