import { NFT_API_KEY } from '../store/api_key';

const axios = require('axios');
export const fetchImagesNft = async () => {
  const URL_IMAGE_NFT = `https://pixabay.com/api/?key=${ NFT_API_KEY }`

  const cat = 'science'
  // const queries = [
  //   'tech',
  //   'fantasy',
  //   'galaxy',
  //   'energy',
  //   'art',
  //   'planets',
  //   'cryptocurrency',
  //   'psychedelic',
  //   'hack',
  //   'virtual',
  //   'nft',
  //   'network',
  //   'power'
  // ]
  const queries = [
    'abstract',
    'cyberpunk',
    'neon',
    'futuristic',
    'aliens',
    'technology',
    'cryptocurrency',
    'galaxy',
  ]
  // const categories = [
  //   'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music', ''
  // ]

  const randomCategory = Math.floor(Math.random () * queries.length ) + 0

  const options = {
    method: 'Get',
    url: `${URL_IMAGE_NFT}&q=${ queries[randomCategory] }`,
    // params: { id: queries[randomCategory] }
  }
  // debugger
  const data = await axios.request(options).then(response => {

    const codeGenerator = () => {
      return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    console.log( queries[randomCategory] )
     const dataImg = response.data.hits.map(item => {

      const randoms = {
        token:  codeGenerator(),
        contract: `0x${codeGenerator()}`,
        price_eth: ((Math.random() * 1.5) + 0).toFixed(6),
        code_nft: `nft_code_${codeGenerator()}`
      }

      const { token, contract, price_eth, code_nft  } = randoms
      // debugger
       return {
         id: item.id,
         collections: item.collections,
         comments: item.comments,
         downloads: item.downloads,
         likes: item.likes,
         tags: item.tags,
         small_image: item.previewURL,
         regular_image: item.webformatURL,
         large_image: item.largeImageURL,
         user: item.user,
         user_id: item.user_id,
         user_image: item.userImageURL,
         views: item.views,
         token_id: token,
         contract_address: contract,
         nft_code: code_nft,
         price_eth: price_eth
        //  id_token: 

       }
     })

     return dataImg
  }).catch((error) => {
    return error
  })
  // debugger
  return [data]
}