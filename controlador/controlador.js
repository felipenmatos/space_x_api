const dados = require("../data.js");

function message(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "Fullstack Challenge 🏅 - Space X API",
  });
}

function consultData(req, res) {
  if (!dados) {
    res.status(400);
    res.json({ message: "Error querying the database" });
    return;
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200);
  res.json(dados);
}

function consultStatus(req, res) {
  if (!dados) {
    res.status(400);
    res.json({ message: "Error querying the database" });
    return;
  }
  res.header("Access-Control-Allow-Origin", "*");

  const filtroSuccess = dados[0].filter((valorAtual) => {
    return valorAtual.success;
  });

  const filtroFail = dados[0].length - filtroSuccess.length;

  const filtroFalcon = dados[0].filter((valorAtual) => {
    if (valorAtual.name) {
      return valorAtual.name.includes("Falcon");
    }
  });

  const filtroCRS = dados[0].filter((valorAtual) => {
    if (valorAtual.name) {
      return valorAtual.name.includes("CRS");
    }
  });

  const filtroASIA = dados[0].filter((valorAtual) => {
    if (valorAtual.name) {
      return valorAtual.name.includes("Asia");
    }
  });

  const filtroSTAR = dados[0].filter((valorAtual) => {
    if (valorAtual.name) {
      return valorAtual.name.includes("Star");
    }
  });

  const filtroTransporter = dados[0].filter((valorAtual) => {
    if (valorAtual.name) {
      return valorAtual.name.includes("Transp");
    }
  });

  const filtro2010 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2010);
    }
  });

  const filtro2012 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2012);
    }
  });

  const filtro2013 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2013);
    }
  });

  const filtro2014 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2014);
    }
  });

  const filtro2015 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2015);
    }
  });

  const filtro2016 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2016);
    }
  });

  const filtro2017 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2017);
    }
  });

  const filtro2018 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2018);
    }
  });

  const filtro2019 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2019);
    }
  });

  const filtro2020 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2020);
    }
  });

  const filtro2021 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2021);
    }
  });

  const filtro2022 = dados[0].filter((valorAtual) => {
    if (valorAtual.date_local) {
      return valorAtual.date_local.includes(2022);
    }
  });

  res.status(200);
  res.json({
    data: {
      results: {
        success: filtroSuccess.length,
        fail: filtroFail,
      },
      rockets: {
        falcon: {
          name: "Falcon",
          number: filtroFalcon.length,
        },
        crs: {
          name: "CRS",
          number: filtroCRS.length,
        },
        asia: {
          name: "AsiaSat",
          number: filtroASIA.length,
        },
        star: {
          name: "Starlink",
          number: filtroSTAR.length,
        },
        transporter: {
          name: "Transporter",
          number: filtroTransporter.length,
        },
      },
      years: {
        2010: {
          year: "2010",
          number: filtro2010.length,
        },
        2012: {
          year: "2012",
          number: filtro2012.length,
        },
        2013: {
          year: "2013",
          number: filtro2013.length,
        },
        2014: {
          year: "2014",
          number: filtro2014.length,
        },
        2015: {
          year: "2015",
          number: filtro2015.length,
        },
        2016: {
          year: "2016",
          number: filtro2016.length,
        },
        2017: {
          year: "2017",
          number: filtro2017.length,
        },
        2018: {
          year: "2018",
          number: filtro2018.length,
        },
        2019: {
          year: "2019",
          number: filtro2019.length,
        },
        2020: {
          year: "2020",
          number: filtro2020.length,
        },
        2021: {
          year: "2021",
          number: filtro2021.length,
        },
        2022: {
          year: "2022",
          number: filtro2022.length,
        },
      },
    },
  });
}

function consultRocket(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  const cursor = dados[0]
    .find(req.params.textName)
    .limit(req.params.req.params.numberLimit);

  res.json(cursor.forEach(console.dir));
}

module.exports = { consultData, message, consultStatus, consultRocket };
