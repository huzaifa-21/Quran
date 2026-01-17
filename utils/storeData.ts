import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  try {
    await AsyncStorage.setItem("logged_in", "true");
  } catch (e) {
    console.log("error saving data", e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("logged_in");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("error getting data", e);
  }
};

export { getData, storeData };
