import { useSelector } from "react-redux";
import { TState } from "../../store/store";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
export default function Comments() {
  const comments = useSelector(
    (state: TState) => state.videoById.videoById.comments
  );
  return (
    <div className="mt-8">
      <Accordion>
        <AccordionSummary
          expandIcon={<CommentIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold text-lg "
        >
          Comments
        </AccordionSummary>
        <AccordionDetails>
          {comments.map((comment) => (
            <div className=" mb-8 bg-white shadow-md p-2 ">
              <p className="text-lg font-medium mb-3">{comment.comment}</p>
              {comment.replies.map((replie) => (
                <p className="mb-2 mr-1">
                  <KeyboardReturnIcon sx={{ color: "rgba(0,0,0,.2)" }} />
                  {replie}
                </p>
              ))}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
