import { Text, Flex, Divider, Menu, MenuItem } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useUserAttributes } from './useUserAttributes';

function App() {
  const { signOut } = useAuthenticator();
  const { attributes } = useUserAttributes();

  return (
    <main>
      <Menu position="absolute" top="1rem" left="1rem">
        <MenuItem onClick={() => alert('Download')}>Download</MenuItem>
        <MenuItem onClick={() => alert('Create a Copy')}>Create a Copy</MenuItem>
        <MenuItem onClick={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
        <Divider />
        <MenuItem isDisabled onClick={() => alert('Delete')}>Delete</MenuItem>
        <MenuItem onClick={() => alert('Sign out')}>Sign out</MenuItem>
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
        <Divider orientation="vertical" />
        <button onClick={signOut}>Sign out</button>
      </Flex>
    </main>
  );
}

export default App;
