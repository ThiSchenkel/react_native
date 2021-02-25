import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//  import { SvgUri } from 'react-native-svg';



const List = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`http://restcountries.eu/rest/v2/all`)
            .then((response) => {
                response.json()
                    .then((result) => {
                        setCountry(result)
                    });
            });
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countries</Text>
            <FlatList
                data={country}
                renderItem={({ item }) =>
                    <View style={styles.items}>
                        <Text style={styles.list}>{item.name} - {item.capital}</Text>
                        <Image source={{ uri: item.flag }} style={{ width: 200, height: 100, borderRadius: 10, margin: 20 }} />
                    </View>
                } />
        </View>
    );

}
export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 100,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },

    list: {
        fontWeight: 'normal',
        fontSize: 20,
        color: 'white',
    },

    items: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#199187'
    }
});

{/* <Image source={{ uri: item.flag }} style={{ width: 200, height: 100, borderRadius: 10 }} />  */ }
{/* <SvgUri source={{ uri: item.flag }} style={{ width: 200, height: 100, borderRadius: 10 }} /> */ }