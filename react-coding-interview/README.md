**Fetch an API and list the users and sort ascending and descending**

```
import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

const APIURL = "https://jsonplaceholder.typicode.com/users";
let count = 1;
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const tempUsers = [...users];
  console.log("defaultList", defaultList);
  const getUsers = () => {
    //fetch the list of users
    axios(APIURL)
      .then((response) => {
        setUsers(response.data);
        setDefaultList(response.data);
      })
      .catch((err) => {
        console.log("Failed to fetch users");
      });
  };

  const sortByAscending = () =>
    tempUsers.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });

  const sortByDescending = () =>
    tempUsers.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
    });

  const sortList = () => {
    //write code here
    // sort the user list by name's length
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1

    // const sortByName = tempUsers.sort((a, b) => a.name.length - b.name.length);
    if (count === 0) {
      setCount(count + 1);
      setUsers(sortByAscending);
    } else if (count === 1) {
      setCount(count + 2);
      setUsers(sortByDescending);
    } else {
      setUsers(defaultList);
      setCount(0);
    }
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {users.map((user) => {
          return (
            <div style={{ border: "1px solid", padding: "10px" }} key={user.id}>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.username}</li>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default App;

```

**Loading text using HOC**

```
import React, {useState, useEffect} from 'react';

const withLoading = (WrappedComponent) => {
  const WithLoading = (props) => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true);
      // Perform some asynchronous operation here
      // Once the operation is complete, set isLoading to false
      setIsLoading(false);
    }, []);

    render() {
      return (
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  }
  return WithLoading;
}

const MyList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

const MyListWithLoading = withLoading(MyList);

const ListingNames = () => {
  const [items, setItems] = React.useState([
    { id: 1, name: 'Melvin' },
    { id: 2, name: 'Vicky' },
    { id: 3, name: 'Richard' },
  ]);

  const handleAdd = () => {
    setItems([...items, { id: items.length + 1, name: 'Crystal' }]);
  }

  return (
    <div>
      <MyListWithLoading items={items} />
      <button onClick={handleAdd}>Add Crystal</button>
    </div>
  );
}

export default ListingNames;
```

**Counter Custom hook**

```
import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
}

function MyComponent() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

**Focus on Input using useRef()**

```
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default TextInput;
```

**index as the key, you may run into issues with component state**

```
import React, { useState } from 'react';

const KeyAsIndexIssue = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (inputValue.trim()!== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  }

  const handleRemove = (index) => {
    setItems(items.filter((item, i) => i!== index));
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add Pear</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Pear</button>
    </div>
  );
}

export default KeyAsIndexIssue;
```

**This custom hook, useToggle**

```
import React, { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle];
}

function MyComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>The toggle is on!</p>}
    </div>
  );
}
```

**useDebounce**

```
import { useEffect, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

In this example, we define the useDebounce hook that takes two parameters: callback, which represents the function to be debounced, and delay, which specifies the debounce delay in milliseconds.

We use the useRef hook to create a mutable reference, timeoutRef, to keep track of the timeout ID. This reference will persist across re-renders.

Inside the useEffect hook, we clean up the previous timeout on re-render by clearing the timeout if it exists. This ensures that the debounce behaviour remains consistent even if the component re-renders frequently.

The debouncedCallback function is returned from the hook. It checks if there is an existing timeout and clears it before setting a new timeout using setTimeout. The actual callback function is invoked after the specified delay.

<!-- Using the Debounce Hook -->
import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useDebounce((term) => {
    // Perform search operation with the debounced term
    console.log('Searching for:', term);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Debounce the search callback
    handleSearch(value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

In this example, we have a SearchInput component that renders an input field. We use the useState hook to maintain the search term state. The handleSearch function is obtained by calling the useDebounce hook, passing the search callback function and a delay of 500 milliseconds.

Inside the handleChange function, we update the search term state and call the handleSearch function, which is debounced using the useDebounce hook. The debounced function will only be invoked after the specified delay of inactivity.
```

**useArray**

```
import { useState } from "react"

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  function update(index, newElement) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }

useArray is a custom React hook that allows a component to manage an array state. It uses the built-in useState hook from the React library. The hook takes in an argument, defaultValue, which is used to initialize the array state. The hook returns an object with several properties:

array is the current array state
set is a function that allows you to set the array state to a new value
push is a function that will enable you to add an element to the end of the array
filter is a function that allows you to filter the array by passing a callback function
update is a function that will enable you to update an element at a specific index of the array
remove is a function that will allow you to remove an element to a particular index of the array
clear is a function that will enable you to clear the array.

import useArray from "./useArray"

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
```

**useStorage**

```
import useArray from "./useArray"

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

useLocalStorage and useSessionStorage is a custom React hook that allows a component to store a value in the browser's LocalStorage or SessionStorage and keep it in sync with the component's state. It uses the built-in useState and useEffect hooks from the React library and the useCallback hook.

The useLocalStorage and useSessionStorage functions are similar but use different storage localStorage and sessionStorage respectively. They take in two arguments: key and defaultValue. key is the key that is used to store the value in the storage object, and defaultValue is the value that will be used if the key is not found in the storage object.

import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
```

**useAsync**

```
import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}

useAsync is a custom React hook that allows a component to handle asynchronous operations and keep track of the loading, error, and value states. It uses the built-in useState and useEffect hooks from the React library and the useCallback hook.

The hook takes in two arguments:
callback is a function that returns a promise. This function is responsible for performing the async operation.
dependencies is an array of dependencies the hook should listen for changes. The callback function will be executed when any of the dependencies change.

import useAsync from "./useAsync"

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}
```

**To mock an API call using Jest and RTL**

```
Import the module you want to mock into your test file.
Use jest.mock() to mock the module.
Use .mockResolvedValue() to provide a mocked response.
Use render() to render the component.
Use screen.getByText() to assert that the component displays the mocked response.

import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

jest.mock('./api');
api.mockResolvedValue({
  users: [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
  ],
});

test('MyComponent should display a list of users', () => {
  render(<MyComponent />);

  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});
```
