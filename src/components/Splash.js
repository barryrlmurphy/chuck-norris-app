import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import axios from 'axios';
import { Button } from './common';

class Splash extends Component {
    state = { chuckJoke: [] };

    componentWillMount() {
        this.getChuckJoke();
    }

    onButtonPress() {
        this.getChuckJoke();
    }

    getChuckJoke() {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => this.setState({ chuckJoke: response.data }))
            .catch(function (error) {
                console.log(error);
              });
    }

    render() {
        const { viewStyles, chuckImageStyle, jokeStyle, buttonContainerStyle, buttonTextStyle } = styles;
        
        return (
            <View style={viewStyles}>
                <Image
                    style={chuckImageStyle}
                    source={require('../assets/img/chuck-pic-1.jpg')}
                />
                <View style={buttonContainerStyle}>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        <Text style={buttonTextStyle}>Hit Me!</Text>
                    </Button>
                </View>
                <Text style={jokeStyle}>"{this.state.chuckJoke.value}"</Text>
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        backgroundColor: '#000000'
    },
    buttonTextStyle: {
        color: '#fff'
    },
    buttonContainerStyle: {
        position: 'absolute',
        top: 350,
        left: 105,
        width: 150
    },
    chuckImageStyle: {
        height: 600,
        flex: 1,
        width: null,
        opacity: 0.5
    },
    jokeStyle: {
        fontFamily: 'Georgia',
        fontSize: 24,
        fontStyle: 'italic',
        width: 340,
        padding: 10,
        position: 'absolute',
        top: 400,
        left: 10,
        color: '#ffffff',
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center'
    }
};

export default Splash;
