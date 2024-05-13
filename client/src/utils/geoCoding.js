
const API_KEY = "pk.e215fb2c3c6c6b6de944e8ded7d8949d"
async function forwardGeoCoding(street) {
  try {
    const res = await fetch(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${street}&format=json&`)
    
    const data = await res.json();

    console.log("street", data)
  } catch (e) { 
    console.log(e)
  }
}

export {forwardGeoCoding}