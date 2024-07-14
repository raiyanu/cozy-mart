import { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("handleSearch");
    navigate(`/search?search=${query}`);
  };
  return (
    <Search
      style={{
        display: "block",
        marginRight: "auto",
      }}
    >
      <SearchIconWrapper
        onClick={() => {
          setSearchVisible(!searchVisible);
        }}
      >
        <SearchIcon />
      </SearchIconWrapper>
      {searchVisible ? (
        <Box component="form" onSubmit={handleSearch}>
          <StyledInputBase
            htmlFor="searchProduct"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            label="searchProduct"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      ) : null}{" "}
    </Search>
  );
}

export default SearchBar;

const productsLists = [
  { title: "Product 1" },
  { title: "Product 2" },
  { title: "Product 3" },
  { title: "Product 4" },
  { title: "Product 5" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: "auto",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
