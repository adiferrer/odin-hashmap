export default class HashMap {
  constructor(initialCapacity = 5) {
    this.buckets = Array(initialCapacity);
    this.size = 0;
  }

  // Improved hash function with modulo on each iteration
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  // Error handling for out-of-bounds index
  checkIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  // Resize the bucket array when load factor is reached
  resize() {
    const newBucketArray = new Array(this.bucketArray.length * 2);
    this.numElements = 0;
    for (let i = 0; i < this.bucketArray.length; i++) {
      const bucket = this.bucketArray[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          const [key, value] = bucket[j];
          this.set(key, value);
        }
      }
    }
    this.bucketArray = newBucketArray;
  }

  // Set a key-value pair
  set(key, value) {
    const hashCode = this.hash(key);
    this.checkIndex(hashCode);

    let bucket = this.buckets[hashCode];
    if (bucket === undefined) {
      // Create a new linked list for this bucket
      bucket = [];
      this.buckets[hashCode] = bucket;
    }

    // Check for existing key and update value
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Add new key-value pair to the bucket
    bucket.push([key, value]);
    this.size++;
  }

  // Get the value for a key
  get(key) {
    const hashCode = this.hash(key);
    this.checkIndex(hashCode);

    const bucket = this.buckets[hashCode];
    if (bucket === undefined) {
      return null;
    }

    // Search for the key in the bucket
    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  // Check if a key exists
  has(key) {
    return this.get(key) !== null;
  }

  // Remove a key-value pair
  remove(key) {
    const hashCode = this.hash(key);
    this.checkIndex(hashCode);

    const bucket = this.buckets[hashCode];
    if (bucket === undefined) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Get the number of stored elements
  length() {
    return this.size;
  }

  // Clear all key-value pairs
  clear() {
    this.buckets = Array(this.buckets.length);
    this.size = 0;
  }

  // Get all keys as an array
  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      if (bucket !== undefined) {
        for (const pair of bucket) {
          keys.push(pair[0]);
        }
      }
    }
    return keys;
  }

  // Get all values as an array
  values() {
    const values = [];
    for (const bucket of this.buckets) {
      if (bucket !== undefined) {
        for (const pair of bucket) {
          values.push(pair[1]);
        }
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      if (bucket !== undefined) {
        for (const pair of bucket) {
          entries.push(pair);
        }
      }
    }
    return entries;
  }
}
