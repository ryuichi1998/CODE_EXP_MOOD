import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants';

const CategoryCard = ({ containerStyle, categoryItem, categoryImage, onPress }) => 
{
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray,
                ...containerStyle
            }}
            onPress={onPress}
        >   
            {/* Image */}
            <Image 
                source={{uri: categoryImage}}
                resizeMode= "cover"
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Title */}
            <View
                style={{
                    width: "65%",
                    paddingHorizontal: 20
                }}
            >
                 <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                 >
                    {categoryItem}
                </Text>

            </View>
           
            
        </TouchableOpacity>
    )

}

export default CategoryCard;