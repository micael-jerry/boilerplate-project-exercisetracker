const projectPath = require('../../projectpath');

const getIndex =(req, res) => {
    res.sendFile(projectPath() + '/views/index.html')
}

const ping = (req, res) => {
    res.json(
        {message: "PONG"}
    );
};

module.exports.getIndex = getIndex;
module.exports.ping = ping;