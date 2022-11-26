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
        dateone: {
          year: "2010",
          numbers: filtro2010.length,
        },
        datetwo: {
          year: "2012",
          numbers: filtro2012.length,
        },
        datethree: {
          year: "2013",
          numbers: filtro2013.length,
        },
        datefour: {
          year: "2014",
          numbers: filtro2014.length,
        },
        datefive: {
          year: "2015",
          numbers: filtro2015.length,
        },
        datesix: {
          year: "2016",
          numbers: filtro2016.length,
        },
        dateseven: {
          year: "2017",
          numbers: filtro2017.length,
        },
        dateeight: {
          year: "2018",
          numbers: filtro2018.length,
        },
        dateten: {
          year: "2019",
          numbers: filtro2019.length,
        },
        dateeleven: {
          year: "2020",
          numbers: filtro2020.length,
        },
        datetwelve: {
          year: "2021",
          numbers: filtro2021.length,
        },
        datethirteen: {
          year: "2022",
          numbers: filtro2022.length,
        },
      },
    },
  });
}

module.exports = { consultData, message, consultStatus };
