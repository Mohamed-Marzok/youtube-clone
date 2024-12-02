import SearchIcon from "@mui/icons-material/Search";
import { TDispatch } from "../../../store/store";
import { closeSearch, openSearch } from "../../../store/uiSlice";
import { useDispatch } from "react-redux";
import { filterVideosBySearch } from "../../../store/searchSlice";
import { useState } from "react";

export default function SearchInput() {
  const dispatch: TDispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(filterVideosBySearch(value));
  };

  return (
    <div className=" border border-red-700 rounded-full overflow-hidden">
      <input
        value={searchValue}
        placeholder="بحث"
        type="text"
        className="h-full w-full outline-none p-2 pr-10"
        onChange={handleSearch}
        onFocus={() => dispatch(openSearch())}
        onBlur={() => dispatch(closeSearch())}
      />
      <SearchIcon className="absolute right-2 top-1/2 -translate-y-[15px] text-red-700" />
    </div>
  );
}
