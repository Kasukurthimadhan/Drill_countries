  // 1. Store all country names in array.

  function allCountryNames(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No country names in the data")
        }
        let countryNames=data.map((names) => names.country);
        return countryNames;
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
  }

  module.exports=allCountryNames;