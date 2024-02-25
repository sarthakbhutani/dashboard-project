import { useEffect, useState } from "react";
import dflLogo from "./assets/dlfLogo.png";
import vrLogo from "./assets/vayuGuardLogo.jpeg";
import "./App.css";
import { Grid, Box, Stack, Typography } from "@mui/material";
import {
  rangeMapping,
  parameterType,
  DIFFERENT_PARAMETERS,
  AQI_MAPPING,
} from "./utils";

function App() {
  const [values, setValues] = useState(0);

  function generateRandomValue(limit) {
    let randomValue = Math.random() * limit;
    randomValue = randomValue.toFixed(1);
    return randomValue;
  }

  const getRandomValue = (parameter) => {
    if (parameter) {
      const { type = "", limit = "" } = parameterType?.[parameter];
      switch (type) {
        case "percentage":
        case "number":
          const value = generateRandomValue(limit);
          const matchedParameter = rangeMapping[parameter]?.find(
            (item) => value >= item.min && value <= item.max
          );

          const color = matchedParameter?.color
            ? matchedParameter?.color
            : "#90be6d";

          return { color, value };

        default:
          return { color: "", value: "" };
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const CircleComponenet = ({ data }) => {
    const { name, key, unit } = data;
    const { color, value } = getRandomValue(key);
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ textAlign: "center", pt: 2 }}>
          <Typography
            sx={{
              color: "#4582f8",
              fontSize: "1.5rem",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "10vw",
              height: "10vw",
              borderRadius: "50%",
              border: `15px solid ${color}`,
              display: "flex",
              boxShadow:
                " 2px 2px 2px rgba(0, 0, 0, 0.1),4px 4px 4px rgba(0, 0, 0, 0.2), 6px 6px 6px #cbd0d5;",
            }}
          >
            <Box
              sx={{
                m: "auto",
                color: color,
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                {value}
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "center" }}
              >
                {unit}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={5.5}>
        <Grid container>
          <Grid item xs={12} sx={{ px: 1, display: "flex" }}>
            <Box sx={{ mr: "auto" }}>
              <img width={100} src={dflLogo} alt="logo"></img>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: "2.5rem", fontWeight: 700, color: "#000" }}
              >
                Indoor Air Quality
              </Typography>
            </Box>
          </Grid>
          {Object.values(DIFFERENT_PARAMETERS).map((col) => (
            <Grid item xs={4} key={col}>
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", m: "auto" }}
                >
                  {col.map((parameter) => (
                    <CircleComponenet
                      data={{
                        name: parameter.name,
                        key: parameter.key,
                        unit: parameter.unit,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1} sx={{ height: "100%" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box sx={{ display: "flex", height: "7%" }}>
              <Typography
                sx={{
                  ml: "40px",
                  textAlign: "center",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  color: "#000",
                  m: "auto",
                }}
              >
                AQI
              </Typography>
            </Box>
            {AQI_MAPPING.map((item) => (
              <Box
                sx={{
                  border: "1px solid white",
                  height: "15%",
                  textAlign: "center",
                  display: "flex",
                  borderRadius: "5px",
                  backgroundColor: item.color,
                }}
              >
                <Typography
                  sx={{
                    m: "auto",
                    fontSize: "16px",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5.5}>
        <Grid container>
          <Grid item xs={12} sx={{ p: 2, display: "flex" }}>
            <Box sx={{ ml: "auto" }}>
              <img width={80} src={vrLogo} alt="logo"></img>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: "2.5rem", fontWeight: 700, color: "#000" }}
              >
                Air condition
              </Typography>
            </Box>
          </Grid>
          {Object.values(DIFFERENT_PARAMETERS).map((col) => (
            <Grid item xs={4}>
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", m: "auto" }}
                >
                  {col.map((parameter) => (
                    <CircleComponenet
                      data={{
                        name: parameter.name,
                        key: parameter.key,
                        unit: parameter.unit,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
