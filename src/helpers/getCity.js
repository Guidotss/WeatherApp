export const getCity = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=357f9ef649f6680cb1e23d049e4cd034&units=metric`; 
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error");
    }
}