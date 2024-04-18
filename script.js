function hashMap() {
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  //   function set(key, value) {
  //     const index = hash(key);
  //     let bucket = buckets[index];

  //     if (!bucket) {
  //       bucket = buckets[index] = []
  //     }

  //     let found = false;
  //     for (let i = 0; i < bucket.length; i++) {
  //       if (bucket[i].key === key) {
  //         bucket[i].value = value;
  //         found = true;
  //         break;
  //       }
  //     }

  //     if (!found) {
  //       bucket.push({ key, value });
  //       this.size++;
  //     }
  //   }

  return {
    hash,
    set,
  };
}
