const express = require('express')
const apiRoutes = require('./routes/apiRoutes/index.js')
const htmlRoutes = require('./routes/htmlRoutes/index.jsd')
const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});