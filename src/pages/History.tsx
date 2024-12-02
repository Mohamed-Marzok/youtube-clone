import { useState } from "react";
import DeleteAllBtn from "../components/history/DeleteAllBtn";
import DeleteModal from "../components/history/DeleteModal";
import DeleteSelectedBtn from "../components/history/DeleteSelectedBtn";
import HistoryCards from "../components/history/HistoryCards";

export default function History() {
  const [selected, SetSelected] = useState<string[]>([]);

  return (
    <div>
      <div className="flex">
        <DeleteSelectedBtn selected={selected} SetSelected={SetSelected} />
        <DeleteAllBtn />
      </div>
      <HistoryCards selected={selected} SetSelected={SetSelected} />
      <DeleteModal />
    </div>
  );
}
