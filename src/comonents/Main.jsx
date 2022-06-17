import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Divider,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Main = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://bookshelves.p.rapidapi.com/books',
      headers: {
        'X-RapidAPI-Key': '39d4db584bmshe48255d07f645e9p114acajsnf4c6801119af',
        'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBooks(response.data['Books']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  return (
    <Container maxW="100%">
      <SimpleGrid columns={[2, null, 4]} spacing="5px">
        {books.map((e, i) => (
          <Link state={e} key={i} to={`/book/${e['id']}`}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Divider />
              <Image
                sx={{ width: '100%' }}
                src={e['imgUrl']}
                alt="Dan Abramov"
              />
              <br />
              <Heading fontSize="sm">{e['title']}</Heading>
              <Text mt={4}>{e['author']}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Main;
