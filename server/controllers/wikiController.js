import axios from "axios";
import SearchKeyword from "../model/keywordModel.js";
import pageData from "../model/PageDataModel.js";

export const SearchTerm=async(req,res)=>{
    try {
        const searchTerm = req.params.searchTerm;
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchTerm}`;
    
        const response = await axios.get(apiUrl);
       
        const searchResults = response.data.query.search.map((result) => ({
          title: result.title,
          snippet: result.snippet,
          pageId: result.pageid,
        }));

        const searchKeyword=new SearchKeyword({
          keyword:searchTerm
        })
        searchKeyword.save();

        res.json({ results: searchResults });
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export const ReadSlug=async (req, res) => {
  try {
    const slug = req.params.slug;
    console.log(slug)

    const htmlResponse = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&pageids=${slug}&utf8=1`);
    console.log(htmlResponse)
    const pageContent = htmlResponse.data.query.pages[slug].extract;
    const pageTitle= htmlResponse.data.query.pages[slug].title;

    if (pageContent) {
      const data= new pageData({
        pageId:slug,
        pageTitle:pageTitle
      })
      data.save();
      res.json({
        title:pageTitle,
        content:pageContent
      });
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};


