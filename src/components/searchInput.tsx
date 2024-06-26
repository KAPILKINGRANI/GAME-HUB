import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nameRef.current) onSearch(nameRef.current.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={nameRef}
          borderRadius={20}
          placeholder="Search Games...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
