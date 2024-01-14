const express = require('express');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const { Code } = require('./models');
const { sequelize } = require('./database');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST /code
app.post('/code', async (req, res) => {
  try {
    const { code } = req.body;
    const uuid = uuidv4();

    // Store the code in the database
    await Code.create({ uuid, code });

    // Return the generated UUID to the user
    res.json({ uuid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /code/:uuid
app.get('/code/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;

    // Retrieve the code from the database
    const code = await Code.findOne({ where: { uuid } });

    if (!code) {
      return res.status(404).json({ error: 'Code not found' });
    }

    // Return the code to the user
    res.json({ code: code.code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});