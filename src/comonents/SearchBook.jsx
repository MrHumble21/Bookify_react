import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Box,
  Divider,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
function SearchBook() {
  const [books, setBooks] = useState([]);
  const [inp, setInp] = useState('');
  const searchHandler = e => {
    setInp(e.target.value);
  };
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
    <>
      <Container>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Search Books by name</FormLabel>
          <Input
            value={inp}
            onChange={searchHandler}
            id="first-name"
            placeholder="Search by name"
          />
        </FormControl>
      </Container>
      <br />
      <br />
      <Container maxW="100%">
        <SimpleGrid columns={[2, null, 4]} spacing="5px">
          {books
            .filter(b => b['title'].toLowerCase().includes(inp.toLowerCase()))
            .map((e, i) => (
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
    </>
  );
}

export default SearchBook;

// books.map((e, i) => (
//   <Link state={e} key={i} to={`/book/${e['id']}`}>
//     <Box p={5} shadow="md" borderWidth="1px">
//       <Divider />
//       <Image
//         sx={{ width: '100%' }}
//         src={e['imgUrl']}
//         alt="Dan Abramov"
//       />
//       <br />
//       <Heading fontSize="sm">{e['title']}</Heading>
//       <Text mt={4}>{e['author']}</Text>
//     </Box>
//   </Link>
// ))
