CREATE DATABASE cetwaapi;
CREATE TABLE children(
    id SERIAL PRIMARY KEY,
    name VARCHAR(70),
    legalSituation TEXT

);

INSERT INTO children( name, legalSituation) VALUES
    ('Dani Vela','Situacion de riesgo'),
    ('Dylan Obrien','Situacion de riesgo');


select *from children;