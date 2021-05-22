const generateEngineer = engineerArr => {
    const engineerHtmlArr = engineerArr.map(({ nameE, empIDE, emailE, github }) => {
        return `
            <ul>${nameE}<ul>
            <ul>${empIDE}<ul>
            <ul>${emailE}<ul>
            <ul>${github}<ul>
            `;
    });

    return `
        <section>
        ${engineerHtmlArr}
        <section>
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
      <title>Team Demo</title>
    </head>
  
    <body>
      <h1>${manager.nameM}</h1>
      <h2>${manager.empIDM}<h2>
      <h2>${manager.emailM}<h2>
      <h2>${manager.officeNum}<h2>
       
      ${generateEngineer(teamMem)}
      
    </body>
    </html>
    `;
  };