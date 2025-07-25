import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { useAuthenticator,
  Flex,
  Text,
  Divider,
  Menu,
  MenuItem,
  View
 } from '@aws-amplify/ui-react';

import { useUserAttributes } from './useUserAttributes';

const client = generateClient<Schema>();

 



function App() {

  //const { signOut } = useAuthenticator();
  const { signOut } = useAuthenticator();
  const { attributes } = useUserAttributes();

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);


  

  //<h1>My todos</h1>
  return (
    <main>
      <Menu
        position="absolute"
        top="1rem"
        left="1rem"      
      >
        <MenuItem onClick={() => alert('Download')}>
          Download
        </MenuItem>
        <MenuItem onClick={() => alert('Create a Copy')}>
          Create a Copy
        </MenuItem>
        <MenuItem onClick={() => alert('Mark as Draft')}>
          Mark as Draft
        </MenuItem>
        <Divider />
        <MenuItem isDisabled onClick={() => alert('Delete')}>
          Delete
        </MenuItem>
        <MenuItem onClick={(signOut) => alert('Sign out')}>
          Sign out
        </MenuItem>
      </Menu>
      <Flex 
        position="absolute"
        top="1rem"
        right="1rem"
        direction="row"
        alignItems="center"
        gap="0.5rem"
        >
        <Text>{attributes?.preferred_username}</Text>
        <Divider 
          orientation="vertical" />
        <button onClick={signOut}>Sign out</button>
      </Flex>  

      
    </main>
  );
}

export default App;
