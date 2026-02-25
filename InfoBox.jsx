import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60";

  const HOT_URL =
    "https://images.unsplash.com/photo-1623857587031-f79f53808d7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1661337080640-3e58d8cd3d49?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1628611573833-b13a3c18a0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxyYWluJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
                info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />

          <CardContent>
            <Typography variant="h5">
              {info.city} {
              info.humidity > 80 
              ? <ThunderstormIcon />
              : info.temp > 15 
              ? <SunnyIcon />
              : <AcUnitIcon />
              }
            </Typography>
            
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}°C</p>
              <p>Max: {info.tempMax}°C</p>
              <p>Min: {info.tempMin}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Feels Like: {info.feelsLike}°C</p>
              <p>
                The weather can be describe as <i>{info.weather}</i> and feels
                like {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
