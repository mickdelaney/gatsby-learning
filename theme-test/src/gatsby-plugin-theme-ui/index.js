import merge from "lodash.merge"
import { theme } from "@mickdelaney/gatsby-theme-events"

export default merge({}, theme, {
  colors: {
    primary: "blue",
  },
})