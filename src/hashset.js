import HashMap from "./hashmap";

export default class HashSet extends HashMap {
    constructor(initialCapacity = 5) {
      super(initialCapacity);
    }
  
    set(key) {
      super.set(key, true); // Use a dummy value (e.g., true) for HashSet
    }
  
    get(key) {
      // Directly return the existence check from super.get (which returns null if not found)
      return super.get(key) !== null;
    }
  }
  
