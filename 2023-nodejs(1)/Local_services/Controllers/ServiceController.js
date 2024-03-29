const ServiceSchema = require('../Schema/ServiceSchema')


const searchServices = async (req,res) => {

    const query = req.params.query;
    
    ServiceSchema.find(
        {
            $or: [
                {name : {$regex: query, $options: "$i"}},
                {city :{$regex: query, $options: "$i"} }
            ],
        },
        (err,data) => {
            res.status(200).json({
                message: "services fetched successfully",
                data : data
            })
        }
    )
}





const addService = (req,res) => {

    const serviceData =  {
        name : req.body.name,
        category : req.body.category,
        subcategory : req.body.subcategory,
        description : req.body.description,
        fees : req.body.fees,
        area : req.body.area,
        city : req.body.city,
        state : req.body.state,
    }
    
    const service = new ServiceSchema(serviceData)

    service.save((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while adding Service"
            })
        }else{
            res.status(201).json({
                message : "service added successfully",
                data : data
            })
        }
    })
}

const getAllService = (req,res) => {
    
    ServiceSchema.find().populate('category').exec((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while fetching Service"
            })
        }else{
            res.status(201).json({
                message : "data found successfully",
                data : data
            })
        }
    })
}

const deleteService = (req,res) => {

    const id = req.params.id

    ServiceSchema.findByIdAndDelete(id,(err,data) =>{
        if(err){
            res.status(500).json({
                message: "Error deleting Service"
            })
        }else{
            res.status(200).json({
                message : "subcategory deleted..",
                data : data
            })
        }

    })
}

module.exports = {
    addService,
    getAllService,
    deleteService,
    searchServices
}