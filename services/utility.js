const Utility = {
    parseVueData: parseVueData
  }
  
  function parseVueData(data) {
    return JSON.parse(JSON.stringify(data))
  } //parseVueData
  
  export default Utility