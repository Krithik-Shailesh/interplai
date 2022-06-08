import AsyncStorage from '@react-native-async-storage/async-storage';

class Utils {

    static setToFavourites = async (value) => {
        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites.length > 0 ? favourites : []

        favourites.push(value)
        console.log(favourites)

        try {
            await AsyncStorage.setItem('Favourites', JSON.stringify(favourites))
        } catch (e) {
            console.log(e)
        }

    }

    static getFavourites = async () => {

        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites.length > 0 ? favourites : []

        return favourites

    }

    static removeItemFromFavourites = async (item) => {

        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites.length > 0 ? favourites : []

        var filtered = favourites.filter(function(value){ 
            return value != item;
        });

        await AsyncStorage.setItem('Favourites', JSON.stringify(filtered))

    }
}
export default Utils