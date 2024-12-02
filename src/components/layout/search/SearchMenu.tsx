import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { closeSearch } from "../../../store/uiSlice";
import { addNewVideoToHistory } from "../../../store/historySlice";

export default function SearchMenu() {
  const open = useSelector((state: TState) => state.ui.searchState);
  const searchVideos = useSelector(
    (state: TState) => state.search.searchVideos
  );
  const navigate = useNavigate();
  const dispatch: TDispatch = useDispatch();

  return (
    <div>
      <ul
        className={`absolute bottom-0 left-0 right-0 translate-y-full rounded-md shadow-xl bg-white p-2 z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        {searchVideos.slice(0, 5).map((v) => (
          <li
            key={v.id}
            onMouseDown={() => {
              navigate(`/video/${v.id}`);
              dispatch(closeSearch());
              dispatch(addNewVideoToHistory({ videoId: v.id, title: v.title }));
            }}
            className="font-medium mb-2 hover:bg-gray-100 border-b-2 p-1 cursor-pointer"
          >
            {v.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
