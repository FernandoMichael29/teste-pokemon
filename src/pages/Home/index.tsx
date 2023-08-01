import { Body } from "../../component/atoms/body";
import { Text } from "../../component/atoms/text";

export const Home: React.FC = () => {

  return (
    <Body
      bg="gray"
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Text color="#000" fontSize="100px">
        testando tudo
      </Text>
    </Body>
  );
};
