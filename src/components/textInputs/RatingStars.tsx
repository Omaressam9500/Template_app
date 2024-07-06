import React, {FC, useEffect, useState} from 'react';
import {
    View,
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
    Easing,
    StyleProp,
    ViewStyle,
    Text,
    TextStyle,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Pixel } from '../../constants/styleConstatnts';
import {commonStyles} from '../../constants/styles';

interface IRatingStars {
    rating?: number;
    numstar?: number;
    color?: Colors;
    getRating?: (rating: number) => void;
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    disable?: boolean;
}

const RatingStars: FC<IRatingStars> = (props) => {

    const [rating, setRating] = useState(1);
    const [numstar] = useState(props.numstar ?? 5);
    const [animation] = useState(new Animated.Value(1));
    const starAnimate = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            animation.setValue(1);
        });
    };
    const animationScale = animation.interpolate({
        inputRange: [1, 1.5, 2],
        outputRange: [1, 1.4, 1],
    });
    const animationOpacity = animation.interpolate({
        inputRange: [1, 1.2, 2],
        outputRange: [1, 0.5, 1],
    });
    const animationWobble = animation.interpolate({
        inputRange: [1, 1.25, 1.75, 2],
        outputRange: ['0deg', '-3deg', '3deg', '0deg'],
    });
    const animationStyle = {
        transform: [{scale: animationScale}, {rotate: animationWobble}],
        opacity: animationOpacity,
    };

    useEffect(() => {
        setRating(props.rating)
    }, [props.rating])

    useEffect(() => {
        props.getRating && props.getRating(rating);
    }, [rating]);


    const stars = () => {
        let stars = [];
        for (let x = 1; x <= numstar; x++) {
            stars.push(
                <TouchableWithoutFeedback

                    key={x}
                    onPress={() => {
                        if (!props.disable) {
                            setRating(x);
                            starAnimate();
                        }
                    }}>
                    <Animated.View
                        style={
                            x <= rating
                                ? [styles.starContainer, animationStyle]
                                : styles.starContainer
                        }>
                        <FontAwesome5
                            name="star"
                            solid
                            size={Pixel(25)}
                            color={x <= rating ? Colors.gold : '#F0F0F0'}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>,
            );
        }
        return stars;
    }

    return (
        <View style={[styles.container, props.style]}>
            {!!props.title && (
                <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
            )}
            <View style={commonStyles.rowBox}>{stars()}</View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: Pixel(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    starContainer: {
        marginHorizontal: 2,
    },
    title: {
        fontFamily: Fonts.medium,
        fontSize: Pixel(27),
        marginBottom: Pixel(15),
        alignSelf: 'center',
    },
});
export default RatingStars;
