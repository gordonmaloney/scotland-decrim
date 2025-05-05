export const BtnStyle = {
	fontSize: "large",
	fontWeight: "600",
	borderRadius: "10px",
	color: "#F6F3F6",
	backgroundColor: "#3C5A14",
	border: "1px solid #3C5A14",
	"&:hover, &:active": { backgroundColor: "#F6F3F6", color: "#3C5A14" },
  "&:disabled": {color: 'red'}
};

export const BtnStyleSmall = {
	fontSize: "medium",
	fontWeight: "600",
	borderRadius: "10px",
	color: "#F6F3F6",
	backgroundColor: "#3C5A14",
	border: "1px solid #3C5A14",
	"&:hover, &:active": { backgroundColor: "#F6F3F6", color: "#3C5A14" },
	"&:disabled": { color: "#a7a7a7", backgroundColor: "#4e5248" },
};


export const CheckBoxStyle = {
	color: "#3C5A14", // Default color for the checkbox
	"&.Mui-checked": {
		color: "#3C5A14", // Color when the checkbox is checked
	},
	"&:hover": {
		backgroundColor: "#F6F3F6",
		color: "#3C5A14",
	},
};


export const TextFieldStyle = {
  backgroundColor: 'rgba(0,0,0,0)',
  marginBottom: '12px',
  marginTop: "3px",
  "& label.Mui-focused": {
    color: "#537A8B",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#537A8B",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#537A8B",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#537A8B",
    },
    "& .MuiSelect-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#537A8B",
      },
    },
  },
};