import mongoose from 'mongoose';

const SearchKeywords = new mongoose.Schema({
    keyword:{
        type:String,
    }  
},
{
    capped: { size: 1024, max: 1000, autoIndexId: true },
}
);

const SearchKeyword = mongoose.model('SearchKeywords', SearchKeywords);

export default SearchKeyword