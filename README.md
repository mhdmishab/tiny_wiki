
# TINY_WIKI with MERN Stack

Sometimes it is difficult to find information for something you want quickly. If you are someone who likes Wikipedia but dislikes manually searching for information you need then TinyWiki is for you! TinyWiki allows you to search for a topic you need some information about and searches for information on that topic in Wikipedia for you. 🚀🐦



**The following tools were utilized for the project:**

- libraries: Morgan, nodemon, body-parser, Axios, Antd, Tailwind CSS, dotenv, redux_toolkit, react-persist, chart.js.


## Deployment Instructions:

#### Prerequisites:

- Node.js should be installed on your system.


#### Step 1: Clone the Project

Open a terminal and run the following command to clone this project:
```bash
git clone https://github.com/mhdmishab/tiny_wiki.git
 
```
#### Step 2: Navigate to the Project Directory of Client 

Navigate to the `client` directory within the cloned project using the command:
```bash
cd sweet_tweet/client
 
```

#### Step 3: Install Global Dependencies

Run the following command. This will help with server restarts during development.
```bash
 npm install
 
```

#### Step 3: Start Running the Front-end 

After navigating to the `client` directory, start the front end using the following command:
```bash
npm run dev
 
```

#### Step 4: Navigate to the Project Directory of server 

Open Another terminal and Navigate to the `server` directory within the cloned project using the command:
```bash
cd tiny_wiki/server
 
```

#### Step 5: Configure Environment Variables

Before running the backend server, make sure to create an `.env` file in the `server` directory. Add the following environment variables to the file:
```bash
PORT= your_port
MONGO_URL= your_mongo_url
ACCESS_KEY= your_admin_access_key
ACCESS_TOKEN_SECRET= your_access_token_secret
REFRESH_TOKEN_SECRET= your_refresh_token_secret
 
```

#### Step 6: Install Global Dependencies and nodemon

Run the following command to install nodemon globally. This will help with server restarts during development.
```bash
 npm install
 npm install -g nodemon
 
```
#### Step 7: Start Running the Back-end 

After navigating to the `server` directory, start the backend using the following command:
```bash
npm run dev
 
```

## Conclusion

TINY_WIKI is a comprehensive MERN (MongoDB, Express.js, React.js, Node.js) stack project designed to seamlessly integrate with Wikipedia APIs. This professional-grade application features robust JWT authentication, including a secure refresh token mechanism. The backend is powered by MongoDB, providing efficient data storage, retrieval, and management.


