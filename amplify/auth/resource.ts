import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
    
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: true,
    },
    // Maps to Cognito standard attribute 'gender'
    gender: {
      mutable: true,
      required: true,
    },
    birthdate: {
      mutable: true,
      required: true,
    },
  },
});
