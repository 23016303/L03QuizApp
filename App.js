import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    username:{
        fontWeight:'bold',
        fontSize:30,
        backgroundColor: 'plum',
        borderRadius:10,
        padding:5,
        borderWidth:2,
        borderColor:'#a078e1',
        textShadowColor:'white',
        textShadowRadius:10
    },
    question:{
        fontWeight:'bold',
        fontSize:30,
        borderRadius:10,
        borderWidth:2,
        paddingHorizontal:20,
        backgroundColor:'teal',
        color:'white',
        textShadowColor:'black',
        textShadowRadius:10
    },
    image:{
        borderRadius:10,
        borderWidth:2,
        borderColor:'goldenrod',
    },
    parent:{
        flex:1,
        padding:5,
    },
    quiz:{
        fontWeight:'bold',
        fontSize:50,
        marginTop:50,
        alignSelf:'center',
    }

})

const MyApp = () => {
    const [answers, setAnswers] = React.useState({ Q1: '', Q2: '', Q3: '' });
    const correctAnswers = { Q1: 'Kingfisher', Q2: 'Rabbit', Q3: 'Owl' };

    const handleAnswerChange = (question, value) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [question]: value }));
    };

    const handleSubmit = () => {
        let score = 0;
        Object.keys(correctAnswers).forEach(question => {
            if (answers[question] === correctAnswers[question]) {
                score += 1;
            }
        });
        const message =
            score >= 2
                ? `You have scored ${score} out of 3! Well Done!`
                : `You have scored ${score} out of 3! Better luck next time!`;
        Alert.alert(message);
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <View style={styles.parent}>
                <Text style={styles.quiz}>Animal Quiz</Text>
                <Text style={styles.username}>  User Name:</Text>
                <TextInput style={{ borderWidth: 1, marginBottom: 20, padding:10}} />

                <Image source={require('./img/kingfisher.jpg')} style={[styles.image,{width: 400, height: 500, marginBottom: 20 }]}/>
                <Text style={styles.question}>Q1) What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={value => handleAnswerChange('Q1', value)}
                    items={[
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Kingfisher', value: 'Kingfisher' },
                        { label: 'Bee', value: 'Bee' },
                    ]}
                />

                <Image source={require('./img/rabbit.jpg')} style={[styles.image,{width: 400, height: 500, marginBottom: 20 }]} />
                <Text style={styles.question}>Q2) What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={value => handleAnswerChange('Q2', value)}
                    items={[
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'Tiger', value: 'Tiger' },
                        { label: 'Elephant', value: 'Elephant' },
                    ]}
                />

                <Image source={require('./img/owl.jpg')} style={[styles.image,{width: 400, height: 500, marginBottom: 20 }]}/>
                <Text style={styles.question}>Q3) What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={value => handleAnswerChange('Q3', value)}
                    items={[
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Turtle', value: 'Turtle' },
                        { label: 'Owl', value: 'Owl' },
                    ]}
                />

                <Button onPress={handleSubmit} title="Submit" />
            </View>
            </ScrollView>
    );
};

export default MyApp;
