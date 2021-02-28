const express = require('express');
const app = express();


app.get('/student/studentsList', function(req, res){
     
    let list = { 
                   "results": [
                        "Rajesh",
                        "Ramesh",
                        "Sayali",
                        "Sanjana"
                    ]
                }

                res.send(list);
             });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));