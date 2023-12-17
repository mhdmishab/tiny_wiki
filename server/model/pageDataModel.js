import mongoose from 'mongoose';

const pageDataSchema= new mongoose.Schema({
    pageId:{
        type: Number,
        
    },
    pageTitle:{
        type: String,
    }
})

const pageData=mongoose.model('pageData',pageDataSchema);

export default pageData;