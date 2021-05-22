const generateEngineer = engineerArr => {
    const engineerHtmlArr = engineerArr.map(({ nameE, empIDE, emailE, github }) => {
        return `
        <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${nameE}</h5>
          <h6 class="position">engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${empIDE}</li>
          <li class="list-group-item">Email: <a href="mailto:${emailE}">${emailE}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
        </ul>
        </div>
            `;
    });

    return `
        <div class="row">
            ${engineerHtmlArr}
        <div>
        `;
};

module.exports = templateData => {
    const { teamMem, ...manager } = templateData
    console.log(templateData)

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="nav">
            <h1 class="mainTitle">MY TEAM</h1>
        </div>
    <header>
    <body>
        <div class="container">
            <div class="row">
                <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${manager.nameM}</h5>
                      <h6 class="position">manager</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${manager.empIDM}</li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.emailM}">${manager.emailM}</a></li>
                      <li class="list-group-item">Office number: ${manager.officeNum}</li>
                    </ul>
                </div>
            </div>
            ${generateEngineer(teamMem)}
        </div>
    </body>
</html>
    `;
};