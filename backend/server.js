const express = require('express');
const port = 3500;
const app = express();
const cors = require('cors');
require("dotenv").config()
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const Moralis = require('moralis').default;



app.use(cors())

app.get("/nfts", async (req, res) => {
        
try {
    await Moralis.start({
      apiKey: process.env.API_KEY
    });
    const chain = EvmChain.ETHEREUM;

        const result = await Moralis.EvmApi.nft.getWalletNFTCollections({
          chain,         
            "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
        });
     
  console.log(result.raw);
  res.send(result.raw.result)
} catch (e) {
  console.error(e);
}
})
  
app.get("/nft", async (req, res) => {
        
  try {
      await Moralis.start({
        apiKey: process.env.API_KEY
      });
      const chain = EvmChain.ETHEREUM;
  
          const result = await Moralis.EvmApi.nft.getContractNFTs({
            chain,         
              "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
          });
       
    console.log(result.raw);
    res.send(result.raw.result)
  } catch (e) {
    console.error(e);
  }
    })
    
 

app.listen(port, () => {
    console.log("Server listening on port",+ port)
})
