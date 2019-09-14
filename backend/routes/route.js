
module.exports = function (app, express, mysqlConnection) {

    const router = express.Router();
  
    // podaci table //
    router.route('/narudzbine')
      .get((req, res) => {
        mysqlConnection.query('SELECT * FROM narudzbine', function (error, results) {
          if (error) throw error;
          return res.send({ error: false, data: results, message: 'narudzbine - lista', user: req.user });
        });
      })
      .post((req, res) => {
        if (!req.body) {
          return res.status(400).send({ error: true, message: 'Please provide narudzbine data' });
        }
        mysqlConnection.query('INSERT INTO narudzbine (ime_prezime, adresa, telefon, datum) values (?,?,?,?)',
          [req.body.ime_prezime, req.body.adresa, req.body.telefon, req.body.datum], function (error, results) {
            if (error) throw (error);
            //req.user is the info about the logged in user
            return res.send({ error: false, data: results, message: 'New list has been added successfully.', user: req.user });
          });
      });
    
    app.use(router);
}