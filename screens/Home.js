
import React from 'react';
import { ViewBase } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import HeaderBar from "../components/HeaderBar";
import images from '../constants/images';
import { COLORS, FONTS, SIZES } from '../constants/themes';
 

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderBar />

            <View
                style={{
                    flex: 1,
                    marginTop: -25,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: COLORS.white2
                }}
            >
                {/* Selection */}
                <View
                  style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                        <Text style={{color: COLORS.gray, ...FONTS.h2}}>Main</Text>    
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                        <Text style={{color: COLORS.gray, ...FONTS.h2}}>Categories</Text>    
                      </View>
        

                <View style={{flexDirection: 'row', height: "40%", marginTop: SIZES.base}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={{flex:1, marginRight: SIZES.font}}
                            onPress={() => { console.log("pressed")}}
                        >
                            <Image
                                source={images.activities}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 20
                                }}
                            />

                            <View
                                style={{
                                    bottom: '8%',
                                    left: '5%',
                                    position: 'absolute',
                                    right: 0,
                                    backgroundColor: COLORS.darkGreen,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}

                            >
                                <Text style={{color: COLORS.white, ...FONTS.body2, marginLeft: 5}}>Activities</Text>
                            </View>
                                                        
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                
                        <TouchableOpacity
                            style={{flex:1, marginLeft: SIZES.font}}
                            onPress={() => navigation.navigate("Cooking")}
                        >    
                            <Image
                                source={images.cooking}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 20
                                }}
                            />

                            <View
                                style={{
                                    bottom: '8%',
                                    left: '5%',
                                    position: 'absolute',
                                    right: 0,
                                    backgroundColor: COLORS.darkGreen,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}

                            >
                                <Text style={{color: COLORS.white, ...FONTS.body2, marginLeft: 5}}>Cooking</Text>
                            </View>
                                                        
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{flexDirection: 'row', height: "40%"}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={{flex:1, marginRight: SIZES.font, marginTop: SIZES.font}}
                            onPress={() => { console.log("pressed")}}
                        >
                            <Image
                                source={images.skill}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 20,
                                }}
                            />

                            <View
                                style={{
                                    bottom: '8%',
                                    left: '5%',
                                    position: 'absolute',
                                    right: 0,
                                    backgroundColor: COLORS.darkGreen,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}

                            >
                                <Text style={{color: COLORS.white, ...FONTS.body2, marginLeft: 5}}>Skills</Text>
                            </View>
                                                        
                        </TouchableOpacity>
                       
                    </View>

                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={{flex:1 , marginLeft: SIZES.font, marginTop: SIZES.font}}
                            onPress={() => { console.log("pressed")}}
                        >
                            <Image
                                source={images.workout}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 20
                                }}
                            />

                            <View
                                style={{
                                    bottom: '8%',
                                    left: '5%',
                                    position: 'absolute',
                                    right: 0,
                                    backgroundColor: COLORS.darkGreen,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}

                            >
                                <Text style={{color: COLORS.white, ...FONTS.body2, marginLeft: 5}}>Workouts</Text>
                            </View>
                                                        
                        </TouchableOpacity>
                     
                    </View>

                </View>
                </View>
           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Home;