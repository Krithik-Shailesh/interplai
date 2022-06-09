import AsyncStorage from '@react-native-async-storage/async-storage';

class Utils {

    static setToFavourites = async (value) => {
        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites && favourites.length > 0 ? favourites : []

        favourites.push(value)

        await AsyncStorage.setItem('Favourites', JSON.stringify(favourites))
    }

    static getFavourites = async () => {

        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites && favourites.length > 0 ? favourites : []

        return favourites

    }

    static removeItemFromFavourites = async (item) => {

        let favourites = await AsyncStorage.getItem('Favourites')
        favourites = JSON.parse(favourites)
        favourites = favourites && favourites.length > 0 ? favourites : []

        var filtered = favourites.filter(data => data != item)

        await AsyncStorage.setItem('Favourites', JSON.stringify(filtered))

    }
}
export default Utils