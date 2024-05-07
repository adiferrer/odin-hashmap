import './styles.css';
import HashMap from './hashmap';
import HashSet from './hashset';

// Function to test the HashMap and HashSet classes
function testing() {
    // test HashMap
    const hashMap = new HashMap();
    console.log('Testing HashMap');
    console.log('----------------');
    console.log('Setting key-value pairs...');
    hashMap.set('name', 'John Doe');
    hashMap.set('age', 30);
    hashMap.set('dob', '01/01/1990');
    console.log('Getting key-value pairs...');
    console.log(hashMap.get('name')); // John Doe
    console.log(hashMap.get('age')); // 30
    console.log(hashMap.get('dob')); // 01/01/1990
    console.log(hashMap.has('dob')); // true
    console.log(hashMap.has('email')); // false
    console.log('Removing key-value pair...');
    hashMap.remove('dob');
    console.log(hashMap.has('dob')); // false

    // test HashSet
    const hashSet = new HashSet();
    console.log('\nTesting HashSet');
    console.log('----------------');
    console.log('Adding elements...');
    hashSet.set('name');
    hashSet.set('age');
    hashSet.set('dob');
    console.log('Checking elements...');
    console.log(hashSet.get('name')); // true
    console.log(hashSet.get('age')); // true
    console.log(hashSet.get('dob')); // true
    console.log(hashSet.get('email')); // false
    console.log('Removing elements...');
    hashSet.remove('dob');
    console.log(hashSet.get('dob')); // false
    console.log('----------------');
    console.log('End of tests');
}

const div = document.createElement('div');
const header = document.createElement('h1');
header.textContent = 'Testing HashMap and HashSet';
const paragraph = document.createElement('p');
paragraph.textContent = 'Open the console for the test results.';
div.append(header, paragraph);
document.body.appendChild(div);

// Run the testing function
testing(); 
