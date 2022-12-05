router.put('/prefrences',
(req, res) => {

    let updates = {};
    if (req.body.subscribtion) {
        updates['subscribtion'] = req.body.subscribtion;
    };
     UserModel
     .findOneAndUpdate(
        {
            "email":req.body.email
        },
        { 
            $set: updates
        },
        {
            new:true
        }
     )
     .then(
        (dbDocument) => {
            res.json(dbDocument);
        }
     )
     .catch(
        (error) => {
            console.log('/users/prefrences error',error);
            res.send('An error occurred');
        }
     );
    }
);