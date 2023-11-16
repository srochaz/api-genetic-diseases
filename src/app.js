const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const findAll = (req, res) => {

    return res.status(200).json ({

        message: 'method get - findAll'
    })


}

app.get('/api/v1/genetic-diseases', findAll )



app.post('/api/v1/genetic-diseases', (req, res) => {


    const disease = req.body

    const { enfermedad, especie, raza} = req.body

    console.log(enfermedad)

    return res.status(201).json({
        message: 'method post - create',
        data: disease
    })

})

app.get('/api/v1/genetic-diseases/:id', (req, res) => {

    console.log(req.params)

    return res.status(200).json({
        message: 'method get - findOne',
        id: req.params.id
    })
})

app.patch('/api/v1/genetic-diseases/:id', (req, res) => {

    const { id } = req.params;

    return res.status(200).json({

        message: 'method patch - update',
        id,
    })
})

app.delete('/api/v1/genetic-diseases/:id', (req, res) => {

        const { id } = req.params; 

        return res.status(200).json ({
            message: 'method delete - delete', 
            id,
        })

})



app.listen(3000, () => {
    console.log("server running on port:" + 3000)
})