import { Redirect } from 'expo-router';

const index = () => {
  return (
    <Redirect href="/(home)/adminlogin" />
  );
};

export default index