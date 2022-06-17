import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Text,
  Badge,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import React from 'react';

function Description() {
  const location = useLocation();
  const data = location.state;
 
  return (
    <Container maxW={'xxl'}>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Image
          sx={{ width: '55%', margin: 'auto' }}
          src={data['imgUrl']}
          alt="Dan Abramov"
        />

        <Box>
          {
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              m={3}
              wordBreak
            >
              {data['title']}
            </Text>
          }
          {
            <Flex>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml="3">
                <Text fontWeight="bold">
                  {data['author']}
                  <Badge m="1" colorScheme="green">
                    New
                  </Badge>
                  <Badge colorScheme="purple">{data['price']}</Badge>
                  <Badge m={1} colorScheme="yellow">⭐ {data['review']} ⭐</Badge>
                </Text>

                <Text fontSize="sm">{data['source']}</Text>
              </Box>
            </Flex>
          }
          <br />
          <br />
          {<Text fontSize="xl">{data['description']}</Text>}
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Description;
// sx={{backgroundColor:"red"}}
