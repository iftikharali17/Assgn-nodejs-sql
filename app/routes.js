module.exports = function(app){
    app.get('/', function(req,res){
        res.send('This is the homepage');
    })
    app.get('/top', function(req,res){
        res.send('This is the top page');
    })
    app.get('/result', function(req,res){
        res.send('This is the results page');
    })
    app.get('/api/results', function(req,res){
        res.json({message: 'This is the API page'});
    })
}