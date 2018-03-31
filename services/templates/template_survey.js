const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div>
          <p>
            <h3>Hi,</h3>
            Thank you for your support!
          </p>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/respondedYes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/respondedNo">No</a>
          </div>
          <br>
          <div>Thank you</div>
        </div>
      </body>
    </html>
  `;
}
