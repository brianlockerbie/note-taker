const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// apiRoutes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`View API server on port ${PORT}. Enjoy!`);
});