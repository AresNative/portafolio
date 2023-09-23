import axios from "axios";

const appid = import.meta.env.VITE_APP_CLIMA_APPID;

// Interfaz para los datos principales de temperatura
interface MainData {
  temp: number; // Temperatura en Kelvin
  temp_max: number; // Temperatura máxima en Kelvin
  temp_min: number; // Temperatura mínima en Kelvin
  feels_like: number; // Temperatura percibida en Kelvin
  pressure: number; // Presión atmosférica en hPa
  sea_level: number; // Presión atmosférica sobre el nivel del mar en hPa
  grnd_level: number; // Presión atmosférica a nivel del suelo en hPa
  humidity: number; // Humedad en porcentaje (%)
}

// Interfaz para los datos meteorológicos
interface WeatherData {
  main: string; // Grupo de parámetros meteorológicos (lluvia, nieve, nubes, etc.)
  description: string; // Condiciones climáticas dentro del grupo
  icon: string; // ID del icono del tiempo
}

// Interfaz para los datos del viento
interface WindData {
  speed: number; // Velocidad del viento en metros por segundo
  deg: number; // Dirección del viento en grados
  gust: number; // Ráfagas de viento en metros por segundo
}

export interface ClimateData {
  main: MainData;
  weather: WeatherData;
  wind: WindData;
}

/* La función consultClimate() es una función asincrónica que recupera datos climáticos de la API
  OpenWeatherMap. */
export async function consultClimate() {
  if (!appid) {
    throw new Error("Invalid appid");
  }
  /* El bloque de código que proporcionó realiza una solicitud HTTP GET a la API de OpenWeatherMap para
  recuperar datos climáticos en función de las coordenadas de latitud y longitud. */
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const params = {
    lat: "31.8931585",
    lon: "-116.5721249",
    appid: appid,
  };

  try {
    /* @returns La función `consultClimate` devuelve los datos climáticos en forma de un objeto
      `ClimateData`. */
    const response = await axios.get(url, { params });
    const formatData = response.data;
    const { main, weather, wind }: any = formatData;
    const data: ClimateData = { main, weather, wind };
    return data;
  } catch (error: any) {
    throw new Error("Failed to consult climate: " + error.message);
  }
}
