import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import SwipeableRating from 'react-native-swipeable-rating';

var t = require('tcomb-form-native');

const Form = t.form.Form;

const User = t.struct({
    your_name: t.String,
    your_phone: t.String,
    how_much_did_you_like_our_food: t.String,
    how_was_the_service: t.String,
    any_Suggestions: t.String
});


class App extends Component {
    state = {
        rating: 0
    }

    handleRating = (rating: number) => {
        this.setState({ rating });
    }

    _form: any = {};
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        console.log('rating: ', this.state.rating);

    }

    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref={(c: any) => this._form = c} // assign a ref
                    type={User}
                />
                <Text style={styles.text}>How much you like our food ?</Text>

                <SwipeableRating
                    style={{ marginLeft: 0, marginRight: 0, width: 40, marginBottom: 20, marginTop: 10 }}
                    minRating={1}
                    maxRating={5}
                    rating={this.state.rating}
                    size={32}
                    gap={4}
                    onPress={this.handleRating}
                    xOffset={3}
                />

                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
                {/* <Button 
                    title="Submit"
                    onPress={this.handleSubmit}
                /> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    text: {
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

export default App;