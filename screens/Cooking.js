  
import { isLoading } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { ActivityIndicator, SafeAreaView} from 'react-native';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import CategoryCard from '../components/CategoryCard';
import { images } from '../constants';
import icons from '../constants/icons';
import { COLORS, FONTS, SIZES } from '../constants/themes';

const SPOONACULAR_API_KEY = "88309f6acd4748d0acb61e99fb78f7a6";

const Cooking = ({ navigation }) => {
    
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    function renderBackButton() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 10
                }}
            >
                {/* Back Button */}
          
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.transparentBlack5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="cover"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
                        
            </View>
        )
    }

    function renderHeaderBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 10
                }}
            >
                {/* Text */}
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    >
                        What's Cooking
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.h3
                        }}
                    >
                        Good Looking
                    </Text>
                </View>

                        
            </View>
        )
    }

    function renderSearchBar() {

        const [input, setInput] = useState("");

        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray2
                    }}
                />

                <TextInput 
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.h3
                    }}
                    placeholderTextColor={COLORS.lightGray2}
                    placeholder="Search Recipes"
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={ async () => {
                        setLoading(true);
                        const SEARCH_AUTO_RECIPE_URL = `https://api.spoonacular.com/recipes/complexSearch?query==${input}&apiKey=${SPOONACULAR_API_KEY}`;
                        const response = await fetch(SEARCH_AUTO_RECIPE_URL);
                        const responseData = await response.json();
                        console.log(responseData);
                        setRecipe(responseData.results);
                        setLoading(false);
                        setInput("");
                    }}
                    value={input}
        
                
                />
            </View>
        );
    }

    return (
        <SafeAreaView>
            {/* Header Bar */}
            {renderBackButton()}
            {renderHeaderBar()}
            {renderSearchBar()}
            {loading? (<ActivityIndicator style={{marginTop: "5%"}} /> 
            ): (
                <FlatList 

                    data = {recipe}
                    keyExtractor = {({ id }, index) => id }
                    renderItem={({ item }) => {
                        return <View>
                
                            <CategoryCard
                                containerStyle={{
                                    marginHorizontal: SIZES.padding
                                }}
                                categoryItem={item.title}
                                categoryImage={item.image}
                                onPress={() => navigation.navigate
                                    ("Recipe", {recipe: item})}
                            />
                
                        </View>

                    }}
                />
            )}
           
        </SafeAreaView>
        
    )
}

export default Cooking;