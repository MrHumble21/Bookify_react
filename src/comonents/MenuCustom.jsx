import React from 'react';
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuDivider,
  MenuGroup,
  MenuItem,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { HamburgerIcon, TriangleDownIcon } from '@chakra-ui/icons';
function MenuCustom() {
  return (
    <Box m={5}>
      <Menu>
        <span>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />{' '}
          <Link to="/">
            <Text
              sx={{ display: 'inline' }}
              mt={5}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              m={3}
              wordBreak
            >
              Bookify
            </Text>
          </Link>
        </span>
        <MenuList>
          <MenuGroup title="Main Menu">
            <MenuDivider />

            <Link to="/">
              <MenuItem>Go Back</MenuItem>
            </Link>
            {/* <Link to="/all-books">
              <MenuItem>All Books</MenuItem>
            </Link> */}
            <Link to="/search-books">
              <MenuItem>Search Books </MenuItem>
            </Link>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuCustom;
