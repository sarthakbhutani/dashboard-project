export const rangeMapping = {
  humidity: [
    {
      min: 70,
      max: 100,
      color: "#f64655",
    },
    {
      min: 60,
      max: 70,
      color: "#ffbf06",
    },
    {
      min: 30,
      max: 60,
      color: "#49c788",
    },
    {
      min: 25,
      max: 30,
      color: "#ffbf06",
    },
    {
      min: 0,
      max: 30,
      color: "#f64655",
    },
  ],
  pm25: [
    {
      min: 0.0,
      max: 12.0,
      color: "#00e300",
    },
    {
      min: 12.1,
      max: 35.4,
      color: "#f5e631",
    },
    {
      min: 35.5,
      max: 55.4,
      color: "#ff7e00",
    },
    {
      min: 55.5,
      max: 150.4,
      color: "#ee0b00",
    },
    {
      min: 150.5,
      max: 250.4,
      color: "#91539e",
    },
    {
      min: 250.5,
      max: 400,
      color: "#7a0323",
    },
  ],
  temp: [
    {
      min: 0.0,
      max: 12.0,
      color: "#00e300",
    },
    {
      min: 12.1,
      max: 35.4,
      color: "#f5e631",
    },
    {
      min: 35.5,
      max: 55.4,
      color: "#ff7e00",
    },
    {
      min: 55.5,
      max: 150.4,
      color: "#ee0b00",
    },
    {
      min: 150.5,
      max: 250.4,
      color: "#91539e",
    },
    {
      min: 250.5,
      max: 400,
      color: "#7a0323",
    },
  ],

  pm10: [
    {
      min: 0,
      max: 54,
      color: "#00e300",
    },
    {
      min: 55,
      max: 154,
      color: "#f5e631",
    },
    {
      min: 155,
      max: 254,
      color: "#ff7e00",
    },
    {
      min: 255,
      max: 354,
      color: "#ee0b00",
    },
    {
      min: 355,
      max: 424,
      color: "#91539e",
    },
    {
      min: 425,
      max: 500,
      color: "#7a0323",
    },
  ],
  co2: [
    {
      min: 400,
      max: 699,
      color: "#00e300",
    },
    {
      min: 700,
      max: 1099,
      color: "#f5e631",
    },
    {
      min: 1100,
      max: 1599,
      color: "#ff7e00",
    },
    {
      min: 1600,
      max: 2099,
      color: "#ee0b00",
    },
    {
      min: 2100,
      max: 2500,
      color: "#7a0323",
    },
  ],
  tvoc: [
    {
      min: 0.0,
      max: 0.4,
      color: "#00e300",
    },
    // {
    //   min: 12.1,
    //   max: 35.4,
    //   color: "#f5e631",
    // },
    // {
    //   min: 35.5,
    //   max: 55.4,
    //   color: "#ff7e00",
    // },
    // {
    //   min: 55.5,
    //   max: 150.4,
    //   color: "#ee0b00",
    // },
    // {
    //   min: 150.5,
    //   max: 250.4,
    //   color: "#91539e",
    // },
    {
      min: 0.6,
      max: 1,
      color: "#7a0323",
    },
  ],
  hcho: [
    {
      min: 0.0,
      max: 0.1,
      color: "#00e300",
    },
    // {
    //   min: 12.1,
    //   max: 35.4,
    //   color: "#f5e631",
    // },
    // {
    //   min: 35.5,
    //   max: 55.4,
    //   color: "#ff7e00",
    // },
    // {
    //   min: 55.5,
    //   max: 150.4,
    //   color: "#ee0b00",
    // },
    // {
    //   min: 150.5,
    //   max: 250.4,
    //   color: "#91539e",
    // },
    {
      min: 0.1,
      max: 1,
      color: "#7a0323",
    },
  ],
};

export const parameterType = {
  humidity: { type: "percentage", limit: 100 },
  temp: { type: "number", limit: 100 },
  pm25: { type: "number", limit: 500 },
  pm10: { type: "number", limit: 500 },
  co2: { type: "number", limit: 2500 - 400 + 400 },
  tvoc: { type: "number", limit: 0.1 },
  hcho: { type: "number", limit: 0.1 },
};

export const DIFFERENT_PARAMETERS = {
  col1: [
    {
      name: "Humidity",
      key: "humidity",
      unit: "%",
    },
    {
      name: "Temp",
      key: "temp",
      unit: "°C",
    },
  ],
  col2: [
    {
      name: "PM 2.5",
      key: "pm25",
      unit: "µg/m3",
    },
    {
      name: "PM 10",
      key: "pm10",
      unit: "µg/m3",
    },
    {
      name: "Co2",
      key: "co2",
      unit: "ppm",
    },
  ],
  col3: [
    {
      name: "TVOC",
      key: "tvoc",
      unit: "ppb",
    },
    {
      name: "HCHO",
      key: "hcho",
      unit: "mg/m3",
    },
  ],
};
