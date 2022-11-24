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
        falcon: filtroFalcon.length,
        crs: filtroCRS.length,
        asia: filtroASIA.length,
        star: filtroSTAR.length,
        transporter: filtroTransporter.length,
      },
      years: {
        2010: filtro2010.length,
        2012: filtro2012.length,
        2013: filtro2013.length,
        2014: filtro2014.length,
        2015: filtro2015.length,
        2016: filtro2016.length,
        2017: filtro2017.length,
        2018: filtro2018.length,
        2019: filtro2019.length,
        2020: filtro2020.length,
        2021: filtro2021.length,
        2022: filtro2022.length,
      },
    },
  });
}

module.exports = { consultData, message, consultStatus };
