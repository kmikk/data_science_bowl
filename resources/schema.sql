DROP TABLE IF EXISTS weather;
DROP TABLE IF EXISTS solar_ogilvie;
DROP TABLE IF EXISTS solar_minneapolis;


CREATE TABLE weather (
    weather_date_time TIMESTAMP,
    weather_description VARCHAR,
    clouds_all INT,
    temp_f FLOAT,
    pressure INT,
    humidity INT,
    wind_speed INT,
    wind_deg INT,
    rain_1h FLOAT,
    snow_1h FLOAT,
    weather_main VARCHAR,
    CONSTRAINT pk_weather PRIMARY KEY (
        weather_date_time
     )
);

CREATE TABLE solar_ogilvie (
    og_date_time TIMESTAMP,
    power_delivered INT,
    energy_delivered INT,
    cumulative_energy INT,
    CONSTRAINT pk_solar_ogilvie PRIMARY KEY (
        og_date_time
     )
);

CREATE TABLE solar_minneapolis (
    mpls_date_time TIMESTAMP,
    power_delivered INT,
    energy_delivered INT,
    cumulative_energy INT,
    CONSTRAINT pk_solar_minneapolis PRIMARY KEY (
        mpls_date_time
     )
);

