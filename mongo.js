const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://venkateswarlu22ch:ch9381289615@cluster0.xzkyyse.mongodb.net/mst?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const feedbackSchema = new mongoose.Schema({
    dept: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    facultyName: {
        type: String,
        required: true
    },
    explanation: {
        type: Number,
        required: true
    },
    clarifying: {
        type: Number,
        required: true
    },
    usage: {
        type: Number,
        required: true
    },
    interaction: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});



const collection = mongoose.models.mst1 || mongoose.model("mst1",newSchema)
const collection1 =mongoose.models.mstfeed || mongoose.model("mstfeed",feedbackSchema)


module.exports={collection,collection1}