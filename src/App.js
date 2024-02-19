import logo from "./logo.svg";
import "./App.css";
import { Grid, Box, Stack, Typography } from "@mui/material";

function App() {
  const CircleComponenet = ({ data }) => {
    const { color, name } = data;
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ textAlign: "center", pt: 2 }}>
          <Typography
            sx={{ color: "#4582f8", fontSize: "1.5rem", fontWeight: 600 }}
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
              border: `10px solid ${color}`,
              display: "flex",
            }}
          >
            <Typography
              sx={{
                m: "auto",
                color: color,
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              54 %
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={5.5}>
        <Grid container>
          <Grid item xs={12}>
            logo
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
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet
                  data={{ color: "#a5c539", name: "Humanity" }}
                />
                <CircleComponenet data={{ color: "#016e44", name: "Temp" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet data={{ color: "#feb627", name: "PM 2.5" }} />
                <CircleComponenet data={{ color: "#dc2d3c", name: "PM 10" }} />
                <CircleComponenet data={{ color: "#fc9728", name: "Co2" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet data={{ color: "#fc9728", name: "TVOC" }} />
                <CircleComponenet data={{ color: "#016e44", name: "HCHO" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sx={{ border: "1px solid black" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  ml: "40px",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                AQI
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5.5}>
        <Grid container>
          <Grid item xs={12}>
            logo
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
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet
                  data={{ color: "#a5c539", name: "Humanity" }}
                />
                <CircleComponenet data={{ color: "#016e44", name: "Temp" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet data={{ color: "#feb627", name: "PM 2.5" }} />
                <CircleComponenet data={{ color: "#dc2d3c", name: "PM 10" }} />
                <CircleComponenet data={{ color: "#fc9728", name: "Co2" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: "auto" }}>
                <CircleComponenet data={{ color: "#fc9728", name: "TVOC" }} />
                <CircleComponenet data={{ color: "#016e44", name: "HCHO" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
