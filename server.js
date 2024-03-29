const express=require('express');
const path=require('path');

const app=express();

app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname,'build')));
app.use('*', (req, res)=> res.sendFile(path.join(__dirname, 'build/index.html')))

app.listen(app.get('port'), ()=> console.log(`port ${app.get('port')}`));