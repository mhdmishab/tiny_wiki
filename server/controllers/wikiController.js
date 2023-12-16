import axios from "axios";
import cheerio from "cheerio";

export const SearchTerm=async(req,res)=>{
    try {
        const searchTerm = req.params.searchTerm;
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchTerm}`;
    
        // Make a request to the Wikipedia API
        const response = await axios.get(apiUrl);
       
    
        // Extract relevant data from the response
        const searchResults = response.data.query.search.map((result) => ({
          title: result.title,
          // snippet: result.snippet,
          pageId: result.pageid,
        }));
        // res.send(response.data)
    
        res.json({ results: searchResults });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const ReadSlug=async (req, res) => {
  try {
    const slug = req.params.slug;
    console.log(slug)

    // Fetch HTML content and title from the page
    const htmlResponse = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&pageids=${slug}&utf8=1`);
    console.log(htmlResponse)
    const pageContent = htmlResponse.data.query.pages[slug].extract;

    if (pageContent) {
      // Send the content to the browser
      res.json({content:pageContent});
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};