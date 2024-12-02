import { useDispatch, useSelector } from "react-redux";
import BaisModal from "../ui/BaisModal";
import { TState } from "../../store/store";
import { closeDeleteHistory } from "../../store/uiSlice";
import { deleteAllItemInHistory } from "../../store/historySlice";

export default function DeleteModal() {
  const open = useSelector((state: TState) => state.ui.deleteHistoryState);
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    dispatch(deleteAllItemInHistory());
    dispatch(closeDeleteHistory());
  };
  return (
    <BaisModal open={open} close={() => dispatch(closeDeleteHistory())}>
      <div className="p-4 flex flex-col items-center gap-4">
        <p className="text-lg font-semibold text-center">
          هل أنت متأكد أنك تريد حذف هذا العنصر؟
        </p>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => dispatch(closeDeleteHistory())}
          >
            إغلاق
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDeleteBtnClick}
          >
            حذف
          </button>
        </div>
      </div>
    </BaisModal>
  );
}
