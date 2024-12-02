import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { toggleBtns } from "../../data";
import { useDispatch } from "react-redux";
import { filterVideosByCategory } from "../../store/videosSlice";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string>("all_content");
  const dispatch = useDispatch();

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  React.useEffect(() => {
    dispatch(filterVideosByCategory(alignment));
  }, [alignment, dispatch]);

  return (
    <ToggleButtonGroup
      value={alignment}
      onChange={handleAlignment}
      exclusive
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginBottom: 5,
        "& .MuiToggleButton-root": {
          borderRadius: "12px",
          height: "48px",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.5)",
            transform: "scale(1.05)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          },
          "&.Mui-selected": {
            bgcolor: "black",
            color: "#fff",
            fontWeight: "600",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
            transform: "scale(1.1)",
          },
        },
      }}
    >
      {toggleBtns.map((btn) => (
        <ToggleButton key={btn.value} value={btn.value}>
          {btn.text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
