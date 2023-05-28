import { Typography } from "@mui/material";
import { StarRate, StarOutline } from "@mui/icons-material";

interface Props {
    rating: number;
}

const Rating = (props: Props) => {
    return(
        <div className="flex items-center">
        {[...Array(Math.floor(props.rating))].map((i) => (
          <StarRate className="w-4 h-4 text-orange-c-100" key={i} />
        ))}
        {[...Array(5 - Math.floor(props.rating))].map((i) => (
          <StarOutline className="w-4 h-4 text-gray-c-300" key={i} />
        ))}
        <Typography
          component="p"
          className="text-gray-c-200 text-xs ml-1.5 mb-0"
        >
          {props.rating}
        </Typography>
      </div>
    )
}

export default Rating;